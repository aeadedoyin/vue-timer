import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/vue-timer",
  root: "./src/demo",
  plugins: [vue()],
})
