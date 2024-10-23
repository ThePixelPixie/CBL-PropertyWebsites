import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [sveltekit()],
  server: {
    open: true,
    port: 5000,
  },
  css: {
    postcss: './postcss.config.cjs',
  },
};