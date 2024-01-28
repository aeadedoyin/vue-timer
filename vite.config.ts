import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: "/vue-timer/",
  build: {
    lib: {
      entry: ["./src/index.ts"],
      name: "laterVueTimer",
      fileName: "later-vue-timer",
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ["vue"],
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
