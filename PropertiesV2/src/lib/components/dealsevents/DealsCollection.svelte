<script>
  import { onMount, tick } from "svelte";
  import Isotope from "isotope-layout";
  import imagesLoaded from "imagesloaded";

  let items = [
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltd301b6e98aff3a76/66b0f6aa0efc692c8688680e/download",
      storeName: "Pandora",
      title: "Free Bracelet",
      startDate: "2024-08-22",
      endDate: "2024-09-08",
      type: "shop",
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
      subFilterTerms: "coming-soon",
      searchTerms: "red robin gourmet burgers and brews, weekend, half off, wednesday, workshop, supermarket, grocery, eating, santa",
    },
    {
      image: "https://images.contentstack.io/v3/assets/blt8ca3003060a25f8a/bltbfd568c498e0e3df/66cf37c8e49f55306beeb5a0/download",
      storeName: "J.Crew Factory",
      title: "50-70% Off Storewide at J.Crew Factory!",
      startDate: "2024-11-28",
      endDate: "2024-12-03",
      type: "shop",
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
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
      url: '/deals/dealentry',
      subFilterTerms: "now-open, inventory-insider",
      searchTerms: "tradehome shoes, trade home, bogo, Entertainment, Music, Concert",
    }
  ];

  let filters = [], subFilters = [], activeFilter = 'all', activeSubFilters = [];
  let itemCounts = {}, subFilterCounts = {}, currentItemCount = items.length;
  let allSearchTerms = [], filteredSearchTerms = [], isotope;
  let searchTerm = '', focusedIndex = -1, suggestionClicked = false;
  let isEnteringSearch = false;
  let feedbackMessage = '';

  const getBorderClass = (type) => type === 'shop' ? 'border-shop' : 'border-eat';
  const getBorderFocusClass = (type) => type === 'shop' ? 'border-shop-l' : 'border-eat-l';
  const getBackgroundClass = (type) => type === 'shop' ? 'bg-shop-d' : 'bg-eat-d';

  function sortByDate(items) {
    return items.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }

  function formatDateMessage(startDate, endDate) {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const options = { month: "short", day: "numeric" };

    if (start > now) {
      return `Starts ${start.toLocaleDateString("en-US", options)}`;
    } else {
      return `Ends ${end.toLocaleDateString("en-US", options)}`;
    }
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

  $: feedbackMessage = `${currentItemCount} item(s) match your filter selection.`;

  const scrollToTop = () => {
    const section = document.getElementById('DealsIsotopeGrid');
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
    searchTerm = suggestion.replace(/<\/?[^>]+(>|$)/g, "");
    suggestionClicked = true;
    applyFilters(activeFilter);
  };

  const clearFilters = () => {
    activeFilter = 'all';
    activeSubFilters = [];
    searchTerm = '';
    suggestionClicked = false;
    applyFilters(activeFilter);

    feedbackMessage = `All filters cleared. Showing ${items.length} item(s).`;
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

    const grid = document.querySelector(".filter-group");

    if (typeof window !== 'undefined') {
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

      updateSubFilterCounts();
      isotope.on("arrangeComplete", updateSubFilterCounts);

      feedbackMessage = `${items.length} item(s) found.`;

      imagesLoaded(grid, { background: true }, () => {
        isotope.layout();
      });

      window.addEventListener('resize', () => {
        isotope.layout();
      });

      return () => {
        window.removeEventListener('resize', isotope.layout);
        isotope?.destroy();
      };
    }
  });
</script>

