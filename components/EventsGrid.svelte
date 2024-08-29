<script>
  let items = [
    {
      tenant: "Windsor",
      title: "Discover various stylishly chic homecoming dresses perfect for any aesthetic or vibe.",
      description: "Make a trendy statement in dresses",
      date: "08/01-08/31"
    },
    {
      tenant: "Windsor",
      title: "Explore our Back-to-School Outfits",
      description: "Get ready to make a return to school with trendy outfits.",
      date: "08/01-08/31"
    },
    {
      tenant: "Yankee Candle",
      title: "Triple the autumn vibes with our new fall 3-wick candles!",
      description: "Check out these new arrivals!",
      date: "07/29-10/27"
    },
    // {
    //   tenant: "Yankee Candle",
    //   title: "Turn a favorite photo into a fragranced memory to love and share!",
    //   description: "Check out these new arrivals!",
    //   date: "07/29-10/27"
    // },
    // {
    //   tenant: "Yankee Candle",
    //   title: "Escape into nature with our NEW Cottage Getaway Collection",
    //   description: "Check out these new arrivals!",
    //   date: "07/29-10/27"
    // },
    // {
    //   tenant: "Sweet WeePeets Consignment Sale",
    //   title: "Clean out all the clutter & cash in!",
    //   description: "15% Off",
    //   date: "08/10",
    //   date2: "08/17"
    // }
  ];
</script>

<div id="EventsGrid" class="w-full p-12">
    <h2 class="h2-alt px-8 md:px-0 text-center">Upcoming <span class="alt">Events</span></h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 px-4 md:px-0">
        {#each items as item}
        <div class="relative border border-solid border-accent2 bg-white bg-opacity-50 rounded shadow-lg flex flex-col justify-stretch items-center p-4">
            <div class="absolute top-0 left-0 flex gap-2">
                <div class="text-white text-base font-bold py-1 px-2 rounded-br bg-accent2">
                    {item.date || '&nbsp;'}
                </div>
                {#if item.date2}
                <span class="mx-1 font-bold text-accent2 text-3xl">&</span><div class="text-white text-base font-bold py-1 px-2 rounded-br bg-accent2">
                    {item.date2 || '&nbsp;'}
                </div>
                {/if}
            </div>
            <div class="flex flex-col items-start w-full h-full mt-3">
                <h4 class="events-grid alt text-accent2-d50 text-xl line-clamp-1 leading-none mb-0">{item.tenant}</h4>
                <h5 class="text-lg font-semibold mt-0 mb-2 line-clamp-2">{item.title}</h5>
                <p class="text-base font-normal text-dark mb-2 line-clamp-2">{item.description || '&nbsp;'}</p>
            </div>
            <p class="flex mt-auto mb-0"><a href="#" class="btn-go-outline mt-3 text-base">Check it out</a></p>
        </div>
        {/each}
    </div>

    <div class="mt-8 w-full max-w-2xl text-center mx-auto">
        <a class="btn-go-solid" href="#" aria-label="Find out more about this thing">See All <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i></a>
    </div>
</div>