<script>
  import { onMount } from 'svelte';
  
  let slider;

  onMount(async () => {
    const { tns } = await import('tiny-slider/src/tiny-slider');

    slider = tns({
      container: '.brand-slider-alt1',
      loop: true,
      items: 2,
      edgePadding: 50,
      speed: 400,
      autoplay: false,
      mouseDrag: true,
      controls: true,
      prevButton: '.prev-eat',
      nextButton: '.next-eat',
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
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt1a80312ebe5cb271/SarkuJapan_1903.png',
            description: 'Link to Sarku Japan',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt654204c0f3d5650b/PetrosLogo.png',
            description: 'Link to Petro\'s',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltcb2d6f0082cff116/taco-mamacita-logo-8.png',
            description: 'Link to Taco Mamacita',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt7a36ca8bcbcda121/j.alexanders_restaurant.jpg',
            description: 'Link to j. Alexander\'s',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltea61c8bcbd7614b8/PFChangsLogo.png',
            description: 'Link to P.F. Chang\'s',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt91b3e8d231d2481e/RedRobin_087_Logo_GB&Brews_RGB-01.jpg',
            description: 'Link to Red Robin',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltd686bcebd7a5725d/RodizioGrill_logo.png',
            description: 'Link to Rodizio Grill',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt2ab4c3a5aed2cff0/Texas_Roadhouse_Grill_8830.jpg',
            description: 'Link to Texas Roadhouse',
            link: '#'
        },
        {
            imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt5d8518763c4d143d/TheCheesecakeFactory_176.png',
            description: 'Link to Cheesecake Factory',
            link: '#'
        },
    ];
</script>

<div id="BrandBrouhaha" class="my-0 px-0 pt-16 pb-8 mx-auto relative">
    <h3 class="eat px-12 pt-12 text-center">Featured dining at <span class="alt-eat">Hamilton Place</span><span>.</span></h3>
    <div class="brand-slider-alt1 flex w-full flex-row relative justify-around gap-3 z-10">
        {#each columns as column }
            <div class="brand-img m-0 rounded overflow-hidden p-1 shadow-lg" style="background-color: #fff;">
                <a class="relative block h-100 w-full aspect-w-1 aspect-h-1 overflow-hidden" href={column.link} aria-label="Instagram-link...">
                    <img class="w-full h-full object-contain object-center" src={column.imageUrl} alt={column.description} >
                </a>
            </div>
        {/each}
    </div>
    <div id="navButtons" class="mt-12 mx-auto relative z-20 w-full md:w-2/3 flex flex-row justify-center items-center gap-4">
        <button class="prev-eat h-11 w-11 flex items-center justify-center"><i class="far fa-arrow-alt-circle-left fa-2x"></i></button>
        <a class="btn-eat-solid leading-none flex items-center" href="#" aria-label="Find out more about this thing">See All <i class="fas fa-arrow-right ml-2 leading-none" aria-hidden="true"></i></a>
        <button class="next-eat h-11 w-11 flex items-center justify-center"><i class="far fa-arrow-alt-circle-right fa-2x"></i></button>
    </div>
</div>