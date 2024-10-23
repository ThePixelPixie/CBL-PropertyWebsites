<script>
    export let columns = [
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt05c99b1773044bcd/Buckle_755.png',
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltc4fbeaf2dfd28b84/Aerie_logo_alone_green.jpg',
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt0a571c3ceb1f8c69/R_R_logo-01.png',
        }
    ];
</script>

<section id="TenantAlsoLike" class="w-full mx-auto px-4 pt-12 md:pt-4 pb-16">
    <h2 class="h2-alt text-center">You Might Also Like<span>...</span></h2>
    <div class="flex flex-row flex-wrap md:flex-nowrap gap-3 md:gap-4 w-full md:w-1/2 mx-auto justify-center">
        {#each columns as column}
            <div class="w-2/5 md:w-1/3 max-w-[250px] p-2 rounded-lg shadow-xl" style="background-color: #fff;">
                <div class="w-full aspect-w-1 aspect-h-1">
                    <img src={column.imageUrl} alt={column.title} class="w-full object-contain object-center rounded-md" />
                </div>
            </div>
        {/each}
    </div>
</section>