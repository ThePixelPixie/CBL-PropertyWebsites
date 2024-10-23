<script>
  import { onMount, tick } from "svelte";
  import Isotope from "isotope-layout";

  let items = [
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltf6e8d101a10ebeb7/66e4a50b1d10f23dce5c7ff6/download",
      storeName: "Belk",
      title: "Girls Night Out",
      startDate: "2024-09-19",
      endDate: "2024-09-19",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "party",
      searchTerms: "mens, womens, apparel"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt7730a81d392219e8/64e644bc3026ee4c756b8112/download",
      storeName: "Claires",
      title: "FREE EARRINGS FOR A YEAR",
      startDate: "2024-10-31",
      endDate: "2024-12-31",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "contest",
      searchTerms: "jewelry, accessories"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltb66cbba0e62e6ab0/66f17dd67808db2b04ef7b54/download",
      storeName: "Kay Jewelers",
      title: "LeVian Gala",
      startDate: "2024-10-28",
      endDate: "2024-10-28",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "party",
      searchTerms: "jewelry"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt06b7b42981946a71/66d7536ea2a54f7f40fd8537/download",
      storeName: "Dillard's",
      title: "Creed Fragrance Launch at Dillard’s",
      startDate: "2024-09-04",
      endDate: "2024-12-31",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "party",
      searchTerms: "apparel, accessories, health, beauty, fragrance"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltcd753edd444e776f/66db56b51c3d3c102133a59b/download",
      storeName: "Yankee Candle",
      title: "Escape into nature with our NEW Cottage Getaway Collection",
      startDate: "2024-09-27",
      endDate: "2024-12-31",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "inventory-insider",
      searchTerms: "home, furnishings, furniture, accessories, gifts"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt607fcc00674b9c1d/66db5617095fff01716a3140/download",
      storeName: "Yankee Candle",
      title: "Turn a favorite photo into a fragranced memory to love and share!",
      startDate: "2024-09-27",
      endDate: "2024-12-31",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "inventory-insider",
      searchTerms: "home, furnishings, candle, accessories, gifts"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltf68409af50f571c7/64fb17889da01559fa1eb689/download",
      storeName: "Adore Me",
      title: "Free Bra Event",
      startDate: "2024-09-07",
      endDate: "2024-12-31",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "contest",
      searchTerms: "womens, apparel, bra, intimates"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt3bc346d1e0306905/65d368d65382e364ac2a976f/download",
      storeName: "Hamilton Place",
      title: "Chattanooga Community Orchestra",
      startDate: "2024-09-27",
      endDate: "2024-12-31",
      type: "entertainment",
      url: '/evententry',
      subFilterTerms: "community",
      searchTerms: "entertainment, music, orchestra, local"
    },
    {
      image: "",
      storeName: "Belk",
      title: "Fit for the Cure",
      startDate: "2024-09-27",
      endDate: "2024-12-27",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "inventory-insider",
      searchTerms: "womens, apparel, cancer, fit"
    },
    {
      image: "",
      storeName: "Adore Me",
      title: "Bridal Event",
      startDate: "2024-09-27",
      endDate: "2024-11-31",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "party",
      searchTerms: "womens, apparel, wedding, bride, intimates, bra, underwear"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt505a8323413b9d8e/620bd50d6c53c5684497f2b6/download",
      storeName: "Abuelo\'s",
      title: "National Margarita Day",
      startDate: "2024-09-27",
      endDate: "2024-11-31",
      type: "eat",
      url: '/evententry',
      subFilterTerms: "locally-owned",
      searchTerms: "restaurant, food, mexican, margarita, drink"
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/blt3793902659880fda/6321ceeb27a8dd5d8cd3b0a7/download",
      storeName: "Eddie Bauer",
      title: "We're Hiring People Like You!",
      startDate: "2024-09-27",
      endDate: "2024-11-21",
      type: "shop",
      url: '/evententry',
      subFilterTerms: "job-fair",
      searchTerms: "apparel"
    }
  ];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getTypeLabel = (type) => {
    return capitalizeFirstLetter(type);
  };


  let filters = [], subFilters = [], activeFilter = 'all', activeSubFilters = [];
  let itemCounts = {}, subFilterCounts = {}, currentItemCount = items.length;
  let allSearchTerms = [], filteredSearchTerms = [], isotope;
  let searchTerm = '', focusedIndex = -1, suggestionClicked = false;
  let isEnteringSearch = false;

  const typeClassMap = {
  shop: {
    border: 'border-shop',
    hover: 'border-shop',
    text: 'text-shop-d',
    background: 'bg-shop-d'
  },
  eat: {
    border: 'border-eat',
    hover: 'border-eat',
    text: 'text-eat-d',
    background: 'bg-eat-d'
  },
  entertainment: {
    border: 'border-accent2',
    hover: 'border-accent2',
    text: 'text-accent2',
    background: 'bg-accent2'
  },
  job: {
    border: 'border-burgundy',
    hover: 'border-burgundy',
    text: 'text-burgundy-d',
    background: 'bg-burgundy-d'
  }
};

