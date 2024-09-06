<script>
  import { onMount } from "svelte";
  import Isotope from "isotope-layout";

  // Global Variables
  let items = [
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltd301b6e98aff3a76/66b0f6aa0efc692c8688680e/download",
      storeName: "Pandora",
      title: "Free Bracelet",
      startDate: "2024-08-22",
      endDate: "2024-09-08",
      featured: true,
      type: "shop",
      subFilterTerms: "locallyowned, comingsoon",
      searchTerms: "pandora, jewelry, bracelet, Accessories, Gifts, Apparel"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt2be4c90f592d57bc/66be34e4f641a6ee1eabba81/download",
      storeName: "Buckle",
      title: "Your back to school supply list",
      startDate: "2024-08-15",
      endDate: "2024-10-31",
      featured: true,
      type: "shop",
      subFilterTerms: 'inventoryinsider',
      searchTerms: "buckle, back to school, supply, black pants, shoes, makeup",
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt988bcf1842284418/667c2c0d7589929628077a05/download",
      storeName: "Rodizio Grill",
      title: "The Happiest Hour",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      featured: true,
      type: "eat",
      subFilterTerms: "nowopen",
      searchTerms: "rodizio grill, happy hour, Entertainment, Music, Concert",
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt4874594ea1e4427e/668e8a5294a81678c507fb07/download",
      storeName: "Aeropostale",
      title: "In our Low Rise Era",
      startDate: "2024-07-10",
      endDate: "2024-09-03",
      featured: false,
      type: "shop",
      subFilterTerms: "inventoryinsider, nowopen",
      searchTerms: "aeropostale, smile, back to school, low rise, Entertainment, Music, Concert",
    },
    {
      image: "",
      storeName: "Tradehome Shoes",
      title: "20% Off Sale",
      startDate: "2024-008-05",
      endDate: "2024-09-03",
      featured: false,
      type: "shop",
      subFilterTerms: "comingsoon",
      searchTerms: "tradehome shoes, sale, workshop, supermarket, grocery, eating"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt0f556bd94f24ac2d/66709f551774d22bb2a1669a/download",
      storeName: "PF Chang\'s",
      title: "Chef\'s Feast",
      startDate: "2024-06-19",
      endDate: "2024-12-31",
      featured: false,
      type: "eat",
      subFilterTerms: "nowopen, comingsoon",
      searchTerms: "PF Chang, feast, free, coupon, restaurant, boutique, holiday, clothing",
    },
    {
      image: "",
      storeName: "Sleep Number by Select Comfort",
      title: "Labor Day",
      startDate: "2024-08-26",
      endDate: "2024-09-03",
      featured: false,
      type: "shop",
      subFilterTerms: "locallyowned, comingsoon",
      searchTerms: "sleep number by select comfort, labor day sale, smart bed, adjustable, Accessories, Gifts, Apparel",
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt2b9a2a984b4ee0c1/66a2ba7881a8f6eb75d417ee/download",
      storeName: "Red Robin Gourmet Burgers and Brews",
      title: "Kids Half-Off Wednesday Nights!",
      startDate: "2024-07-25",
      endDate: "2024-12-31",
      featured: false,
      type: "eat",
      subFilterTerms: "comingsoon",
      searchTerms: "red robin gourmet burgers and brews, weekend, half off, wednesday, workshop, supermarket, grocery, eating, santa",
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltbfd568c498e0e3df/66cf37c8e49f55306beeb5a0/download",
      storeName: "J.Crew Factory",
      title: "50-70% Off Storewide at J.Crew Factory!",
      startDate: "2024-08-28",
      endDate: "2024-09-03",
      featured: false,
      type: "shop",
      subFilterTerms: "nowopen, locallyowned",
      searchTerms: "j crew factory, j. crew, clearance, back to school, boutique, holiday, clothing",
    },
    {
      image: "",
      storeName: "Sephora",
      title: "Labor Day Sale",
      startDate: "2024-08-30",
      endDate: "2024-09-03",
      featured: false,
      type: "shop",
      subFilterTerms: "inventoryinsider",
      searchTerms: "sephora, labor day, red shirt, lingerie, barber, beauty",
    },
    {
      image: "",
      storeName: "Starbucks",
      title: "Special Birthday Reward",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      featured: false,
      type: "eat",
      subFilterTerms: "locallyowned, nowopen",
      searchTerms: "starbucks, birthday, pizza, hamburger, popcorn, saddlery",
    },
    {
      image: "",
      storeName: "JCPenney Portraits",
      title: "Wizardly Way Photo event",
      startDate: "2024-08-06",
      endDate: "2024-09-07",
      featured: false,
      type: "shop",
      subFilterTerms: "inventoryinsider",
      searchTerms: "jcpenney portraits, j c, jc, wizard, magical, studio, kiosk, dresses, outlet",
    },
    {
      image: "",
      storeName: "The Cheesecake Factory",
      title: "Special Birthday Reward",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      featured: false,
      type: "eat",
      subFilterTerms: "comingsoon, locallyowned",
      searchTerms: "The Cheescake Factory, birthday reward, slice, Accessories, Gifts, Apparel",
    },
    {
      image: "",
      storeName: "Tradehome Shoes",
      title: "Buy 1, Get 1 Free on select RIVAL Shoes",
      startDate: "2024-07-18",
      endDate: "2024-09-10",
      featured: false,
      type: "shop",
      subFilterTerms: "nowopen, inventoryinsider",
      searchTerms: "tradehome shoes, trade home, bogo, Entertainment, Music, Concert",
    }
  ];

  let carouselItems = [];
  let gridItems = [];
  let isotope;
  let activeFilter = 'All';
  let activeSubFilters = [];
  let searchTerm = '';
  let returnList = [];
  let allSearchTerms = [];
  let filteredSearchTerms = [];
  let showSuggestions = false;
  let isEnteringSearch = false;
  let focusedIndex = -1;
  let allCount = 0;
  let eatCount = 0;
  let shopCount = 0;
  let locallyOwnedCount = 0;
  let inventoryInsiderCount = 0;
  let comingSoonCount = 0;
  let nowOpenCount = 0;

  // Helper Functions
  function sortByDate(items) {
    return items.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }

  function formatDateRange(startDate, endDate) {
    if (!startDate || !endDate) return "";
    const options = { month: "short", day: "numeric" };
    const start = new Date(startDate).toLocaleDateString("en-US", options);
    const end = new Date(endDate).toLocaleDateString("en-US", options);
    return `${start} - ${end}`;
  }

  function collectSearchTerms() {
    allSearchTerms = [];
    items.forEach((item) => {
      const terms = item.searchTerms.split(",").map((term) => term.trim().toLowerCase());
      allSearchTerms.push(...terms);
    });
    allSearchTerms = [...new Set(allSearchTerms)].sort();
  }

  $: filteredSearchTerms = searchTerm.length > 0 ? allSearchTerms.filter((term) => term.includes(searchTerm)).slice(0, 5) : [];
  $: returnList = filteredSearchTerms.map(term => term.replace(new RegExp(searchTerm, 'gi'), match => `<strong class="font-bold">${match}</strong>`));

  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      focusedIndex = (focusedIndex + 1) % filteredSearchTerms.length;
    } else if (e.key === "ArrowUp") {
      focusedIndex = (focusedIndex - 1 + filteredSearchTerms.length) % filteredSearchTerms.length;
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      selectSuggestion(filteredSearchTerms[focusedIndex]);
    }
  }

  function selectSuggestion(suggestion) {
    searchTerm = suggestion;
    showSuggestions = false;
    focusedIndex = -1;
    applyFilters();
  }

  function handleFocus() {
    isEnteringSearch= true;
  }

  function handleBlur() {
    isEnteringSearch= false;
    setTimeout(() => showSuggestions = false, 100);
  }

  function splitSubFilterTerms(subFilterTerms) {
    return subFilterTerms.split(',').map(term => term.trim().toLowerCase());
  }

  function calculateCounts() {
    allCount = 0;
    eatCount = 0;
    shopCount = 0;
    locallyOwnedCount = 0;
    inventoryInsiderCount = 0;
    comingSoonCount = 0;
    nowOpenCount = 0;

    items.forEach((item) => {
      const matchesMainFilter = activeFilter === 'All' || item.type === activeFilter;
      const matchesSubFilters = activeSubFilters.every((sub) => splitSubFilterTerms(item.subFilterTerms).includes(sub));

      if (matchesMainFilter && matchesSubFilters) {
        if (activeFilter === 'All' || activeFilter === item.type) {
          allCount++;
        }

        if (item.type === 'eat') {
          eatCount++;
        } else if (item.type === 'shop') {
          shopCount++;
        }

        splitSubFilterTerms(item.subFilterTerms).forEach((subFilter) => {
          if (subFilter === 'locallyowned') locallyOwnedCount++;
          if (subFilter === 'inventoryinsider') inventoryInsiderCount++;
          if (subFilter === 'comingsoon') comingSoonCount++;
          if (subFilter === 'nowopen') nowOpenCount++;
        });
      }
    });

    if (activeFilter === 'eat') {
      inventoryInsiderCount = 0;
    }
  }

  // Main Logic Functions
  function filterItems(type, subType = '') {
    if (type) {
      activeFilter = type;

      const validSubFilters = getValidSubFilters(type);
      activeSubFilters = activeSubFilters.filter((filter) => validSubFilters.includes(filter));
    }

    if (subType) {
      if (activeSubFilters.includes(subType)) {
        activeSubFilters = activeSubFilters.filter((filter) => filter !== subType);
      } else {
        activeSubFilters.push(subType);
      }
    }
    applyFilters();
    calculateCounts();
    scrollToTop();
  }

  function applyFilters() {
    if (activeFilter === 'Clear') {
      activeFilter = 'All';
    }

    let filterString = activeFilter === 'All' ? '*' : `[data-type="${activeFilter}"]`;

    if (activeSubFilters.length > 0) {
      const subFilterString = activeSubFilters.map((sub) => `[data-sub-filter-terms*="${sub.toLowerCase()}"]`).join('');
      filterString += subFilterString;
    }

    if (searchTerm) {
      filterString += `[data-search-terms*="${searchTerm.toLowerCase()}"]`;
    }

    isotope.arrange({ filter: filterString });

    calculateCounts();

    const visibleItems = isotope.filteredItems.length;
    const noItemsMessage = document.getElementById('no-items-message');

    if (visibleItems === 0) {
      noItemsMessage.style.display = 'block';
    } else {
      noItemsMessage.style.display = 'none';
    }
  }

  function getValidSubFilters(type) {
    const subFilterMapping = {
      all: ['locallyowned', 'inventoryinsider', 'comingsoon', 'nowopen'],
      eat: ['locallyowned', 'comingsoon', 'nowopen'],
      shop: ['locallyowned', 'inventoryinsider', 'comingsoon', 'nowopen'],
    };

    return subFilterMapping[type] || [];
  }

  function scrollToTop() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(async () => {
    carouselItems = sortByDate(items);
    gridItems = sortByDate(items);
    collectSearchTerms();
    calculateCounts();

    // Initialize the carousel first
    const { tns } = await import("tiny-slider/src/tiny-slider");
    let slider = tns({
      container: "#DealEventCarousel",
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      speed: 1000,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      mouseDrag: true,
      loop: true,
      edgePadding: 10,
      responsive: {
        992: {
          items: 1,
          edgePadding: 0,
        },
      },
    });

    slider.events.on("indexChanged", function (info) {
      document.querySelectorAll(".text-container").forEach((el) => {
        el.classList.remove("slide-up");
      });
      const currentSlide = info.slideItems[info.index]?.querySelector(".text-container");
      if (currentSlide) {
        currentSlide.classList.add("slide-up");
      }
    });

    // Initialize Isotope after grid items have been loaded and visible
    isotope = new Isotope(".filter-group", {
      itemSelector: ".grid-item",
      layoutMode: "masonry",
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      },
      getSortData: {
        date: "[data-date]",
        type: "[data-type]",
      },
      sortBy: "date",
      sortAscending: true,
      hiddenStyle: {
        opacity: 0,
        transform: 'translateY(100px)'
      },
      visibleStyle: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    });

    // Apply filters only after Isotope has been initialized
    applyFilters();
  });

  const getBorderClass = (type) => { return type === 'shop' ? 'border-variable4-d' : 'border-variable2-d'; };
  const getBorderHoverClass = (type) => { return type === 'shop' ? 'border-variable4' : 'border-variable2'; }
  const getTextClass = (type) => { return type === 'shop' ? 'text-variable4-d' : 'text-variable2-d'; };
  const getBackgroundClass = (type) => { return type === 'shop' ? 'bg-variable4-d' : 'bg-variable2-d'; };
