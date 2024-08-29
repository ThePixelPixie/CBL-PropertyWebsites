<script>
  import { onMount } from "svelte";
  import Isotope from "isotope-layout";

  let items = [
    {
      image: "https://via.placeholder.com/300x200",
      title: "Amazing Featured Deal #1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus, nisi tincidunt imperdiet porttitor, erat est vulputate felis, non iaculis leo justo sed augue. Mauris ultrices lorem at convallis varius. Donec vitae nunc turpis. Maecenas suscipit placerat orci, id congue velit consequat et. Aenean rhoncus eros ac sem aliquam condimentum. Vivamus id venenatis odio. Mauris vitae volutpat ligula. Pellentesque rhoncus nibh turpis, eget laoreet felis dignissim sit amet. Donec tincidunt urna sit amet sapien aliquet facilisis.",
      startDate: "2024-08-20",
      endDate: "2024-08-30",
      featured: true,
      type: "shop",
      searchTerms: "Accessories, Gifts, Apparel"
    },
    {
      image: "https://via.placeholder.com/1920x1080",
      title: "Exciting Not-Featured Event with an image",
      description: "Don't miss this amazing event.",
      startDate: "2024-09-05",
      endDate: "2024-09-10",
      featured: false,
      type: "eat",
      searchTerms: "Entertainment, Music, Concert"
    },
    {
      image: "",
      title: "Super Deal",
      description: "An incredible deal just for you.",
      startDate: "2024-09-01",
      endDate: "2024-09-07",
      featured: false,
      type: "shop",
      searchTerms: "workshop, supermarket, grocery, eating"
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Amazing Event",
      description: "This is a great deal on something.",
      startDate: "2024-08-20",
      endDate: "2024-08-30",
      featured: false,
      type: "eat",
      searchTerms: "restaurant, boutique, holiday, clothing",
    },
    {
      image: "https://via.placeholder.com/300x400",
      title: "Exciting Featured Deal #2",
      description: "Don't miss this amazing event.",
      startDate: "2024-09-05",
      endDate: "2024-09-10",
      featured: true,
      type: "shop",
      searchTerms: "black pants, shoes, makeup",
    },
    {
      image: "",
      title: "Super Deal",
      description: "An incredible deal just for you.",
      startDate: "2024-09-01",
      endDate: "2024-09-07",
      featured: false,
      type: "shop",
      searchTerms: "Accessories, Gifts, Apparel",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Amazing Featured Event #3",
      description: "This is a great deal on something.",
      startDate: "2024-08-20",
      endDate: "2024-08-30",
      featured: true,
      type: "eat",
      searchTerms: "Entertainment, Music, Concert",
    },
    {
      image: "https://via.placeholder.com/1200x800",
      title: "Exciting Event",
      description: "Don't miss this amazing event.",
      startDate: "2024-09-05",
      endDate: "2024-09-10",
      featured: false,
      type: "eat",
      searchTerms: "workshop, supermarket, grocery, eating, santa",
    },
    {
      image: "",
      title: "Super Deal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus, nisi tincidunt imperdiet porttitor, erat est vulputate felis, non iaculis leo justo sed augue. Mauris ultrices lorem at convallis varius. Donec vitae nunc turpis. Maecenas suscipit placerat orci, id congue velit consequat et. Aenean rhoncus eros ac sem aliquam condimentum. Vivamus id venenatis odio. Mauris vitae volutpat ligula. Pellentesque rhoncus nibh turpis, eget laoreet felis dignissim sit amet. Donec tincidunt urna sit amet sapien aliquet facilisis.",
      startDate: "2024-09-01",
      endDate: "2024-09-07",
      featured: false,
      type: "shop",
      searchTerms: "restaurant, back to school, boutique, holiday, clothing",
    },
    {
      image: "",
      title: "Super Deal",
      description: "An incredible deal just for you.",
      startDate: "2024-09-01",
      endDate: "2024-09-07",
      featured: false,
      type: "shop",
      searchTerms: "red shirt, lingerie, barber, beauty",
    },
    {
      image: "https://via.placeholder.com/600x700",
      title: "Exciting Not-Featured Event with an image",
      description: "Don't miss this amazing event.",
      startDate: "2024-09-05",
      endDate: "2024-09-10",
      featured: false,
      type: "eat",
      searchTerms: "pizza, hamburger, popcorn, saddlery",
    },
    {
      image: "",
      title: "Super Deal",
      description: "An incredible deal just for you.",
      startDate: "2024-09-01",
      endDate: "2024-09-07",
      featured: false,
      type: "shop",
      searchTerms: "pub, kiosk, dresses, outlet",
    },
    {
      image: "https://via.placeholder.com/300x300",
      title: "Amazing Event",
      description: "This is a great event on something.",
      startDate: "2024-08-20",
      endDate: "2024-08-30",
      featured: false,
      type: "eat",
      searchTerms: "Accessories, Gifts, Apparel",
    },
    {
      image: "https://via.placeholder.com/300x100",
      title: "Amazing Deal",
      description: "This is a great deal on something.",
      startDate: "2024-08-20",
      endDate: "2024-08-30",
      featured: false,
      type: "shop",
      searchTerms: "Entertainment, Music, Concert",
    }
  ];

  let carouselItems = [];
  let gridItems = [];
  let isotope;
  let activeFilter = 'All';
  let searchTerm = '';
  let allSearchTerms = [];
  let filteredSearchTerms = [];
  let showSuggestions = false;

  function collectSearchTerms() {
  allSearchTerms = [];
  items.forEach(item => {
    const terms = item.searchTerms.split(',').map(term => term.trim().toLowerCase());
    allSearchTerms.push(...terms);
  });
  allSearchTerms = [...new Set(allSearchTerms)]; // Remove duplicates
}

