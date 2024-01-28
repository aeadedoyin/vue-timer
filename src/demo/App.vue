<script setup lang="ts">
import { useTimer } from "../useTimer";

const generateRandomDate = () => {
  const now = new Date().getTime();
  const tenMinutes = 1/6 * 60 * 1000;
  const oneHour = 1 * 60 * 1000;
  const randomTime = now + Math.floor(Math.random() * (oneHour - tenMinutes + 1) + tenMinutes);
  return new Date(randomTime);
};

const randomDates = [
  generateRandomDate(),
  generateRandomDate(),
  generateRandomDate(),
  generateRandomDate(),
  generateRandomDate(),
  generateRandomDate(),
]

const timer = useTimer({ immediate: true, ttl: randomDates[5] })
const timer2 = useTimer({ ttl: '20000', log: true })
const timer3 = useTimer({ immediate: true, log: true })
</script>

<template>
  <h3><strong>Hello UseTimer</strong> : <span><a href="http://github.com/aeadedoyin/vue-timer">Doc Here</a></span></h3>

  <div style="margin: unset;">
    <b>Immediate Timer</b> - {{ timer.used }} - Due: {{ timer.due.toLocaleString() }}
    <code><pre>{{ timer }}</pre></code>
  </div>

  <hr style="max-width: 400px; margin: 30px 0;">

  <div>
    <b>Self Invoked Timer</b> - {{ timer2.used }} - Due: {{ timer2.due.toLocaleString() }}
    <code><pre>{{ timer2 }}</pre></code>
    <br>
    <div style="display:flex; flex-wrap: wrap; gap: 10px;">
      <button @click="timer2.start()">Start</button>
      <button @click="timer2.pause()">Pause</button>
      <button @click="timer2.stop()">Stop</button>
      <button @click="timer2.resume()">Resume</button>
      <button @click="timer2.restart()">Restart</button>
    </div>
  </div>

  <hr style="max-width: 400px; margin: 30px 0;">

  <div>
    <b>Pick A DateTime</b> - {{ timer3.used }} - Due: {{ timer3.due.toLocaleString() }}
    <code><pre>{{ timer3 }}</pre></code>
    <br>
    <div style="display:flex; flex-wrap: wrap; gap: 10px;">
      <button @click="timer3.setTtl(randomDates[0])">{{ randomDates[0].toLocaleString() }}</button>
      <button @click="timer3.setTtl(randomDates[1])">{{ randomDates[1].toLocaleString() }}</button>
      <button @click="timer3.setTtl(randomDates[2])">{{ randomDates[2].toLocaleString() }}</button>
      <button @click="timer3.setTtl(randomDates[3])">{{ randomDates[3].toLocaleString() }}</button>
      <button @click="timer3.setTtl(randomDates[4])">{{ randomDates[4].toLocaleString() }}</button>
    </div>
  </div>

</template>../useTimer