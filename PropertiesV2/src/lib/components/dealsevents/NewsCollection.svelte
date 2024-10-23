<script>
  import { onMount, tick } from "svelte";
  import Isotope from "isotope-layout";

  let items = [
    {
      title: "New Retailer and Restaurant to Open Soon at Hamilton Place",
      date: "2024-01-21",
      url: '/newsentry',
      searchTerms: "vintage stock, Texas Roadhouse, opening, redevelopment"
    },
    {
      title: "New Retail Offerings for the Holiday Season at Hamilton Place",
      date: "2023-10-25",
      url: '/newsentry',
      searchTerms: "hickory farms, dirty dough, gifts, holiday, christmas, specialties"
    },
    {
      title: "Santa Claus is Coming to Hamilton Place",
      date: "2023-10-16",
      url: '/newsentry',
      searchTerms: "santa, holiday, christmas, photos"
    },
    {
      title: "More Than Pink Walk",
      date: "2023-08-21",
      url: '/newsentry',
      searchTerms: "community, breast cancer, susan g. komen, komen"
    },
    {
      title: "CBL PROPERTIES SEES SUSTAINED TENANT DEMAND AND A STRONG REDEVELOPMENT PROJECT PIPELINE",
      date: "2023-07-31",
      url: '/newsentry',
      searchTerms: "redevelopment, openings, growth, real estate, properties, retail"
    },
    {
      title: "CBL PROPERTIES ANNOUNCES ADDITION OF CRUNCH FITNESS AND THREE NEW RESTAURANTS AT HAMILTON PLACE",
      date: "2023-06-14",
      url: '/newsentry',
      searchTerms: "development, opening, crunch fitness, malones, dave and busters, community pie"
    },
    {
      title: "Hamilton Place Announces Opening of J.Crew Factory",
      date: "2023-05-31",
      url: '/newsentry',
      searchTerms: "apparel, opening, j crew factory"
    },
    {
      title: "Nordstrom Rack Sets Opening Date at The Terrace at Hamilton Place",
      date: "2023-05-31",
      url: '/newsentry',
      searchTerms: "apparel, opening, new stores, nordstrom, nordstrom rack"
    },
    {
      title: "Hamilton Place Hosting Second Annual Black-Owned Business Expo",
      date: "2023-05-02",
      url: '/newsentry',
      searchTerms: "black owned business, business expo, inclusion, dei, community, retail"
    },
    {
      title: "Promoting Literacy for Hamilton County",
      date: "2022-03-01",
      url: '/newsentry',
      searchTerms: "hamilton county, community, literacy, children"
    }
  ];

  let filters = ['all', ...[...new Set(items.map(item => new Date(item.date).getFullYear()))].sort((a, b) => b - a)], activeFilter = 'all';
  let itemCounts = {}, currentItemCount = items.length;
  let allSearchTerms = [], filteredSearchTerms = [], isotope;
  let searchTerm = '', focusedIndex = -1, suggestionClicked = false;
  let isEnteringSearch = false;

  function sortByDate(items) {
    return items.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function formatDate(date) {
    const options = { month: "short", day: "numeric", year: "numeric" };
    let formattedDate = new Date(date).toLocaleDateString("en-US", options);

    formattedDate = formattedDate.replace(/^(\w+)\b/, "$1.");

    return formattedDate;
  }

  $: {
    filters.forEach(filter => {
      itemCounts[filter] = filter === 'all' ? items.length : items.filter(item => new Date(item.date).getFullYear() === parseInt(filter)).length;
    });
    currentItemCount = isotope?.filteredItems?.length || items.length;
  }

  $: {
    allSearchTerms = [...new Set(items.flatMap(item => item.searchTerms.split(',').map(term => term.trim().toLowerCase())))].sort();
    filteredSearchTerms = searchTerm.length > 0 && !suggestionClicked
      ? allSearchTerms.filter(term => term.includes(searchTerm.toLowerCase())).slice(0, 5)
      : [];
  }

  const scrollToTop = () => {
    const section = document.getElementById('NewsIsotopeGrid');
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const applyFilters = (filter = 'all') => {
    activeFilter = filter;
    
    if (isotope) {
      isotope.arrange({
        filter: function(itemElem) {
          const itemYear = parseInt(itemElem.dataset.type); // Use data-type which now holds the year
          const typeMatch = activeFilter === 'all' || itemYear === parseInt(activeFilter);
          const searchMatch = !searchTerm || itemElem.dataset.searchTerms.includes(searchTerm.toLowerCase());
          return typeMatch && searchMatch;
        }
      });

      currentItemCount = isotope.filteredItems.length;
      scrollToTop();
    }
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
      layoutMode: "vertical",
      getSortData: {
        date: "[data-date]",
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

    return () => isotope?.destroy();
  });

  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      focusedIndex = (focusedIndex + 1) % returnList.length;
    } else if (e.key === "ArrowUp") {
      focusedIndex = (focusedIndex - 1 + returnList.length) % returnList.length;
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      selectPrediction(filteredTerms[focusedIndex]);
    }
  }

  function selectPrediction(prediction) {
    search = prediction;
    returnList = [];
    focusedIndex = -1;
  }

  function handleFocus() {
    isEnteringSearch= true;
  }

  function handleBlur() {
    isEnteringSearch= false;
  }

  function handleGoIconClick() {
    const searchForm = document.querySelector(".search-form");
    searchForm.submit();
    handleBlur();
  }
