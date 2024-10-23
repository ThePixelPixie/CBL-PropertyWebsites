<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  
  const height = tweened(50, { duration: 700, easing: cubicOut });
  let isVisible = true;
  let alertHeight = 50;
  let updateMainClass = () => null;
  
  onMount(() => {
    const mainElement = document.querySelector('main');
    
    updateMainClass = function () {
      if (isVisible) {
        mainElement.classList.add('has-alert');
        mainElement.classList.remove('no-alert');
      } else {
        mainElement.classList.add('no-alert');
        mainElement.classList.remove('has-alert');
      }
    };
    
    isVisible = true;
    updateMainClass();
    
    return () => {
      mainElement.classList.remove('has-alert');
      mainElement.classList.remove('no-alert');
    };
  });
  
  function closeAlert() {
    height.set(0);
    setTimeout(() => {
      isVisible = false;
      updateMainClass();
    }, 700);
  }
</script>

{#if isVisible}
  <div class="alert bg-red-500 bg-alert-gradient border-red-500 text-white text-center transition-all duration-700 ease relative rounded-none overflow-hidden">
    <p class="pr-10 pl-2 py-1 m-0 leading-none">
      <strong>ALERT!</strong> This could be used for alerts about mall closures, or other things.
    </p>
    <button
      type="button"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 mb-0 bg-transparent text-2xl leading-none hover:text-gray-600 focus:outline-none cursor-pointer"
      on:click={closeAlert}
      aria-label="Close"
    >
      ×
    </button>
  </div>
{/if}

<style>
  .alert {
    background-size: 20px 20px;
  }
</style>