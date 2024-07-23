import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import postcss from './postcss.config.js';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true, // Automatically open the browser
    port: 3000,
  },
  css: {
    postcss: './postcss.config.js',
  }
});