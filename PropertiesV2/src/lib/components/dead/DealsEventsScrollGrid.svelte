<script>
  import { onMount, tick } from "svelte";
  import Isotope from "isotope-layout";

  let items = [
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltd301b6e98aff3a76/66b0f6aa0efc692c8688680e/download",
      storeName: "Pandora",
      title: "Free Bracelet",
      startDate: "2024-08-22",
      endDate: "2024-09-08",
      type: "shop",
      url: '/dealssingle',
      subFilterTerms: "locally-owned, coming-soon, featured",
      searchTerms: "pandora, jewelry, bracelet, Accessories, Gifts, Apparel"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt2be4c90f592d57bc/66be34e4f641a6ee1eabba81/download",
      storeName: "Buckle",
      title: "Your back to school supply list",
      startDate: "2024-08-15",
      endDate: "2024-10-31",
      type: "shop",
      url: '/dealssingle',
      subFilterTerms: 'inventory-insider, featured',
      searchTerms: "buckle, back to school, supply, black pants, shoes, makeup",
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt988bcf1842284418/667c2c0d7589929628077a05/download",
      storeName: "Rodizio Grill",
      title: "The Happiest Hour",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      type: "eat",
      url: '/dealssingle',
      subFilterTerms: "now-open, featured",
      searchTerms: "rodizio grill, happy hour, Entertainment, Music, Concert",
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt4874594ea1e4427e/668e8a5294a81678c507fb07/download",
      storeName: "Aeropostale",
      title: "In our Low Rise Era",
      startDate: "2024-07-10",
      endDate: "2024-09-03",
      type: "shop",
      url: '/dealssingle',
      subFilterTerms: "inventory-insider, now-open",
      searchTerms: "aeropostale, smile, back to school, low rise, Entertainment, Music, Concert",
    },
    {
      image: "",
      storeName: "Tradehome Shoes",
      title: "20% Off Sale",
      startDate: "2024-008-05",
      endDate: "2024-09-03",
      type: "shop",
      url: '/dealssingle',
      subFilterTerms: "coming-soon",
      searchTerms: "tradehome shoes, sale, workshop, supermarket, grocery, eating"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt0f556bd94f24ac2d/66709f551774d22bb2a1669a/download",
      storeName: "PF Chang\'s",
      title: "Chef\'s Feast",
      startDate: "2024-06-19",
      endDate: "2024-12-31",
      type: "eat",
      url: '/dealssingle',
      subFilterTerms: "now-open, coming-soon",
      searchTerms: "PF Chang, feast, free, coupon, restaurant, boutique, holiday, clothing",
    },
    {
      image: "",
      storeName: "Sleep Number by Select Comfort",
      title: "Labor Day",
      startDate: "2024-08-26",
      endDate: "2024-09-03",
      type: "shop",
      url: '/dealssingle',
      subFilterTerms: "locally-owned, coming-soon",
      searchTerms: "sleep number by select comfort, labor day sale, smart bed, adjustable, Accessories, Gifts, Apparel",
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt2b9a2a984b4ee0c1/66a2ba7881a8f6eb75d417ee/download",
      storeName: "Red Robin Gourmet Burgers and Brews",
      title: "Kids Half-Off Wednesday Nights!",
      startDate: "2024-07-25",
      endDate: "2024-12-31",
      type: "eat",
      url: '/dealssingle',
      subFilterTerms: "coming-soon",
      searchTerms: "red robin gourmet burgers and brews, weekend, half off, wednesday, workshop, supermarket, grocery, eating, santa",
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltbfd568c498e0e3df/66cf37c8e49f55306beeb5a0/download",
      storeName: "J.Crew Factory",
      title: "50-70% Off Storewide at J.Crew Factory!",
      startDate: "2024-08-28",
      endDate: "2024-09-03",
      type: "shop",
      url: '/dealssingle',
      subFilterTerms: "now-open, locally-owned",
      searchTerms: "j crew factory, j. crew, clearance, back to school, boutique, holiday, clothing",
    },
    {
      image: "",
      storeName: "Sephora",
      title: "Labor Day Sale",
      startDate: "2024-08-30",
      endDate: "2024-09-03",
      type: "shop",
      url: '/dealssingle',
      subFilterTerms: "inventory-insider",
      searchTerms: "sephora, labor day, red shirt, lingerie, barber, beauty",
    },
    {
      image: "",
      storeName: "Starbucks",
      title: "Special Birthday Reward",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      type: "eat",
      url: '/dealssingle',
      subFilterTerms: "locally-owned, now-open",
      searchTerms: "starbucks, birthday, pizza, hamburger, popcorn, saddlery",
    },
    {
      image: "",
      storeName: "JCPenney Portraits",
      title: "Wizardly Way Photo Event",
      startDate: "2024-08-06",
      endDate: "2024-09-07",
      type: "shop",
      url: '/dealssingle',
      subFilterTerms: "inventory-insider",
      searchTerms: "jcpenney portraits, j c, jc, wizard, magical, studio, kiosk, dresses, outlet",
    },
    {
      image: "",
      storeName: "The Cheesecake Factory",
      title: "Special Birthday Reward",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      type: "eat",
      url: '/dealssingle',
      subFilterTerms: "coming-soon, locally-owned",
      searchTerms: "The Cheescake Factory, birthday reward, slice, Accessories, Gifts, Apparel",
    },
    {
      image: "",
      storeName: "Tradehome Shoes",
      title: "Buy 1, Get 1 Free on select RIVAL Shoes",
      startDate: "2024-07-18",
      endDate: "2024-09-10",
      type: "shop",
      url: '/dealssingle',
      subFilterTerms: "now-open, inventory-insider",
      searchTerms: "tradehome shoes, trade home, bogo, Entertainment, Music, Concert",
    }
  ];

  let gridItems = [];
  let isotope;
  let activeFilter = 'all';
  let activeSubFilters = [];
  let allSearchTerms = [];
  let filteredSearchTerms = [];
  let itemCounts = {};
  let state = {
    searchTerm: '',
    showSuggestions: false,
    clickedSuggestion: false,
    isEnteringSearch: false,
    focusedIndex: -1,
  };

  $: filters = ['all', ...new Set(items.map(item => item.type))];

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
    allSearchTerms = items.flatMap(item => item.searchTerms.split(",").map(term => term.trim().toLowerCase()));
    allSearchTerms = [...new Set(allSearchTerms)].sort();
  }

  $: filteredSearchTerms = state.searchTerm.length > 0 
    ? allSearchTerms.filter(term => term.includes(state.searchTerm)).slice(0, 5) 
    : [];

  $: returnList = filteredSearchTerms.map(term => 
    term.replace(new RegExp(state.searchTerm, 'gi'), match => `<strong class="font-bold">${match}</strong>`)
  );

  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      state.focusedIndex = (state.focusedIndex + 1) % filteredSearchTerms.length;
    } else if (e.key === "ArrowUp") {
      state.focusedIndex = (state.focusedIndex - 1 + filteredSearchTerms.length) % filteredSearchTerms.length;
    } else if (e.key === "Enter" && state.focusedIndex >= 0) {
      selectSuggestion(filteredSearchTerms[state.focusedIndex]);
    } else if (e.key === "Enter") {
      applyFilters();
      scrollToTop();
    }
  }

  function selectSuggestion(suggestion) {
    const plainText = suggestion.replace(/<\/?[^>]+(>|$)/g, "");
    state.searchTerm = plainText;
    state.showSuggestions = false;
    state.clickedSuggestion = true;
    state.focusedIndex = -1;
    applyFilters();
    scrollToTop();
  }

  function handleFocus() {
    state.isEnteringSearch = true;
  }

  function handleBlur() {
    state.isEnteringSearch = false;
    setTimeout(() => state.showSuggestions = false, 100);
  }

  function splitSubFilterTerms(subFilterTerms) {
    return subFilterTerms.split(',').map(term => term.trim().toLowerCase());
  }

  function handleInput(e) {
    state.searchTerm = e.target.value;
    state.clickedSuggestion = false;
  }

  function applyFilters() {
    let filterString = activeFilter === 'all' ? '*' : `[data-type="${activeFilter}"]`;

    if (activeSubFilters.length > 0) {
      const subFilterString = activeSubFilters
        .map(sub => `[data-sub-filter-terms*="${sub.toLowerCase()}"]`)
        .join('');
      filterString += subFilterString;
    }

    if (state.searchTerm) {
      filterString += `[data-search-terms*="${state.searchTerm.toLowerCase()}"]`;
    }

    if (isotope) {
      isotope.arrange({ filter: filterString });
    }
  }

  function filterItems(type, subType = '') {
    if (type) {
      activeFilter = type;
      const validSubFilters = getValidSubFilters(type);
      activeSubFilters = activeSubFilters.filter(filter => validSubFilters.includes(filter));
    }

    if (subType) {
      if (activeSubFilters.includes(subType)) {
        activeSubFilters = activeSubFilters.filter(filter => filter !== subType);
      } else {
        activeSubFilters.push(subType);
      }
    }

    applyFilters();
    scrollToTop();
  }

  function getValidSubFilters(type) {
    const subFilterMapping = {
      all: ['locally-owned', 'inventory-insider', 'coming-soon', 'now-open'],
      eat: ['locally-owned', 'coming-soon', 'now-open'],
      shop: ['locally-owned', 'inventory-insider', 'coming-soon', 'now-open'],
    };
    return subFilterMapping[type] || [];
  }

  function calculateCounts() {
    const counts = { all: items.length };

    const filteredItems = activeFilter === 'all' 
      ? items 
      : items.filter(item => item.type === activeFilter);

    filters.forEach(filter => {
      if (filter !== 'all') {
        counts[filter] = items.filter(item => item.type === filter).length;
      }
    });

    subFilters.forEach(subFilter => {
      counts[subFilter] = filteredItems.filter(item => 
        item.subFilterTerms.includes(subFilter)).length;
    });

    return counts;
  }

  function scrollToTop() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.scrollIntoView({ behavior: 'smooth' });
  }

  function initializeIsotope() {
    try {
      if (isotope) {
        isotope.destroy();
      }

      isotope = new Isotope(".filter-group", {
        itemSelector: ".grid-item",
        layoutMode: "masonry",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer"
        },
        getSortData: {
          date: "[data-date]",
          type: "[data-type]"
        },
        sortBy: "date",
        sortAscending: true,
        hiddenStyle: {
          opacity: 0,
          transform: "translateY(100px)"
        },
        visibleStyle: {
          opacity: 1,
          transform: "translateY(0)"
        }
      });

      isotope.on("arrangeComplete", updateFilterCount);

    } catch (error) {
      console.error("Failed to initialize Isotope:", error);
    }
  }

  function updateFilterCount() {
    if (!isotope) return;
    const count = isotope.filteredItems?.length || 0;
    const filterCountElement = document.querySelector(".filter-count");
    if (filterCountElement) {
      filterCountElement.textContent = `${count} item${count !== 1 ? 's' : ''} match your filters`;
      filterCountElement.classList.toggle('text-red-500', count === 0);
      filterCountElement.classList.toggle('text-green-500', count > 0);
    }
  }

  $: subFilters = [
    ...new Set(items.flatMap(item => item.subFilterTerms.split(',').map(term => term.trim())))
  ].sort((a, b) => formatLabel(a).localeCompare(formatLabel(b)));

  $: itemCounts = calculateCounts();

  function formatLabel(label) {
    return label.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function isDisabledSubFilter(filter, subFilter) {
    if (filter === 'eat' && subFilter === 'inventory-insider') {
      return true;
    }

    return itemCounts[subFilter] === 0;
  }

  function isFeatured(item) {
    return item.subFilterTerms.includes('featured');
  }

  onMount(async () => {
    gridItems = sortByDate(items);
    collectSearchTerms();
    await tick();
    initializeIsotope();
    applyFilters();
  });

  const getBorderClass = (type) => { return type === 'shop' ? 'border-shop' : 'border-eat'; };
  const getBorderHoverClass = (type) => { return type === 'shop' ? 'border-shop' : 'border-eat'; };
  const getTextClass = (type) => { return type === 'shop' ? 'text-shop-d' : 'text-eat-d'; };
  const getBackgroundClass = (type) => { return type === 'shop' ? 'bg-shop-d' : 'bg-eat-d'; };
</script>

<section id="DealsEventIsotopeGrid" class="grid-container w-full px-4 pb-24 overflow-visible relative">
  <div class="px-0 mb-8 text-center">
    <div class="sticky inset-0 pb-4 pt-8 md:pt-18 px-0 z-40 h-auto bg-gray-50">

      <div class={`input-box ${state.isEnteringSearch? 'border-entering' : ''}`}>
        <i class={`fa fa-search input-icon ${state.isEnteringSearch? 'text-accent1 rotate-90' : 'text-dark'}`} aria-hidden="true"></i>
        <form class="input-form" on:submit|preventDefault>
          <input id="search" type="text" placeholder="Search" name="search" autocomplete="off" class={`${state.isEnteringSearch? 'placeholder-accent1 text-accent1' : 'placeholder-dark text-dark'}`} on:focus={handleFocus} on:blur={handleBlur} on:input={handleInput} on:keydown={handleKeyDown} bind:value={state.searchTerm}  />
        </form>
        <svg class="input-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style="enable-background:new 0 0 671 111;" xml:space="preserve">
            <path class={`${state.isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"></path>
            <path class={`${state.isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"></path>
        </svg>
        {#if returnList.length > 0 && !state.clickedSuggestion}
        <ul id="output" class="flex flex-col top-16 w-full absolute z-[99] bg-white drop-shadow-lg">
          {#each returnList as suggestion, index}
          <li class={`prediction-item text-dark hover:text-white p-1 hover:bg-accent1 ${index === state.focusedIndex ? 'bg-accent2' : ''}`} on:click={() => selectSuggestion(suggestion)}>
            {@html suggestion}
          </li>
          {/each}
        </ul>
        {/if}
      </div>

      <div class="primary-filter-container mt-3 flex justify-center space-x-2">
        {#each filters as filter}
        <button on:click={() => filterItems(filter)} 
          class={`primary-filter ${activeFilter === filter ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
          {filter.charAt(0).toUpperCase() + filter.slice(1)} 
          <span class="count-circle">{itemCounts[filter] ?? 0}</span>
        </button>
        {/each}
      </div>
  
      <div class="sub-filter-container mt-3 flex justify-center flex-wrap space-x-2">
        {#each subFilters as subFilter}
        <button class={`sub-filter ${isDisabledSubFilter(activeFilter, subFilter) ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : (activeSubFilters.includes(subFilter) ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800')}`} on:click={() => filterItems(activeFilter, subFilter)} disabled={isDisabledSubFilter(activeFilter, subFilter)}>
          {formatLabel(subFilter)} 
          <span class="count-circle">{itemCounts[subFilter] ?? 0}</span>
        </button>
        {/each}

        {#if activeSubFilters.length > 0 || state.searchTerm}
        <button class="text-blue-500 text-sm ml-4" on:click={() => { activeSubFilters = []; activeFilter = 'all'; state.searchTerm = ''; state.clickedSuggestion = false; applyFilters(); scrollToTop();}}>Clear</button>
        {/if}
      </div>

      <p class="filter-count font-semibold my-2 text-sm"></p>
      <div class="h-[2px] bg-gray-500 w-full mb-3"></div>
    </div>
  
    <div class="filter-group relative w-full overflow-hidden">
      <div class="grid-sizer w-full md:w-[23%] my-2 md:my-4 mx-auto md:mx-[1%] gap-3 relative hidden"></div>
        {#each gridItems as item}
        <div class={`grid-item border w-full md:w-[23%] my-2 md:my-4 mx-auto md:mx-[1%] md:float-left gap-3 flex flex-row items-center justify-stretch relative md:block visible overflow-hidden ${getBorderClass(item.type)} ${getBackgroundClass(item.type)} text-white border-solid rounded shadow-lg relative`} data-type={item.type} data-date={item.startDate} data-search-terms={item.searchTerms.toLowerCase()} data-sub-filter-terms={item.subFilterTerms.toLowerCase()}>
        <div class={`absolute top-0 left-0 border-r border-b ${getBorderClass(item.type)} ${getTextClass(item.type)} bg-white text-xs font-bold py-1 px-2 rounded-br z-30`}>
          {item.type === 'itemCounts.shop' ? 'Shop' : 'Eat'}
          {#if isFeatured(item)}
            <i class="fa fa-star text-yellow-500 ml-1" aria-hidden="true"></i>
          {/if}
        </div>
        <div class="w-full relative p-3 md:p-0 flex flex-row md:block">
          {#if item.image}
            <img src={item.image} alt={item.storeName} class="hidden md:block w-full h-auto rounded-t" style="z-index: -1;" />
          {/if}
          <div class="w-2/3 md:w-full pr-2 md:p-4 mt-5 md:mt-0 text-left md:text-center self-center">
            <h4 class={`text-white product-title text-lg leading-none font-black mt-3 mb-0`}>{item.title}</h4>
            <h5 class="product-store text-sm text-center opacity-75">{item.storeName}</h5>
            <p class="product-sum text-base text-center mt-3 md:mt-5 mb-12 md:mb-0 overflow-hidden">{formatDateRange(item.startDate, item.endDate)}</p>
          </div>
          <div class="mini-btn transition-transform duration-300 hover:scale-95 w-1/3 md:w-full my-0 ml-auto md:mr-auto md:min-h-16 flex-grow text-center self-center pt-0 md:p-2">
            <a href="{item.url}" title="{item.title}" class={`bg-white text-center font-semibold px-4 py-2 rounded-full border-2 ${getBorderClass(item.type)} ${getTextClass(item.type)} hover:${getBorderHoverClass(item.type)}${getTextClass(item.type)}`}>Check it out</a>
          </div>
        </div>
      </div>
    {/each}
    </div>
  </div>
</section>

<style>
  .count-circle {
    padding: 2px 6px;
    font-size: 0.75rem;
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
    background-color: #d1d5db;
  }
</style>