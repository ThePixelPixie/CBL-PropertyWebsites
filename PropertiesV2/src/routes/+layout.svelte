<script>
  import "../app.css";

  import Header from '$lib/components/shell/Header.svelte';
  import NavBar from '$lib/components/shell/navbar/NavBar.svelte';
  import Footer from '$lib/components/shell/Footer.svelte';
  import ModalBackdrop from '$lib/components/shell/ModalBackdrop.svelte';
</script>

<Header />
<NavBar />

<main class="w-screen h-auto pb-24">
    <slot />
</main>

<Footer />
<ModalBackdrop />