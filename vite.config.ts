import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({ rollupTypes: true }),
  ],
  base: "/vue-timer/",
  build: {
    lib: {
      entry: ["./src/index.ts"],
      name: "useTimer",
      fileName: "vue-timer",
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      }
    },
  },
  define: {
    'process.env': process.env,
  },
});
