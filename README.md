# Vue Timer

Yet another intuitive Vue Timer

## Installation

```bash
pnpm install @laterhq/vue-timer
```

## Usage

See usage [Examples](EXAMPLES.md)

## API

### `useTimer(options, callback?)`

- **options**
  - `log?: boolean`: Enables or disables logging (default: `false`).
  - `immediate?: boolean`: If `true`, the timer starts immediately upon creation (default: `false`).
  - `interval?: number`: Time interval for recurring execution (default: `1`).
  - `ttl?: number{ms,s,m,h} | Date`: Time duration or due DateTime for a one-time execution (default: `60000ms`).

- **callback**: Optional callback function to be executed when the timer ends.

### Timer Properties

- `timerId`: Timer ID based on setInterval API.
- `live`: Current system DateTime.
- `due`: DateTime instance when the timer ends.
- `status`: The current status of the timer.
- `duration`: The total ttl in milliseconds.
- `used`: The time elapsed since the timer started/resumed.
- `left`: The time remaining until the timer expires.
- `isRunning`: Indicates whether the timer is running.
- `hasExpired`: Indicates whether the timer has expired.

### Timer Methods

- `pause()`: Pauses the timer.
- `resume()`: Resumes the paused timer.
- `start()`: Starts the timer.
- `setTtl(newTtl?, newImmediate?)`: Sets the timer duration and starts if option.immediate or newImmediate is true.
- `stop()`: Stops the timer.
- `restart()`: Restarts the timer.

NB: You can always clear or stop  the timer using `clearInterval(timer.timerId)` when needed
