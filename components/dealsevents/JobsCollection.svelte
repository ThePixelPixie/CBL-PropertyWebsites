<script>
  import { onMount, tick } from "svelte";
  import Isotope from "isotope-layout";

  let items = [
    {
      storeName: "Santa's Workshop",
      title: "Christmas Photo Set Manager",
      startDate: "2024-01-21",
      endDate: "",
      type: "full-time, seasonal",
      url: '/jobentry',
      searchTerms: "christmas, santa, holiday"
    },
    {
      storeName: "Santa's Workshop",
      title: "Christmas Photo Set Staff",
      startDate: "2023-10-25",
      endDate: "",
      type: "part-time, seasonal",
      url: '/jobentry',
      searchTerms: "christmas, santa, gifts"
    },
    {
      storeName: "Francesca's",
      title: "Assistant Manager",
      startDate: "2023-10-16",
      endDate: "",
      type: "part-time",
      url: '/jobentry',
      searchTerms: "retail, manager"
    },
    {
      storeName: "Francesca's",
      title: "Key Holder",
      startDate: "2023-08-21",
      endDate: "",
      type: "part-time",
      url: '/jobentry',
      searchTerms: "retail, key holder"
    }
  ];

  // Create distinct filter types by splitting combined types like 'full-time, seasonal'
  let filters = ['all', ...[...new Set(items.flatMap(item => item.type.split(', ').map(type => type.trim())))].sort()];

  let filterCounts = {};
  let activeFilter = 'all';
  let currentItemCount = items.length;
  let allSearchTerms = [], filteredSearchTerms = [], isotope;
  let searchTerm = '', focusedIndex = -1, suggestionClicked = false;
  let isEnteringSearch = false;

  // Initialize static filter counts
  $: {
    filterCounts = filters.reduce((counts, filter) => {
      counts[filter] = filter === 'all' ? items.length : items.filter(item => item.type.split(', ').includes(filter)).length;
      return counts;
    }, {});
  }

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

  $: {
    allSearchTerms = [...new Set(items.flatMap(item => item.searchTerms.split(',').map(term => term.trim().toLowerCase())))].sort();
    filteredSearchTerms = searchTerm.length > 0 && !suggestionClicked
      ? allSearchTerms.filter(term => term.includes(searchTerm.toLowerCase())).slice(0, 5)
      : [];
  }

  const applyFilters = (filter) => {
    activeFilter = filter;

    isotope.arrange({
      filter: function(itemElem) {
        const typeMatch = activeFilter === 'all' || itemElem.dataset.type.split(', ').includes(activeFilter);
        const searchMatch = !searchTerm || itemElem.dataset.searchTerms.includes(searchTerm.toLowerCase());
        return typeMatch && searchMatch;
      }
    });
  };

  const selectSuggestion = suggestion => {
    searchTerm = suggestion.replace(/<\/?[^>]+(>|$)/g, "");  
    suggestionClicked = true;
    applyFilters(activeFilter);
  };

  const clearFilters = () => {
    activeFilter = 'all';
    searchTerm = '';
    suggestionClicked = false;
    applyFilters(activeFilter);
  };

  const handleInput = (e) => {
    searchTerm = e.target.value;
    suggestionClicked = false;
    applyFilters(activeFilter);
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
  });
</script>

<section id="NewsIsotopeGrid" class="grid-container w-full max-w-7xl mx-auto px-4 pb-24 overflow-visible relative">
  <!-- Search Input -->
  <div class="sticky inset-0 pb-4 pt-8 md:pt-18 px-0 mb-8 text-center z-40 h-auto bg-white bottom-shadow">
    <div class={`input-box relative ${isEnteringSearch? 'border-entering' : ''}`}>
      <i class={`fa fa-search input-icon ${isEnteringSearch? 'text-accent1 rotate-90' : 'text-dark'}`} aria-hidden="true"></i>
      <form class="input-form" on:submit|preventDefault>
        <input id="search" type="text" placeholder="Search" name="search" autocomplete="off" class={`${isEnteringSearch? 'placeholder-accent1 text-accent1' : 'placeholder-dark text-dark'}`} on:focus={() => (isEnteringSearch = true)} on:blur={() => (isEnteringSearch = false)} on:input={handleInput} bind:value={searchTerm}  />
      </form>
      <svg class="input-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style="enable-background:new 0 0 671 111;" xml:space="preserve">
          <path class={`${isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"></path>
          <path class={`${isEnteringSearch? 'fill-transparent stroke-accent1' : 'fill-none stroke-dark'}`} d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"></path>
      </svg>
      {#if filteredSearchTerms.length > 0 && !suggestionClicked}
      <ul id="output" class="flex flex-col top-16 w-full absolute z-[99] bg-white drop-shadow-lg">
        {#each filteredSearchTerms as suggestion, index}
        <li class={`prediction-item text-dark hover:text-white p-1 hover:bg-accent1 ${index === focusedIndex ? 'bg-accent1' : ''}`} on:click={() => selectSuggestion(suggestion)}>
          {@html suggestion}
        </li>
        {/each}
      </ul>
      {/if}
    </div>

    <!-- Filters -->
    <div class="primary-filter-container mt-3 flex justify-center space-x-2">
      {#each filters as filter}
      <button on:click={() => applyFilters(filter)} class={`primary-filter ${activeFilter === filter ? filter === 'all' ? 'bg-gray-800 text-white' : 'bg-jobs-d text-white' : 'bg-gray-200 text-gray-800'}`}>
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
        <span class="count-circle">{filterCounts[filter]}</span>
      </button>
      {/each}

      <div class="sub-filter-container mt-3 flex justify-center flex-wrap space-x-2">
        {#if activeFilter.length > 0 || activeFilter !== 'all' || searchTerm}
            <button class="text-blue-500 text-sm ml-4 cursor-pointer" on:click={clearFilters}>Clear</button>
        {/if}
      </div>
    </div>

    <p class="filter-count font-semibold my-2 text-sm">{items.filter(item => activeFilter === 'all' || item.type.split(', ').includes(activeFilter)).length} item/s match your filter selection/s.</p>
  </div>

  <!-- Grid Items -->
  <div class="filter-group relative w-full overflow-hidden space-y-4 md:space-y-8">
    <div class="grid-sizer w-full md:w-[48%] lg:w-[31%] my-2 md:my-4 mx-auto md:mx-[1%] gap-3 relative hidden"></div>
    {#each items as item}
    <a href={item.url} class={`grid-item border w-full md:w-[48%] lg:w-[31%] my-2 md:my-4 mx-auto md:mx-[1%] md:float-left gap-3 flex flex-row items-center justify-stretch relative md:block visible overflow-hidden border-jobs-d text-white border-solid rounded transition-all duration-300 shadow-lg hover:shadow-none hover:scale-99`} data-type={item.type} data-date={item.startDate} data-search-terms={item.searchTerms.toLowerCase()} role="link" tabindex="0">
      <div class="w-full relative p-3 md:p-0 flex flex-row md:block">
        {#if item.image}
          <img src={item.image} alt={item.storeName} class="hidden md:block w-full h-auto rounded-t" />
        {/if}
        <div class="w-2/3 md:w-full pr-2 md:p-4 mt-0 text-left md:text-center self-center">
          <h4 class="text-jobs-d product-title text-lg leading-none font-black mt-1 md:mt-3 mb-0">{item.title}</h4>
          <h5 class="text-jobs-d product-store text-sm opacity-85">{item.storeName}</h5>
        </div>
      </div>
    </a>
    {/each}
  </div>
</section>

<style>
  .bottom-shadow::after {
    content: "";
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
</style>