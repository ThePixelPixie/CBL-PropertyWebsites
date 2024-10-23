import { sveltePreprocess } from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';  // or whichever adapter you're using

const config = {
  preprocess: sveltePreprocess({
    postcss: true
  }),
  kit: {
    adapter: adapter(),   // Use the appropriate adapter here
  }
};

export default config;