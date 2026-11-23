import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Plain vanilla JS app: index.html + js/ + css/, no framework plugin.
  server: { host: true },
  build: { target: 'es2020' },
});