// Helper functions
const getBorderClass = (type) => typeClassMap[type]?.border || '';
const getBorderHoverClass = (type) => typeClassMap[type]?.hover || '';
const getTextClass = (type) => typeClassMap[type]?.text || '';
const getBackgroundClass = (type) => typeClassMap[type]?.background || '';

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

  filters = ['all', ...[...new Set(items.map(item => item.type))].sort()];
  subFilters = [...new Set(items.flatMap(item => item.subFilterTerms.split(', ')))]
    .map(term => term.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()))
    .sort();

  $: {
    filters.forEach(filter => {
      itemCounts[filter] = filter === 'all' ? items.length : items.filter(item => item.type === filter).length;
    });
  }

  $: allSearchTerms = [...new Set(items.flatMap(item => item.searchTerms.split(',').map(term => term.trim().toLowerCase())))].sort();

  $: filteredSearchTerms = searchTerm.length > 0 && !suggestionClicked
    ? allSearchTerms.filter(term => term.includes(searchTerm.toLowerCase())).slice(0, 5)
    : [];

  const scrollToTop = () => {
    const section = document.getElementById('eventsIsotopeGrid');
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  };

  const applyFilters = (filter, subFilter = null) => {
    activeFilter = filter;

    if (subFilter) {
      activeSubFilters = activeSubFilters.includes(subFilter)
        ? activeSubFilters.filter(s => s !== subFilter)
        : [...activeSubFilters, subFilter];
    }

    isotope.arrange({
      filter: function(itemElem) {
        const typeMatch = activeFilter === 'all' || itemElem.dataset.type === activeFilter;
        const subFilterMatch = activeSubFilters.length === 0 || activeSubFilters.every(sub => itemElem.dataset.subFilterTerms.includes(sub.toLowerCase().replace(/\s/g, '-')));
        const searchMatch = !searchTerm || itemElem.dataset.searchTerms.includes(searchTerm.toLowerCase());
        return typeMatch && subFilterMatch && searchMatch;
      }
    });

    scrollToTop();
  };

  const updateSubFilterCounts = () => {
    const filteredItems = isotope.getFilteredItemElements();
    currentItemCount = filteredItems.length;
    subFilters.forEach(subFilter => {
      const subFilterTerm = subFilter.toLowerCase().replace(/\s/g, '-');
      subFilterCounts[subFilter] = Array.from(filteredItems).filter(item => item.dataset.subFilterTerms.includes(subFilterTerm)).length;
    });
  };

  const selectSuggestion = suggestion => {
    searchTerm = suggestion.replace(/<\/?[^>]+(>|$)/g, "");  // Remove HTML tags
    suggestionClicked = true;  // Mark the suggestion as clicked
    applyFilters(activeFilter);
  };

  const clearFilters = () => {
    activeFilter = 'all';
    activeSubFilters = [];
    searchTerm = '';
    suggestionClicked = false;
    applyFilters(activeFilter);
  };

  const handleFocus = () => {
    isEnteringSearch = true;
  };

  const handleBlur = () => {
    isEnteringSearch = false;
    setTimeout(() => {
      suggestionClicked = false;
    }, 100);
  };

  const handleInput = (e) => {
    searchTerm = e.target.value;
    suggestionClicked = false;
    applyFilters(activeFilter);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      focusedIndex = (focusedIndex + 1) % filteredSearchTerms.length;
    } else if (e.key === "ArrowUp") {
      focusedIndex = (focusedIndex - 1 + filteredSearchTerms.length) % filteredSearchTerms.length;
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      selectSuggestion(filteredSearchTerms[focusedIndex]);
    } else if (e.key === "Enter") {
      applyFilters(activeFilter);
    }
  };

  onMount(async () => {
    items = sortByDate(items);
    await tick();

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

    isotope.layout();

    updateSubFilterCounts();
    isotope.on("arrangeComplete", updateSubFilterCounts);
    return () => isotope?.destroy();
  });
</script>

