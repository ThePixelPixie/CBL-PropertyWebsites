<script>
  import { onMount } from 'svelte';
  //import 'tiny-slider/dist/tiny-slider.css'; // Import the Tiny Slider CSS
  //import { tns } from 'tiny-slider';

  let slider; // Declare the slider variable

  onMount(async () => {
    const { tns } = await import('tiny-slider/src/tiny-slider'); // Dynamically import Tiny Slider

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

<div id="BrandBrouhaha" class="my-8 px-0 py-28 mx-auto relative">
    <h2 class="text-center">Find Your Favorite Brands At...</h2>
    <div class="brand-slider flex w-full flex-row relative justify-around gap-3 z-10">
        {#each columns as column }
            <div class="brand-img m-0 rounded overflow-hidden p-1" style="background-color: #fff;">
                <a class="relative block h-100 w-full aspect-w-1 aspect-h-1 overflow-hidden" href={column.link} aria-label="Instagram-link...">
                    <img class="w-full h-full object-contain object-center" src={column.imageUrl} alt={column.description} >
                </a>
            </div>
        {/each}
    </div>
    <div id="navButtons" class="h-11 relative z-20 w-full flex flex-row justify-center gap-4">
        <button class="prev"><i class="far fa-arrow-alt-circle-left fa-2x"></i></button>
        <button class="next"><i class="far fa-arrow-alt-circle-right fa-2x"></i></button>
    </div>
</div>