# Vue Timer

Yet another intuitive Vue Timer

## Installation

```bash
pnpm install @later/vue-timer
```

## Usage

### Vue 3 Component Example

Create a Vue 3 component file, e.g., `components/SampleComponent.vue`.

```javascript
<template>
  <div>
    <h1>Vue 3 Timer Example</h1>
    <p>Status: {{ timer.status }}</p>
    <p>Time Left: {{ timer.left }} milliseconds</p>
    <button @click="timer.pause">Pause</button>
    <button @click="timer.resume">Resume</button>
    <button @click="timer.stop">Stop</button>
  </div>
</template>

<script setup>
import { useTimer } from '@later/vue-timer';

const timer = useTimer({
  log: true,
  immediate: true,
  interval: 1000,
  ttl: '10s',
});
</script>
```

### Nuxt 3 Page Example

Create a Nuxt 3 page file, e.g., `pages/page.vue`.

```javascript
<template>
  <div>
    <h1>Nuxt 3 Timer Example</h1>
    <p>Status: {{ timer.status }}</p>
    <p>Time Left: {{ timer.left }} milliseconds</p>
    <button @click="timer.pause">Pause</button>
    <button @click="timer.resume">Resume</button>
    <button @click="timer.stop">Stop</button>
  </div>
</template>

<script setup>
import { useTimer } from '@later/vue-timer';

const timer = useTimer({
  log: true,
  immediate: true,
  interval: 1000,
  ttl: '10s',
});
</script>
```

## Vue 3 Plugin Example [Global instance]

Create a Vue 3 plugin file, e.g., `timerPlugin.js (.ts)`.

```javascript
import { useTimer } from '@later/vue-timer';

const timerPlugin = {
  install(app) {
    app.config.globalProperties.$timer = useTimer({
      log: true,
      immediate: true,
      interval: 1000,
      ttl: '10s',
    });
  },
};

export default timerPlugin;
```

In your main `main.js (.ts)`:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import timerPlugin from './timerPlugin';

const app = createApp(App);

// Use the timer plugin
app.use(timerPlugin);

app.mount('#app');
```

Now, you can access the timer instance globally in your Vue 3 application using `this.$timer`.

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
