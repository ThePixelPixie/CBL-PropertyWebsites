<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import { writable } from 'svelte/store';

  const height = tweened(1, { duration: 700, easing: cubicOut });
  const opacity = writable(1);

  let isVisible = true;

  function closeAlert() {
    height.set(0);
    opacity.set(0);
    setTimeout(() => {
      isVisible = false;
    }, 700);
  }
</script>

{#if isVisible}
<div 
  class="alert bg-red-500 border-red-500 p-4 text-white text-center relative rounded-none overflow-hidden" 
  style="height: {$height * 60}px; opacity: {$opacity};" 
  transition:fly={{ y: -100, duration: 700 }}>
  <strong>ALERT!</strong> This could be used for alerts about mall closures, or other things.
  <button
    type="button"
    class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-2xl leading-none hover:text-gray-600 focus:outline-none"
    on:click={closeAlert}
    aria-label="Close"
  >
    ×
  </button>
</div>
{/if}

<style>
  .alert {
    margin-bottom: 0;
    background-image: linear-gradient(135deg, transparent, transparent 25%, hsla(0,0%,0%,.05) 25%, hsla(0,0%,0%,.05) 50%, transparent 50%, transparent 75%, hsla(0,0%,0%,.05) 75%, hsla(0,0%,0%,.05));
    background-size: 20px 20px;
    transition: height 0.7s ease, opacity 0.7s ease;
  }

  button {
    cursor: pointer;
  }
</style>