function filterSearchTerms() {
    if (searchTerm.length > 0) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        filteredSearchTerms = allSearchTerms.filter(term =>
            term.startsWith(lowerSearchTerm)
        );
        showSuggestions = filteredSearchTerms.length > 0;
    } else {
        filteredSearchTerms = [];
        showSuggestions = false;
    }
}

  function handleSearchInput() {
  filterSearchTerms();
  applyFilters();
}

function handleSuggestionClick(suggestion) {
    // Ensure the search box updates correctly
    searchTerm = suggestion; // Update the input field with the selected suggestion
    showSuggestions = false; // Hide the suggestions
    applyFilters(); // Apply the filters to update the grid
}

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

  function applyFilters() {
    let filterString = `*[data-type${activeFilter === 'All' ? '' : `="${activeFilter}"`}]`;
    if (searchTerm) {
      filterString += `[data-search-terms*="${searchTerm.toLowerCase()}"]`;
    }
    isotope.arrange({ filter: filterString });
  }

  function filterItems(type) {
    activeFilter = type;
    applyFilters();
    scrollToTop();
  }

  function scrollToTop() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(async () => {
    carouselItems = sortByDate(items.filter((item) => item.featured));
    gridItems = sortByDate(items.filter((item) => !item.featured));
    collectSearchTerms();

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

    // After the carousel is initialized, set up Isotope
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
        opacity: 0
      },
      visibleStyle: {
        opacity: 1
      }
    });
    
    // Ensure the initial filter is applied
    applyFilters();
});
</script>

<section id="DealsEventsIstopeGrid" class="md:grid md:grid-cols-2 overflow-visible relative mb-40">
  <!-- Left Side: Carousel -->
  <div class="carousel-container md:sticky md:top-0 h-screen">
    <div id="DealEventCarousel" class="w-full h-screen">
      {#each carouselItems as item}
        <figure class="relative w-full h-full">
          <img src={item.image} alt={item.title} class="object-cover h-full w-full" />
          <div class="absolute top-28 left-16 w-20 text-center h-10 bg-blue-500 text-white p-2 rounded">{item.type}</div>
          <div class="absolute bottom-44 left-4 right-4 md:px-12 text-white slide-up text-container">
            <h2 class="text-xl font-bold">{item.title}</h2>
            <p class="line-clamp-2">{item.description}</p>
            <p class="text-sm">{formatDateRange(item.startDate, item.endDate)}</p>
            <button class="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Check it out</button>
          </div>
        </figure>
      {/each}
    </div>
  </div>

  <!-- Right Side: Grid -->
  <div class="grid-container relative pb-96 px-8 md:px-20 bg-white">
    <!-- Button Group for Filtering -->
    <div class="col-span-2 mb-8 -ml-1 -mr-1 text-center sticky px-8 pb-8 pt-28 top-0 bg-white z-40">
      <div class="relative">
  <input 
    type="text" 
    placeholder="Search..." 
    class="w-full p-2 border rounded" 
    bind:value={searchTerm} 
    on:input={handleSearchInput} 
    on:focus={() => (showSuggestions = true)} 
    on:blur={() => setTimeout(() => (showSuggestions = false), 100)}
  />
  {#if showSuggestions}
    <div id="search-suggestions" class="absolute left-0 right-0 bg-white border rounded mt-1 max-h-52 overflow-y-auto z-50">
      {#each filteredSearchTerms as suggestion}
        <button 
  class="px-4 py-2 cursor-pointer hover:bg-gray-200" 
  on:click={() => handleSuggestionClick(suggestion)}>
  {suggestion}
</button>
      {/each}
    </div>
  {/if}
</div>
      <button on:click={() => filterItems('All')} class={`py-2 px-4 rounded z-40 ${activeFilter === 'All' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>All</button>
      <button on:click={() => filterItems('eat')} class={`py-2 px-4 rounded ml-4 z-40 ${activeFilter === 'eat' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>Eat</button>
      <button on:click={() => filterItems('shop')} class={`py-2 px-4 rounded ml-4 z-40 ${activeFilter === 'shop' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>Shop</button>
    </div>

    <div class="filter-group block relative after:table after:clear-both">
      <div class="grid-sizer w-full md:w-[48%] mx-[1%] my-4 md:float-left"></div>
      {#each gridItems as item}
        <div class={`grid-item box-border w-full md:w-[48%] mx-[1%] my-4 md:float-left ${item.type === 'shop' ? 'bg-red-500' : 'bg-blue-500'}`} data-type={item.type} data-date={item.startDate} data-search-terms={item.searchTerms.toLowerCase()}>
          <div class="w-full relative">
            <!-- Image: Display on Desktop Only -->
            {#if item.image}
              <img src={item.image} alt={item.title} class="hidden md:block w-full h-auto" />
            {/if}
            <!-- Content: Full Width on Mobile, Masonry Layout on Desktop -->
            <div class="md:p-4 p-2 text-white">
              <h4 class="font-bold leading-none">{item.title}</h4>
              <p class="line-clamp-2">{item.description}</p>
              <p class="text-sm">{formatDateRange(item.startDate, item.endDate)}</p>
            </div>
          </div>
        </div>
      {/each}
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
</style>