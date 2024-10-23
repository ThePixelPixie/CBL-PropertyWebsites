<script>
  import { onMount } from "svelte";
  import TenantHours from '../tenants/TenantHours.svelte';
  import TenantLocationInfo from '../tenants/TenantLocationInfo.svelte';

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
</script>

<svelte:head>
  <script type="text/javascript" id="mapplic-script" src="https://mapplic.com/mapplic.js"></script>
</svelte:head>

<section class="news w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start p-12">
  <div id="NewsInfo" class="w-full mx-auto mt-10">
    <p><strong>CHATTANOOGA, Tenn. (January 18, 2024)</strong> – A new store and a popular restaurant will open soon at Hamilton Place, kicking off an exciting year of additions to the Hamilton Place complex.</p>

    <p>Here is a roundup of the exciting new additions that are coming soon:</p>

    <p><span class="underline font-bold">Vintage Stock</span> – Lower level, located near Dillard’s Women’s, at the bottom of the escalator</p>

    <p>Vintage Stock, with 71 existing locations in 11 states, buys and sells movies, video games, music, comic books, toys, sport and game cards, and posters. The company started in 1980 and has stores ranging in size from 2,500 square feet to 50,000 square feet. Filled with shelves of beloved classics, rare treasures, and collector’s items, each location offers an expansive, fun, and ever-changing selection of new and used entertainment items. The Hamilton Place opening marks the company’s 73rd location.</p>

    <p><span class="underline font-bold">Texas Roadhouse</span> – Outer ring road, located near The Cheesecake Factory and the I-75 entrance</p>

    <p>Texas Roadhouse brings its legendary steaks, fall-off-the-bone ribs, and made-from-scratch sides to the Hamilton Place campus, offering a vibrant dining experience with a focus on fresh, quality ingredients. Known for generous portions at affordable prices, this celebrated steakhouse is a culinary highlight. The lively, family-friendly atmosphere makes it an ideal destination for both locals and visitors seeking authentic American cuisine.</p>

    <p>In addition to these expected February openings, Hamilton Place is looking forward to welcoming Crunch Fitness, Taco Mamacita, and Malone’s later this year.</p>

    <p>More information about each store’s grand opening will be announced as plans are finalized. Stay tuned for more new store announcements.</p>

    <p class="text-center"># # #</p>

    <p><span class="underline font-bold">About Hamilton Place</span></p>
    
    <p>Hamilton Place offers more than one million square feet of retail bliss inside the two-story mall. Conveniently located off I-75, 12 miles from the heart of downtown Chattanooga and 4 miles from the Chattanooga Airport, Hamilton Place is the focal point of a 200-acre retailing complex that includes Hamilton Corner, Hamilton Crossing, The Shoppes at Hamilton Place, and The Terrace. Throughout and surrounding the center are 200+ stores and eateries. For more information, please visit HamiltonPlace.com. Hamilton Place is owned and managed by CBL Properties of Chattanooga, Tenn.</p>
  </div>
</section>