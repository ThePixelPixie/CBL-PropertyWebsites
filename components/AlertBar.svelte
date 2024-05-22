<script>
  import { onMount } from 'svelte';

  let showAlert = true;

  function closeAlert() {
    showAlert = false;
  }
</script>

{#if showAlert}
  <div class="bg-yellow-500 border border-yellow-500 text-white text-center p-4 relative">
    <strong>ALERT!</strong> This could be used for alerts about mall closures, or other things.
    <button type="button" class="absolute top-2 right-2 bg-transparent w-4 h-4 text-white" on:click={closeAlert}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
        <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" />
      </svg>
    </button>
  </div>
{/if}

<style>
  button {
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  }

  .alert-dismissible {
    transition: all 0.5s ease;
    opacity: 1;
  }

  .alert-dismissible.collapsing {
    opacity: 0;
    padding: 0;
    margin: 0;
    max-height: 0;
  }
</style>