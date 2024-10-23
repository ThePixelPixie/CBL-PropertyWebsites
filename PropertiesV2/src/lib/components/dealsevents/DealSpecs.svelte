<script>
  import { onMount } from "svelte";
  import TenantHours from '$lib/components/tenants/TenantHours.svelte';
  import TenantLocationInfo from '$lib/components/tenants/TenantLocationInfo.svelte';

  let imageClass = "w-full"; //
  //let currentImageUrl = ""; //
  let currentImageUrl = "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltbfd568c498e0e3df/66cf37c8e49f55306beeb5a0/download"; // landscape
  //let currentImageUrl = "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt2be4c90f592d57bc/66be34e4f641a6ee1eabba81/download"; // square
  //let currentImageUrl = "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt2b9a2a984b4ee0c1/66a2ba7881a8f6eb75d417ee/download" // portrait

  let isStickyEnabled = false;

  function checkStickySidebar() {
    if (typeof window !== 'undefined') {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 1024) {
        isStickyEnabled = true;
      } else {
        isStickyEnabled = false;
        const sidebar = document.getElementById('DetailsSidebar');
        if (sidebar) sidebar.style.position = 'static';
      }
    }
  }

  function handleScroll() {
    if (!isStickyEnabled || typeof window === 'undefined') return;

    const sidebar = document.getElementById('DetailsSidebar');
    const footer = document.querySelector('footer');

    if (sidebar && footer) {
      const sidebarBottom = sidebar.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;

      if (sidebarBottom >= footerTop) {
        sidebar.style.position = 'absolute';
        sidebar.style.bottom = `${window.innerHeight - footerTop}px`;
      } else {
        sidebar.style.position = 'sticky';
        sidebar.style.bottom = 'auto';
      }
    }
  }

  function detectImageOrientation(imageUrl) {
  if (typeof window === 'undefined' || !imageUrl) return;

  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    const width = img.naturalWidth;
    const height = img.naturalHeight;

    // Reactive re-assignment to trigger Svelte's reactivity system
    if (width > height) {
      imageClass = "landscape";
    } else if (height > width) {
      imageClass = "portrait";
    } else {
      imageClass = "square";
    }
  };

  img.onerror = () => {
    console.error("Image failed to load.");
  };
}

  onMount(() => {
    detectImageOrientation(currentImageUrl);
    if (typeof window !== 'undefined') {
      checkStickySidebar();

      window.addEventListener('resize', checkStickySidebar);
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('resize', checkStickySidebar);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  });
</script>

<svelte:head>
  <script type="text/javascript" id="mapplic-script" src="https://mapplic.com/mapplic.js"></script>
</svelte:head>

<section class="shop w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start p-2 md:p-12 !overflow-x-visible">
  <div id="DealInfo" class="w-full lg:w-2/3 mx-auto px-4 sm:px-9 md:pl-0 md:pr-12 mt-10">
    {#if currentImageUrl}
      <img src={currentImageUrl} alt="Active Image" class="{imageClass} rounded-lg overflow-hidden border-[10px]" on:load={() => detectImageOrientation(currentImageUrl)} />
    {/if}

    <p>Get everything you need to make the grade.</p>
    <p>See store for more details.</p>

    <a href="#" class="btn-shop-solid my-3 max-w-md" title="Deal CTA" aria-label="Deal CTA" target="_blank">Deal CTA</a>

    <div id="OptionalForm" class="w-full pb-12">
      <script type="text/javascript" src="https://form.jotform.com/jsform/242498133587164"></script>
    </div>
  </div>

  <div id="DetailsSidebar" class="mx-auto p-4 mt-10 w-full lg:w-1/3 bg-light-l100 bg-opacity-70 rounded-lg shadow-lg lg:sticky lg:top-16">
    <TenantHours />
    <TenantLocationInfo />

    <div class="aspect-w-1 aspect-h-1 mx-auto overflow-hidden shadow-xl border-accent1 border rounded-lg relative bg-white">
      <mapplic-map data-location="U144" data-settings={`{"sidebar":false}`} data-json="https://mapplic.com/getMapData?id=vlcUgrQd4wCkjINjkkSC" id="my-mapplic-map"></mapplic-map>
    </div>
  </div>
</section>

<style>
  .landscape,
  .portrait,
  .square {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media (min-width: 992px) {
    .landscape {
      width: 100%;
    }
    .portrait,
    .square {
      width: 50%;
      margin-right: 2rem;
      float: left;
    }
  }
</style>