</script>

<section id="NewsIsotopeGrid" class="grid-container w-full px-4 pb-24 overflow-visible relative">
  <div class="sticky inset-0 pb-4 pt-8 md:pt-18 px-0 mb-8 text-center z-40 h-auto bg-white bottom-shadow">

    <div class={`input-box relative ${isEnteringSearch ? 'border-entering' : ''}`}>
        <i class={`fa fa-search input-icon ${isEnteringSearch? 'text-news-d rotate-90' : 'text-dark'}`} aria-hidden="true"></i>
        <form class="input-form" on:submit|preventDefault>
        <input id="search" type="text" placeholder="Search" name="search" autocomplete="off" class={`${isEnteringSearch? 'placeholder-news-d text-news-d' : 'placeholder-dark text-dark'}`} on:focus={handleFocus} on:blur={handleBlur} on:input={handleInput} on:keydown={handleKeyDown} bind:value={searchTerm}  />
        </form>
        <svg class="input-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style="enable-background:new 0 0 671 111;" xml:space="preserve">
            <path class={`${isEnteringSearch? 'fill-transparent stroke-news-d' : 'fill-none stroke-dark'}`} d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"></path>
            <path class={`${isEnteringSearch? 'fill-transparent stroke-news-d' : 'fill-none stroke-dark'}`} d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"></path>
        </svg>
        {#if filteredSearchTerms.length > 0 && !suggestionClicked}
        <ul id="output" class="flex flex-col top-16 w-full absolute z-[99] bg-white drop-shadow-lg">
        {#each filteredSearchTerms as suggestion, index}
        <li class={`prediction-item text-dark hover:text-white p-1 hover:bg-news-d ${index === focusedIndex ? 'bg-white' : ''}`} on:click={() => selectSuggestion(suggestion)}>
            {@html suggestion}
        </li>
        {/each}
        </ul>
        {/if}
    </div>

    <!-- Filters: Correct handling of year-based filters -->
    <div class="primary-filter-container mt-3 flex justify-center space-x-2">
      {#each filters as filter}
      <button on:click={() => applyFilters(filter)} class={`primary-filter ${activeFilter === filter ? filter === 'all' ? 'bg-gray-800 text-white' : 'bg-news-d text-white' : 'bg-gray-200 text-gray-800'}`}>
          {filter === 'all' ? 'All' : filter} <!-- No charAt or uppercasing needed -->
          <span class="count-circle">{itemCounts[filter] ?? 0}</span>
      </button>
      {/each}

      <div class="sub-filter-container mt-3 flex justify-center flex-wrap space-x-2">
        {#if activeFilter.length > 0 || activeFilter !== 'all' || searchTerm}
            <button class="text-blue-500 text-sm ml-4 cursor-pointer" on:click={clearFilters}>Clear</button>
        {/if}
      </div>
    </div>

    <p class="filter-count font-semibold my-2 text-sm">{currentItemCount} item/s match your filter selection/s.</p>
  </div>

  <!-- Grid Items -->
  <div class="filter-group relative w-full max-w-screen-lg mx-auto overflow-hidden">
    {#each items as item}
    <a href={item.url} class="grid-item border w-full my-2 gap-3 flex flex-row items-center justify-stretch relative visible overflow-hidden border-news bg-white text-news-d border-solid rounded transition-all duration-300 shadow-lg hover:shadow-none hover:scale-99" data-type={new Date(item.date).getFullYear()} data-search-terms={item.searchTerms.toLowerCase()} tabindex="0" role="link">
        <div class="w-full relative p-3 flex flex-row">
          <div class="w-full pr-2 mt-3 text-left self-center">
            <h4 class={`product-title text-lg leading-none font-black mt-0 mb-0`}>{item.title}</h4>
            <p class="product-sum text-base mt-3 mb-0 overflow-hidden">{formatDate(item.date)}</p>
          </div>
        </div>
      </a>
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
</style>