<script>
  import { onMount } from "svelte";
  import TenantHours from '../tenants/TenantHours.svelte';
  import TenantLocationInfo from '../tenants/TenantLocationInfo.svelte';

  //let imageClass = "w-full"; //
  //let currentImageUrl = ""; //
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
</script>

<svelte:head>
  <script type="text/javascript" id="mapplic-script" src="https://mapplic.com/mapplic.js"></script>
</svelte:head>

<section class="job w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start p-2 md:p-12 !overflow-x-visible">
  <div id="JobInfo" class="w-full lg:w-2/3 mx-auto px-4 sm:px-9 md:pl-0 md:pr-12 mt-10">
    <p>Love the Holidays? Want to work alongside Santa Claus? We've got a job for you!</p>
    <p>VIP Holiday Photos needs your help to make children's dreams come true this coming Christmas season: mid-to late October through December.</p>
    <h2 class="alt">Why Work with VIP Holiday Photos?</h2>
    <ul class="clamp-sm font-normal mb-4 leading-10">
      <li>VIP Culture: Honesty, Loyalty, Trustworthy, Valued, Committed, Passionate, Open Communication</li>
      <li>Competitive Pay</li>
      <li>Bonus Opportunities</li>
      <li>Employee Discounts</li>
      <li>Fun and rewarding job</li>
      <li>Opportunities for growth</li>
      <li>Extra income for the holidays</li>
      <li>Consistent seasonal work</li>
      <li>Supportive leaders</li>
      <li>Gain experience in Management, Photography, Events/Promotions, Retail, Customer Service, Cash Handling, and Working with Children</li>
    </ul>

    <h2 class="alt">Who are we looking for?</h2>
    <ul class="clamp-sm font-normal mb-4 leading-10">
      <li>Reliable, sociable, happy with a smile</li>
      <li>Passion for the holidays</li>
      <li>Work well in a fast-paced atmosphere</li>
      <li>Experienced with management, customer service, retail, sales, and/or working with children</li>
      <li>Want to work your way up in the company</li>
    </ul>

    <h2 class="alt">Requirements:</h2>
    <ul class="clamp-sm font-normal mb-4 leading-10">
      <li>Be 18 years or older</li>
      <li>Have smartphone and computer (Spreadsheets, Google Drive, Outlook, etc.) experience</li>
      <li>Have reliable transportation</li>
      <li>Be able to pass a background check and/or drug screen</li>
      <li>Management Experience, minimum 1 year</li>
      <li>Customer Service Experience, minimum 1 year</li>
      <li>Retail Experience, minimum 1 year</li>
      <li>Photography experience is a plus!</li>
      <li>Technologically savvy</li>
      <li>Authorized for work in the USA</li>
    </ul>

    <a href="#" class="btn-jobs-solid my-3 max-w-md" title="Deal CTA" aria-label="Deal CTA" target="_blank">Apply Now</a><br />

    <a href="#" class="btn-jobs-solid my-3 max-w-md" title="View all Jobs from this tenant" aria-label="View all Jobs from this tenant" target="_blank">View all available jobs at Santa's Workshop</a>
  </div>

  <div id="DetailsSidebar" class="mx-auto p-4 mt-10 w-full lg:w-1/3 bg-light-l100 bg-opacity-70 rounded-lg shadow-lg lg:sticky lg:top-16">
    <!-- Tenant Hours only shows if there's no map to display -->
    <TenantHours />

    <TenantLocationInfo />

    <div class="aspect-w-1 aspect-h-1 mx-auto overflow-hidden shadow-xl border-accent1 border rounded-lg relative bg-white">
      <mapplic-map data-location="U144" data-settings={`{"sidebar":false}`} data-json="https://mapplic.com/getMapData?id=vlcUgrQd4wCkjINjkkSC" id="my-mapplic-map"></mapplic-map>
    </div>
  </div>
</section>

<style>
    ul {
      list-style: disc outside;
      padding: 20px;
      margin-left: 20px;
    }
</style>