import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: "/vue-timer/",
  build: {
    outDir: 'demo',
    lib: {
      entry: ["./index.html"],
      name: "laterVueTimer",
      fileName: "later-vue-timer",
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  define: {
    'process.env': process.env,
  },
});
