import { defineConfig } from 'vite';

// Static single-page build. Output goes to dist/, which Cloudflare Pages serves.
// The privacy page lives in public/ and is copied verbatim to dist/privacy.html.
export default defineConfig({
  build: {
    target: 'es2020',
    outDir: 'dist',
  },
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
});