<section id="eventsIsotopeGrid" class="grid-container w-full max-w-7xl m-auto px-4 pb-24 overflow-visible relative">
  <div class="sticky inset-0 pb-4 pt-8 md:pt-18 px-0 mb-8 text-center z-40 h-auto bg-white bottom-shadow">

    <div class={`input-box relative ${isEnteringSearch? 'border-entering' : ''}`}>
        <i class={`fa fa-search input-icon ${isEnteringSearch? 'text-accent1 rotate-90' : 'text-dark'}`} aria-hidden="true"></i>
        <form class="input-form" on:submit|preventDefault>
        <input id="search" type="text" placeholder="Search" name="search" autocomplete="off" class={`${isEnteringSearch? 'placeholder-accent1 text-accent1' : 'placeholder-dark text-dark'}`} on:focus={handleFocus} on:blur={handleBlur} on:input={handleInput} on:keydown={handleKeyDown} bind:value={searchTerm}  />
        </form>
        <svg class="input-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style="enable-background:new 0 0 671 111;" xml:space="preserve">
            <path class={`${isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"></path>
            <path class={`${isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"></path>
        </svg>
        {#if filteredSearchTerms.length > 0 && !suggestionClicked}
        <ul id="output" class="flex flex-col top-16 w-full absolute z-[99] bg-white drop-shadow-lg">
        {#each filteredSearchTerms as suggestion, index}
        <li class={`prediction-item text-dark hover:text-white p-1 hover:bg-accent1 ${index === focusedIndex ? 'bg-accent2' : ''}`} on:click={() => selectSuggestion(suggestion)}>
            {@html suggestion}
        </li>
        {/each}
        </ul>
        {/if}
    </div>

    <div class="primary-filter-container mt-3 flex justify-center space-x-2">
    {#each filters as filter}
    <button on:click={() => applyFilters(filter)} class={`primary-filter ${activeFilter === filter ? filter === 'all' ? 'bg-gray-800 text-white' : getBackgroundClass(filter) + ' ' + getBorderClass(filter) + ' text-white' : 'bg-gray-200 text-gray-800'}`}>
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
        <span class="count-circle">{itemCounts[filter] ?? 0}</span>
    </button>
    {/each}
    </div>

    <div class="sub-filter-container mt-3 flex justify-center flex-wrap space-x-2">
    {#each subFilters as subFilter}
    <button class={`sub-filter ${subFilterCounts[subFilter] === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : activeSubFilters.includes(subFilter) ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`} on:click={() => applyFilters(activeFilter, subFilter)} disabled={subFilterCounts[subFilter] === 0}>
        {subFilter}
        <span class="count-circle">{subFilterCounts[subFilter] ?? 0}</span>
    </button>
    {/each}
    
    {#if activeSubFilters.length > 0 || activeFilter !== 'all' || searchTerm}
        <button class="text-blue-500 text-sm ml-4" on:click={clearFilters}>Clear</button>
    {/if}
    </div>

    <p class="filter-count font-semibold my-2 text-sm">{currentItemCount} item/s match your filter selection/s.</p>
  </div>

  <div class="filter-group relative w-full m-auto overflow-hidden">
    <div class="grid-sizer w-full md:w-[48%] lg:w-[31%] my-2 md:my-4 mx-auto md:mx-[1%] gap-3 relative hidden"></div>
    {#each items as item}
    <div  class={`grid-item border w-full md:w-[48%] lg:w-[31%] my-2 md:my-4 mx-auto md:mx-[1%] md:float-left gap-3 flex flex-row items-center justify-stretch relative md:block visible overflow-hidden ${getBorderClass(item.type)} ${getBackgroundClass(item.type)} text-white border-solid rounded shadow-xl relative`} data-type={item.type}  data-date={item.startDate}  data-search-terms={item.searchTerms.toLowerCase()}  data-sub-filter-terms={item.subFilterTerms.toLowerCase()} on:click={() => window.location.href = item.url} role="button" tabindex="0"  on:keydown={(e) => e.key === 'Enter' && (window.location.href = item.url)}>
        <div class="w-full relative p-3 md:p-0 flex flex-row md:block">
          {#if item.image}
            <img src={item.image} alt={item.storeName} class="hidden md:block w-full h-auto rounded-t" style="z-index: -1;" />
          {/if}
          <div class="w-2/3 md:w-full pr-2 md:p-4 mt-5 md:mt-0 text-left md:text-center self-center">
            <h4 class={`text-white product-title text-lg leading-none font-black mt-1 md:mt-3 mb-0`}>{item.title}</h4>
            <h5 class="product-store text-sm opacity-75">{item.storeName}</h5>
            <p class="product-sum text-base mt-3 md:mt-5 mb-0 overflow-hidden">{formatDateRange(item.startDate, item.endDate)}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .bottom-shadow::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10px;
    @apply shadow-lg;
    z-index: 0;
  }
  
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
</style>