</script>

<section id="DealsEventsIsotopeGrid" class="md:grid md:grid-cols-[40%_60%] gap-3 overflow-visible relative !bg-gray-100">
  <!-- Left Side: Carousel -->
  <div class="carousel-container relative md:sticky md:top-0 w-full h-auto md:h-[95vh] p-4">
    <div id="DealEventCarousel" class="relative w-full md:h-[95vh]">
      {#each carouselItems.filter(item => item.featured) as item}
      <figure class="relative aspect-1 md:aspect-[unset] md:h-full md:w-full">
        <div class="hero-overlay absolute w-full h-full top-0 left-0 z-10" style="background: linear-gradient(to top, rgba(0, 0, 0, .9), rgba(0, 0, 0, 0));"></div>
        <img src={item.image} alt={item.storeName} class="object-cover h-full w-full z-0" />
       <div class={`absolute top-4 md:top-28 left-2 md:left-16 w-20 text-center h-10 ${getBackgroundClass(item.type)} text-white p-2 rounded`}>
          {item.type === 'shop' ? 'Shop' : 'Eat'}
        </div>
        <div class="absolute bottom-5 md:bottom-44 left-4 right-4 md:px-12 text-white slide-up text-container z-20">
          <h4 class="alt font-bold leading-none line-clamp-1 md:line-clamp-none md:truncate text-white">{item.storeName}</h4>
          <h5 class="text-base font-normal">{item.title}</h5>
          <p class="text-sm">{formatDateRange(item.startDate, item.endDate)}</p>
          <button class={`${item.type === 'eat' ? 'btn-eat-solid' : 'btn-shop-solid'} my-0 ml-auto md:mr-auto flex-grow text-center md:p-2`}>
            Check it out
          </button>
        </div>
      </figure>
      {/each}
    </div>
  </div>

  <!-- Right Side: Grid -->
  <div class="grid-container pb-96 px-4 pt-4 overflow-visible relative">
    <div class="col-span-2 px-0 mb-8 text-center">
      <div class="sticky inset-0 pb-4 pt-8 md:pt-24 px-0 z-40 bg-gray-100 h-auto">

        <div class={`input-box relative ${isEnteringSearch? 'border-entering' : ''}`}>
          <i class={`fa fa-search input-icon ${isEnteringSearch? 'text-accent1 rotate-90' : 'text-dark'}`} aria-hidden="true"></i>
          <form class="input-form" on:submit|preventDefault>
            <input id="search" type="text" placeholder="Search" name="search" autocomplete="off" class={`${isEnteringSearch? 'placeholder-accent1 text-accent1' : 'placeholder-dark text-dark'}`} on:focus={handleFocus} on:blur={handleBlur} on:input={e => searchTerm = e.target.value} on:keydown={handleKeyDown} bind:value={searchTerm} />
          </form>
          <svg class="input-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style="enable-background:new 0 0 671 111;" xml:space="preserve">
              <path class={`${isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"></path>
              <path class={`${isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"></path>
          </svg>
          {#if returnList.length > 0}
          <ul id="output" class="flex flex-col top-16 w-full absolute z-[99] bg-white">
            {#each returnList as suggestion, index}
            <li class={`prediction-item text-dark hover:text-white p-1 hover:bg-accent1 ${index === focusedIndex ? 'bg-accent2' : ''}`} on:click={() => selectSuggestion(suggestion)}>
              {@html suggestion}
            </li>
            {/each}
          </ul>
          {/if}
        </div>

        <div class="primary-filter-container mt-4 flex justify-center space-x-2">
          <button on:click={() => filterItems('All')} class={`py-2 px-4 rounded z-40 relative ${activeFilter === 'All' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
            All <span id="all-count" class="count-circle">{activeFilter === 'All' ? allCount : ''}</span>
          </button>
          <button on:click={() => filterItems('eat')} class={`py-2 px-4 rounded ml-4 z-40 relative ${activeFilter === 'eat' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
            Eat <span id="eat-count" class="count-circle">{eatCount}</span>
          </button>
          <button on:click={() => filterItems('shop')} class={`py-2 px-4 rounded ml-4 z-40 relative ${activeFilter === 'shop' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
            Shop <span id="shop-count" class="count-circle">{shopCount}</span>
          </button>
        </div>
    
        <div class="sub-filter-container mt-4 flex justify-center flex-wrap space-x-4">
          <button class={`sub-filter ${activeSubFilters.includes('locallyowned') ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`} on:click={() => filterItems(activeFilter, 'locallyowned')}>Locally Owned <span id="locallyowned-count" class="count-circle">{locallyOwnedCount}</span></button>
          <button class={`sub-filter ${activeSubFilters.includes('inventoryinsider') ? (activeFilter === 'eat' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-800 text-white') : (activeFilter === 'eat' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-800')}`} disabled={activeFilter === 'eat'} on:click={() => filterItems(activeFilter, 'inventoryinsider')}>Inventory Insider <span id="inventoryinsider-count" class="count-circle">{inventoryInsiderCount}</span></button>
          <button class={`sub-filter ${activeSubFilters.includes('comingsoon') ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`} on:click={() => filterItems(activeFilter, 'comingsoon')}>Coming Soon <span id="comingsoon-count" class="count-circle">{comingSoonCount}</span></button>
          <button class={`sub-filter ${activeSubFilters.includes('nowopen') ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`} on:click={() => filterItems(activeFilter, 'nowopen')}>Now Open <span id="nowopen-count" class="count-circle">{nowOpenCount}</span></button>

          {#if activeSubFilters.length > 0}
          <button class="text-blue-500 text-sm ml-4" on:click={() => { activeSubFilters = []; activeFilter = 'All'; applyFilters();}}>Clear</button>
          {/if}
        </div>
      </div>
  
      <div class="filter-group block relative after:table after:clear-both mx-0">
        <div id="no-items-message" class="text-center text-red-500 font-semibold my-4" style="display: none;">No items match these filters</div>
        <div class="grid-sizer w-full md:w-[48%] my-2 mx-auto md:mx-[1%] md:float-left flex flex-row items-center justify-stretch relative md:block"></div>
        {#each gridItems as item}
        <div
          class={`grid-item border w-full md:w-[48%] my-2 md:my-4 mx-auto md:mx-[1%] gap-3 flex flex-row items-center justify-stretch relative md:block visible ${getBorderClass(item.type)} bg-white bg-opacity-100 border-solid rounded shadow-lg relative`}
          data-type={item.type}
          data-date={item.startDate}
          data-search-terms={item.searchTerms.toLowerCase()}
          data-sub-filter-terms={item.subFilterTerms.toLowerCase()}
        >
          <div class={`absolute top-0 left-0 ${getBackgroundClass(item.type)} text-white text-xs font-bold py-1 px-2 rounded-br z-30`}>
            {item.type === 'shop' ? 'Shop' : 'Eat'}
          </div>
          <div class="w-full relative p-3 md:p-0 flex flex-row md:block">
            {#if item.image}
              <img src={item.image} alt={item.storeName} class="hidden md:block w-full h-auto rounded-t" style="z-index: -1;" />
            {/if}
            <div class="w-2/3 md:w-full pr-2 md:p-4 mt-5 md:mt-0 text-left md:text-center self-center">
              <h4 class={`${getTextClass(item.type)} product-title text-lg leading-none font-black mt-3 mb-0`}>{item.title}</h4>
              <h5 class="product-store text-sm text-center opacity-75">{item.storeName}</h5>
              <!-- <p class="text-base font-normal m-0 p-0 line-clamp-1 md:line-clamp-none md:truncate">{@html item.description || '&nbsp;'}</p> -->
              <p class="product-sum text-base text-center mt-3 md:mt-5 mb-12 md:mb-0 overflow-hidden">{formatDateRange(item.startDate, item.endDate)}</p>
            </div>
            <div class="mini-btn transition-transform duration-300 hover:scale-95 w-1/3 md:w-full my-0 ml-auto md:mr-auto flex-grow text-center self-center pt-0 md:p-2">
              <a href="#" class={`${item.type === 'eat' ? 'btn-eat-solid' : 'btn-shop-solid'} text-center font-semibold px-4 py-2 rounded-full border-2 ${getBorderClass(item.type)} hover:${getBorderHoverClass(item.type)}${getTextClass(item.type)}`}>Check it out</a>
            </div>
          </div>
        </div>
      {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .tns-nav {
    display: none;
  }

  .slide-up {
    animation: slideUp 1.2s ease-out forwards;
  }

  .count-circle {
    padding: 2px 6px;
    font-size: 0.75rem;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .btn-eat-solid,
  .btn-shop-solid {
    font-size: .75rem;
    line-height: 2;
    margin-right: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .selected {
    background-color: #d1d5db; /* Tailwind gray-300 */
  }
</style>