<section id="DealsIsotopeGrid" class="grid-container w-full max-w-7xl mx-auto px-4 pb-24 overflow-visible relative">
  <div class="sticky inset-0 pb-4 pt-8 md:pt-18 px-0 mb-8 text-center z-40 h-auto bg-white bottom-shadow">

    <div class={`input-box relative ${isEnteringSearch? 'border-entering' : ''}`}>
        <i class={`fa fa-search input-icon ${isEnteringSearch? 'text-accent1 rotate-90' : 'text-dark'}`} aria-hidden="true"></i>
        <form class="input-form" on:submit|preventDefault>
        <input id="search" type="text" placeholder="Search" name="search" autocomplete="off" class={`${isEnteringSearch? 'placeholder-accent1 text-accent1' : 'placeholder-dark text-dark'}`} on:focus={handleFocus} on:blur={handleBlur} on:input={handleInput} on:keydown={handleKeyDown} bind:value={searchTerm} aria-label="Search for items" aria-live="polite"/>
        </form>
        <svg class="input-border" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style="enable-background:new 0 0 671 111;" xml:space="preserve">
            <path class={`${isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"></path>
            <path class={`${isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"></path>
        </svg>
        <div class="sr-only" aria-live="polite">{feedbackMessage}</div>
        {#if filteredSearchTerms.length > 0 && !suggestionClicked}
        <ul id="output" class="flex flex-col top-16 w-full absolute z-[99] bg-gray-50 drop-shadow-lg">
        {#each filteredSearchTerms as suggestion, index}
        <li class={`prediction-item text-dark hover:text-purewhite p-1 hover:bg-accent1 ${index === focusedIndex ? 'bg-accent2' : ''}`} on:click={() => selectSuggestion(suggestion)}>
            {@html suggestion}
        </li>
        {/each}
        </ul>
        {/if}
    </div>

    <div class="primary-filter-container mt-3 flex justify-center space-x-2">
    {#each filters as filter}
    <button on:click={() => applyFilters(filter)} class={`primary-filter ${activeFilter === filter ? filter === 'all' ? 'bg-gray-800 text-purewhite' : getBackgroundClass(filter) + ' ' + getBorderClass(filter) + ' text-purewhite' : 'bg-gray-200 text-gray-800 cursor-pointer'}`} tabindex="0" on:keydown={(e) => e.key === 'Enter' && applyFilters(activeFilter)}>
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
        <span class="count-circle">{itemCounts[filter] ?? 0}</span>
    </button>
    {/each}
    </div>

    <div class="sub-filter-container mt-3 flex justify-center flex-wrap space-x-2">
    {#each subFilters as subFilter}
    <button class={`sub-filter ${subFilterCounts[subFilter] === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : activeSubFilters.includes(subFilter) ? 'bg-gray-800 text-purewhite' : 'bg-gray-200 text-gray-800 cursor-pointer'}`} on:click={() => applyFilters(activeFilter, subFilter)} disabled={subFilterCounts[subFilter] === 0} tabindex="0" on:keydown={(e) => e.key === 'Enter' && applyFilters(activeFilter, subFilter)}>
        {subFilter}
        <span class="count-circle">{subFilterCounts[subFilter] ?? 0}</span>
    </button>
    {/each}
    
    {#if activeSubFilters.length > 0 || activeFilter !== 'all' || searchTerm}
        <button class="text-blue-500 text-sm ml-4 cursor-pointer" on:click={clearFilters} tabindex="0" aria-label="Clear all filters">Clear</button>
    {/if}
    </div>

    <p class="filter-count font-semibold my-2 text-sm" aria-live="polite">{currentItemCount} item/s match your filter selection/s.</p>
  </div>

  <div class="filter-group relative w-full overflow-visible space-y-4 md:space-y-8">
    <div class="grid-sizer w-full md:w-[48%] lg:w-[31%] my-2 md:my-4 mx-auto md:mx-[1%] gap-3 relative hidden"></div>
    {#each items as item}
    <a role="button" 
   class={`grid-item border w-full md:w-[48%] lg:w-[31%] my-2 md:my-4 mx-auto md:mx-[1%] md:float-left gap-3 flex flex-row items-center justify-stretch relative md:block visible cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${getBorderFocusClass(item.type)} ${getBorderClass(item.type)} ${getBackgroundClass(item.type)} text-white border-solid rounded shadow-lg hover:shadow-none hover:scale-99 relative`} 
   data-type={item.type} 
   data-date={item.startDate} 
   data-search-terms={item.searchTerms.toLowerCase()} 
   data-sub-filter-terms={item.subFilterTerms.toLowerCase()} 
   tabindex="0" 
   aria-label={`Read more about the ${item.storeName} deal`} 
   on:click={() => typeof window !== 'undefined' && window.location.assign(item.url)} 
   on:keydown={(e) => e.key === 'Enter' && typeof window !== 'undefined' && window.location.assign(item.url)}>
      <div class="w-full relative p-3 md:p-0 flex flex-row md:block">
          {#if item.image}
            <img src={item.image} alt={item.storeName} aria-hidden="true" class="hidden md:block w-full h-auto rounded-t" style="z-index: -1;" />
          {/if}
          <div class={`w-2/3 md:w-full pr-2 md:p-4 mt-0 text-left md:text-center self-center z-20 ${getBackgroundClass(item.type)}`}>
            <h4 class="text-white product-title text-lg leading-none font-black mt-1 md:mt-3 mb-0 z-20">{item.title}</h4>
            <h5 class="product-store text-sm opacity-85 z-20">{item.storeName}</h5>
            <p class="product-sum text-xs mt-3 md:mt-5 mb-0 overflow-hidden z-20">{formatDateMessage(item.startDate, item.endDate)}</p>
          </div>
        </div>
    </a>
    {/each}
  </div>
</section>

<style>
  .bottom-shadow::after {
    content: '';
    height: 10px;
    @apply absolute left-0 bottom-0 w-full z-0 shadow-lg;
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

  .grid-item {
    transition: transform .3s ease-in-out, box-shadow .3s ease-in-out;
  }
</style>