<script>
    export let columns = [
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt1dcd3857cf88df1d/aloft-hotels-logo.png',
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt0e1809698d6c5086/crunch-fitness-logo.png',
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt8a5fb9d91ff1f29b/dave-and-busters-logo.png',
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltce6b4c55e4d92003/regal-logo.png',
        }
    ];
</script>

<div id="AlsoLike" class="w-full mx-auto px-4 pt-12 md:pt-4 pb-16 flex flex-col justify-center">
    <h3 class="go px-12 pt-12 text-center">More to do at <span class="alt-go">Hamilton Place</span><span>.</span></h3>
    <div class="flex flex-row flex-wrap md:flex-nowrap gap-3 md:gap-4 w-full md:w-1/2 mx-auto justify-center">
        {#each columns as column}
            <div class="w-2/5 md:w-1/3 p-2 rounded-lg shadow-xl" style="background-color: #fff;">
                <div class="w-full aspect-w-1 aspect-h-1">
                    <img src={column.imageUrl} alt={column.title} class="w-full object-contain object-center rounded-md" />
                </div>
            </div>
        {/each}
    </div>

    <a class="btn-go-solid mt-12 mx-auto w-auto max-w-24 drop-shadow-lg" href="#" aria-label="Find out more about this thing">See All <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i></a>
</div>