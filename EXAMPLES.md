# Vue Timer: Examples

*[👈🏽 Backlink](README.md)*

## Vue 3 Component

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
import { useTimer } from '@laterhq/vue-timer';

const timer = useTimer({
  log: true,
  immediate: true,
  interval: 1000,
  ttl: '10s',
});
</script>
```

## Nuxt 3 Page

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
import { useTimer } from '@laterhq/vue-timer';

const timer = useTimer({
  log: true,
  immediate: true,
  interval: 1000,
  ttl: '10s',
});
</script>
```

## Vue 3 Plugin [Global Instance]

Create a Vue 3 plugin file, e.g., `timerPlugin.js (.ts)`.

```javascript
import { useTimer } from '@laterhq/vue-timer';

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
