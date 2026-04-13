import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: false,
  },
  server: {
    sourcemapIgnoreList: () => true,
  },
});
