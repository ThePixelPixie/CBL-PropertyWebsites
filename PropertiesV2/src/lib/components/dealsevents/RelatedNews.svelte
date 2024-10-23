<script>
  import { slide } from 'svelte/transition';

  let showAll = false;
  let items = [
    {
      type: "deal",
      title: "Save 💵 on these Altar'd State products! with Inventory Insider",
      description: "Unlock a world of possibilities with INVENTORY INSIDER – not only can you explore thousands of products , but you can also snag incredible deals to keep more cash in your pocket. Discover the savings today!",
      date: "07/26-07/29"
    },
    {
      type: "enjoy",
      title: "Tax-Free Weekend",
      description: "Tennessee Tax-Free weekend begins at 12:01 a.m. on Friday, July 26 and ends Sunday, July 28 at 11:59 p.m. During this time, clothing, school supplies, computers and other qualifying electronic devices may be purchased tax-free. Certain price restrictions apply.",
      date: "07/26-07/29"
    },
    {
      type: "deal",
      title: "Bogo 50%",
      description: "",
      date: "07/26-08/1"
    },
    {
      type: "deal",
      title: "50% off a single item",
      description: "during your birthday month",
      date: ""
    },
    {
        type: "enjoy",
        title: "The Peach Truck Tour",
        description: "Pre-order your fresh, tree-ripened peaches today!",
        date: "08/18"
    },
    {
      type: "deal",
      title: "Military Discount",
      description: "15% Off",
      date: ""
    }
  ];

  const getBorderClass = (type) => {
    return type === 'deal' ? 'border-shop-d' : 'border-accent2';
  }

  const getTextClass = (type) => {
    return type === 'deal' ? 'text-shop-d' : 'text-accent2';
  }

  const getBackgroundClass = (type) => {
    return type === 'deal' ? 'bg-shop-d' : 'bg-accent2';
  }
</script>

<div id="DealsEvent" class="w-full pb-12">

  <h2 class="h2-alt px-8 md:px-0 text-center">More News from <span class="alt">Hamilton Place</span></h2>

  <div class="w-full md:w-1/2 lg:w-1/3 m-auto relative text-center mt-12 px-4 md:px-0">
    <div class="items mb-16 w-full text-left relative">
      {#each items as item, index}
        {#if index <= 1 || showAll}
          <div class={`border ${getBorderClass(item.type)} bg-white bg-opacity-50 border-solid border rounded my-5 p-3 shadow-lg flex flex-row items-center justify-stretch relative`} transition:slide={{ duration: 500 }}>
            <div class={`absolute top-0 left-0 ${getBackgroundClass(item.type)} text-white text-xs font-bold py-1 px-2 rounded-br`}>
              {item.type === 'deal' ? 'Deal' : 'enjoy'}
            </div>
            <div class="w-2/3 pr-2 mt-3 self-center">
              <h3 class={`alt ${getTextClass(item.type)} line-clamp-1 md:line-clamp-none md:truncate`}>{item.title}</h3>
              <p class="text-base font-normal m-0 p-0 line-clamp-1 md:line-clamp-none md:truncate">{@html item.description || '&nbsp;'}</p>
              <p class="text-sm font-semibold mx-0 mt-1 mb-0 p-0">{@html item.date || '&nbsp;'}</p>
            </div>
            <a href="#" class={`btn-${item.type}-solid my-0 ml-auto flex-grow text-center`}>Check it out</a>
          </div>
        {/if}
        {#if index === 2 && !showAll}
          <div class="partially-visible opacity-50 h-16 relative">
            <div class={`border ${getBorderClass(item.type)} bg-white bg-opacity-50 border-solid border rounded my-5 p-3 shadow-lg flex flex-row items-center justify-stretch relative`}>
              <div class={`absolute top-0 left-0 ${getBackgroundClass(item.type)} text-white text-xs font-bold py-1 px-2 rounded-br`}>
                {item.type === 'deal' ? 'Deal' : 'enjoy'}
              </div>
              <div class="w-2/3 pr-2 mt-3 self-center">
                <h3 class={`alt ${getTextClass(item.type)} line-clamp-1 md:line-clamp-none md:truncate`}>{item.title}</h3>
                <p class="text-base font-normal m-0 p-0 line-clamp-1 md:line-clamp-none md:truncate">{@html item.description || '&nbsp;'}</p>
                <p class="text-sm font-semibold mx-0 mt-1 mb-0 p-0">{@html item.date || '&nbsp;'}</p>
              </div>
              <a href="#" class={`btn-${item.type}-solid my-0 ml-auto flex-grow text-center`} title="{item.title}" aria-label="{item.title}">Check it out</a>
            </div>
          </div>
        {/if}
      {/each}
    </div>

    <div class="w-full flex flex-col">

      {#if !showAll}
        <button on:click={() => showAll = true} class="btn-1-solid m-auto">Show More</button>
      {/if}

      <a href="/dealsevents" title="See All Deals" class="btn-shop-solid mx-auto mt-12 block" aria-label="See all Deals" target="_blank">See All Deals</a>
    </div>
  </div>
</div>

<style>
  .partially-visible {
    -webkit-mask-image: linear-gradient(to bottom, white 50%, transparent 100%);
    mask-image: linear-gradient(to bottom, white 50%, transparent 100%);
  }
</style>