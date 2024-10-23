import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
    port: 3000,
  },
  css: {
    postcss: './postcss.config.cjs',
  }
});