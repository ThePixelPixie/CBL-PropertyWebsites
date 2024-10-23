<script>
  import Header from './components/shell/Header.svelte';
  import NavBar from './components/shell/navbar/NavBar.svelte';
  import Footer from './components/shell/Footer.svelte';
  import ModalBackdrop from './components/shell/ModalBackdrop.svelte';
</script>

<!-- Your static layout elements: Header, NavBar, Footer -->
<div class="layout-container relative m-0 p-0 not-italic font-normal text-base leading-5 bg-white">

  <!-- Static components -->
  <Header />
  <NavBar />

  <!-- Content will be injected here via <slot /> from App.svelte -->
  <main class="w-screen h-auto pb-24">
    <slot></slot>
  </main>

  <Footer />
  <ModalBackdrop />
</div>

<style>
  @import './styles.css';
</style>