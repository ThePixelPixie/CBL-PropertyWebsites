<script>
  import { onMount } from 'svelte';
  
  let slider;

  onMount(async () => {
    const { tns } = await import('tiny-slider/src/tiny-slider');

    slider = tns({
      container: '.brand-slider',
      loop: true,
      items: 2,
      edgePadding: 50,
      speed: 400,
      autoplay: false,
      mouseDrag: true,
      controls: true,
      prevButton: '.prev',
      nextButton: '.next',
      nav: false,
      autoplayButtonOutput: false,
      responsive: {
        768: {
          items: 4,
          edgePadding: 30,
        },
        992: {
          items: 6,
          edgePadding: 75,
        }
      }
    });
  });

  let columns = [
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltb5b6fe3bc1f690f1/Altard_State_2137043289.jpg',
            description: 'Link to Altar\'d State',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltc4fbeaf2dfd28b84/Aerie_logo_alone_green.jpg',
            description: 'Link to Aerie',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt05c99b1773044bcd/Buckle_755.png',
            description: 'Link to Buckle',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt0a571c3ceb1f8c69/R_R_logo-01.png',
            description: 'Link to Rose & Remington',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltf51309b283138d44/H&amp;M_10423.png',
            description: 'Link to H&M',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blte771c9f15ff34c78/Miniso Logo Red.png',
            description: 'Link to Mini So',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt30c9fdfff550a194/sephora-comb-on left-black_010623@2x.png',
            description: 'Link to Sephora',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltf6a2f0b8fff1ef48/logo_PalmettoMoon.jpg',
            description: 'Link to Palmetto Moon',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt10a2a22101060a78/journeys.jpg',
            description: 'Link to Journeys',
            link: '#'
        },
    ];
</script>

<div id="BrandBrouhaha" class="my-0 px-0 pt-28 pb-8 mx-auto relative">
    <h3 class="shop text-center">Find Your Favorite Brands</h3>
    <div class="brand-slider flex w-full flex-row relative justify-around gap-3 z-10">
        {#each columns as column }
            <div class="brand-img m-0 rounded overflow-hidden p-1 shadow-lg" style="background-color: #fff;">
                <a class="relative block h-100 w-full aspect-w-1 aspect-h-1 overflow-hidden" href={column.link} aria-label="Instagram-link...">
                    <img class="w-full h-full object-contain object-center" src={column.imageUrl} alt={column.description} >
                </a>
            </div>
        {/each}
    </div>
    <div id="navButtons" class="mt-12 mx-auto relative z-20 w-full md:w-2/3 flex flex-row justify-center items-center gap-4">
        <button class="prev h-11 w-11 flex items-center justify-center"><i class="far fa-arrow-alt-circle-left fa-2x"></i></button>
        <a class="btn-shop-solid leading-none flex items-center" href="#" aria-label="Find out more about this thing">See All <i class="fas fa-arrow-right ml-2 leading-none" aria-hidden="true"></i></a>
        <button class="next h-11 w-11 flex items-center justify-center"><i class="far fa-arrow-alt-circle-right fa-2x"></i></button>
    </div>
</div>