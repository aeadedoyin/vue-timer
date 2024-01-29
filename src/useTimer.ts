import { type Ref, computed, onUnmounted, reactive, ref } from "vue";

/** — Time units for TTL option*/
type TimeUnit = "ms" | "s" | "m" | "h" | '';

/** — Options for the time (optional).*/
type TimerOptions = {
  log?: boolean;
  /** — If true, the timer will start immediately upon creation. [default: false]*/
  immediate?: boolean;
  /** — Time interval for recurring execution. [default: 1ms-0.001s (in milliseconds e.g. 1000-1s, 20000-20s)]*/
  interval?: number;
  /** — Time duration or due DateTime for a one-time execution. [default: 60000ms-60s]*/
  ttl?: `${number}${TimeUnit}` | Date
}

type Timer = {
    /** Timer id based on setInterval API. Cancel/Clear timer with clearInterval(timerId) anywhere */
    timerId: NodeJS.Timeout | undefined;
    /** — Current system DateTime */
    live: Date;
    /** — DateTime instance when the timer ends */
    due: Date;
    /** — The current status of the timer. */
    status: statuses;
    /** — The total ttl in milliseconds */
    duration: number;
    /** — The time elapsed since the timer started/resumed. */
    used: number;
    /** — The time remaining until the timer expires. */
    left: number;
    /** — Indicates whether the timer is running */
    isRunning: boolean;
    /** — Indicates whether the timer has expired. */
    hasExpired: boolean;
    /** — Pauses the timer.(but won't execute `callback`)*/
    pause: () => void;
    /** — Resumes the timer.(even if it is `paused`, `pending`, `stopped`)*/
    resume: () => false | undefined;
    /** — Starts the timer.(if ttl is in future)*/
    start: () => void;
    /** — Restarts the timer.(after resetting `used` to zero)*/
    restart: () => void;
    /** — Stop the timer.(and execute `callback` even if time hasn't ended)*/
    stop: () => void;
      /** — Update the timer ttl (duration) and starts immediately if `immediate` is true*/
    setTtl: (newTtl?: `${number}${TimeUnit}` | Date, newImmediate?: boolean | null) => false | undefined;
}

/** — Statuses used for status property*/
enum statuses {
  'PENDING' = 'Pending',
  'RESTARTED' = 'Restarted',
  'STARTED' = 'Started',
  'RESUMED' = 'Resumed',
  'STOPPED' = 'Stopped',
  'PAUSED' = 'Paused',
  'ENDED' = 'Ended',
}

const timeUnitMap = {
  'ms': 1,
  's': 1000,
  'm': 1000 * 60,
  'h': 1000 * 60 * 60,
  '': 1
};

export const useTimer = (options: TimerOptions, callback?: ((...args: unknown[]) => any) | null) : Timer => {
  const duration = ref(60000);
  const interval = ref(options.interval || 1)
  const isImmediate = ref(options.immediate)
  const startTime = ref(Date.now())
  const due = ref(new Date()) as Ref<Date> // preferred to ref<Date>(...) to reduce .d.ts file size 
  const timerId = ref<NodeJS.Timeout>() 
  const hasExpired = ref(false)
  const used = ref(0)
  const left = computed(() => {
    const value = duration.value - used.value
    return value <= 0 ? 0 : value
  })
  const live = ref(new Date(Date.now())) as Ref<Date> // preferred to ref<Date>(...) to reduce .d.ts file size 
  const status = ref(statuses.PENDING)
  const isRunning = ref(false)
  const logger = {
    warn(...args: any[]) {
      if (options.log) {
        console.warn(...args)
      }
    },
  }

  setInterval(() => {
    live.value = new Date(Date.now());
  }, 1);

  onUnmounted(() => {
    clearInterval(timerId.value)
  })

  /** — Resumes the paused timer. */
  const resume = () => {
    if (isRunning.value) {
      logger.warn('Timer is already running');
      return false
    }

    if (hasExpired.value) {
      logger.warn('Timer already ended');
      return false
    }

    startTime.value = Date.now() - used.value

    timerId.value = setInterval(() => {
      if (used.value >= duration.value || duration.value === 0) {
        clearInterval(timerId.value)
        if (!hasExpired.value && callback) {
          callback()
        }

        status.value = statuses.ENDED
        hasExpired.value = true
        isRunning.value = false
      } else {
        used.value = Date.now() - startTime.value
      }
    }, interval.value)

    status.value = statuses.RESUMED
    isRunning.value = true
  }

  /** — Starts the timer. */
  const start = () => {
    resume()

    // Override resume status
    status.value = statuses.STARTED
  }

  /** — Update the timer ttl (duration) and starts immediately if `immediate` is true*/
  const setTtl = (newTtl?: `${number}${TimeUnit}` | Date, newImmediate: boolean | null = null) => {
    isImmediate.value = newImmediate || isImmediate.value
    if (typeof newTtl === 'string') {
      const numVal = parseInt(newTtl)
      const timeUnit = newTtl.trim().replace(/[\d.]/g, '') as TimeUnit
      if (timeUnit in timeUnitMap) {
        duration.value = numVal * timeUnitMap[timeUnit];
      } else {
        throw new Error(`Invalid time unit: '${timeUnit}'`);
      }
    }
    if (newTtl instanceof Date) {
      duration.value = newTtl.getTime() - Date.now()
    }
    if (duration.value < 0 && newTtl instanceof Date) {
      logger.warn(`TTL: (${newTtl.toLocaleString()}) cannot be in the past`);
      return false
    }

    due.value = new Date(Date.now() + (isFinite(duration.value) ? duration.value : 0))

    if (isImmediate.value) {
      status.value = statuses.STARTED

      if (isRunning.value || hasExpired.value) {
        restart()
        return false
      }

      start()
    }
  }

  // Init TTL from options
  setTtl(options.ttl)

  /** — Pauses the timer.*/
  const pause = () => {
    clearInterval(timerId.value)
    status.value = statuses.PAUSED
    isRunning.value = false
  }

  /** — Stops the timer. */
  const stop = () => {
    if (!hasExpired.value && callback) {
      callback()
    }
    used.value = 0
    status.value = statuses.STOPPED
    isRunning.value = false

    clearInterval(timerId.value)
  }

  /** — Restarts the timer. */
  const restart = () => {
    isRunning.value = false
    hasExpired.value = false
    used.value = 0
    clearInterval(timerId.value)
    resume()

    // Override resume status
    status.value = statuses.RESTARTED
  }

  return reactive({
    /** Timer id based on setInterval API. Cancel/Clear timer with clearInterval(timerId) anywhere */
    timerId,
    /** — Current system DateTime */
    live,
    /** — DateTime instance when the timer ends */
    due,
    /** — The current status of the timer. */
    status,
    /** — The total ttl in milliseconds */
    duration,
    /** — The time elapsed since the timer started/resumed. */
    used,
    /** — The time remaining until the timer expires. */
    left,
    /** — Indicates whether the timer is running */
    isRunning,
    /** — Indicates whether the timer has expired. */
    hasExpired,
    // Actions
    pause,
    resume,
    start,
    restart,
    stop,
    setTtl
  })
}
