<script>
  import { fade } from 'svelte/transition';
  import { isModalOpen } from '$lib/stores/modalStore.js';
  import { onMount, onDestroy } from 'svelte';

  const closeModal = () => {
    isModalOpen.set(false);
  };

  let handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleEscapeKey);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleEscapeKey);
    }
  });
</script>

<style>
  .opacity-0 {
    pointer-events: none;
  }
</style>

<div transition:fade class={`fixed inset-0 bg-white bg-opacity-50 backdrop-blur-8 h-screen w-screen z-50`} on:click={closeModal} class:opacity-0={!$isModalOpen}></div>