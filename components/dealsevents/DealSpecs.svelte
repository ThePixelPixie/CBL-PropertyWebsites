<script>
  import { onMount } from "svelte";
  import TenantHours from '../tenants/TenantHours.svelte';
  import TenantLocationInfo from '../tenants/TenantLocationInfo.svelte';

  let imageClass = "w-full"; //
  let currentImageUrl = ""; //
  //let currentImageUrl = "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltbfd568c498e0e3df/66cf37c8e49f55306beeb5a0/download"; // landscape
  //let currentImageUrl = "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt2be4c90f592d57bc/66be34e4f641a6ee1eabba81/download"; // square
  //let currentImageUrl = "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt2b9a2a984b4ee0c1/66a2ba7881a8f6eb75d417ee/download" // portrait

  let isStickyEnabled = false;

  onMount(() => {
    checkStickySidebar();

    window.addEventListener('resize', checkStickySidebar);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkStickySidebar);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function checkStickySidebar() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 1024) {
      isStickyEnabled = true;
    } else {
      isStickyEnabled = false;
      document.getElementById('DetailsSidebar').style.position = 'static';
    }
  }

  function handleScroll() {
    if (!isStickyEnabled) return;

    const sidebar = document.getElementById('DetailsSidebar');
    const footer = document.querySelector('footer');
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

  // Detect image orientation after image loads
  function detectImageOrientation(imageUrl) {
    if (!imageUrl) return; // Skip if no image URL provided

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

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
</script>

<svelte:head>
  <script type="text/javascript" id="mapplic-script" src="https://mapplic.com/mapplic.js"></script>
</svelte:head>

<!-- change eat class to deal or news or job to get the proper color change -->
<section class="shop w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start p-2 md:p-12 !overflow-x-visible">
  <div id="DealInfo" class="w-full lg:w-2/3 mx-auto px-4 sm:px-9 md:pl-0 md:pr-12 mt-10">
    <!-- Dynamically adding image class based on orientation -->
    {#if currentImageUrl}
      <img src={currentImageUrl} alt="Active Image" class="{imageClass} rounded-lg overflow-hidden border-[10px]" on:load={() => detectImageOrientation(currentImageUrl)} />
    {/if}

    <p>Get everything you need to make the grade.</p>
    <p>See store for more details.</p>

    <!-- change to btn-shop-solid for button color change -->
    <a href="#" class="btn-shop-solid my-3 max-w-md" title="Deal CTA" aria-label="Deal CTA" target="_blank">Deal CTA</a>

    <!-- this could be a form or other miscellaneous content that we want added to the page, so the div should be conditional and only appear if there's something in the corresponding field -->
    <div id="OptionalForm" class="w-full pb-12">
      <script type="text/javascript" src="https://form.jotform.com/jsform/242498133587164"></script>
    </div>
  </div>

  <div id="DetailsSidebar" class="mx-auto p-4 mt-10 w-full lg:w-1/3 bg-light-l100 bg-opacity-70 rounded-lg shadow-lg lg:sticky lg:top-16">
    <!-- CTA *could* go here instead -->
    <!-- <a href="#" class="btn-news-solid my-3 max-w-md" title="Deal CTA" aria-label="Deal CTA" target="_blank">Deal CTA</a> -->
    
    <!-- Tenant Hours only shows if there's no map to display -->
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
        float: none;
        margin-bottom: 2rem;
    }

    @media (min-width: 992px) {
        .landscape {
            width: 100%;
            float: none;
        }

        .portrait,
        .square {
            width: 50%;
            float: left;
            margin-right: 2rem;
        }
    }

  .shop img {
    @apply border-shop-d;
  }

  .eat img {
    @apply border-eat-d;
  }

  .enjoy img {
    @apply border-enjoy-d;
  }

  .news img {
    @apply border-news-d;
  }

  .job img {
    @apply border-jobs-d;
  }
</style>