
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Setting base to './' ensures the site works on any standard web hosting 
  // (cPanel, shared hosting, etc.) even if not in the root directory.
  base: './', 
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});
