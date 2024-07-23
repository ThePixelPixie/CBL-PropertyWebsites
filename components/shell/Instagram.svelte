<script>
  import { onMount } from 'svelte';
  import 'tiny-slider/dist/tiny-slider.css'; // Import the Tiny Slider CSS

  let slider;

  onMount(async () => {
    const { tns } = await import('tiny-slider/src/tiny-slider'); // Dynamically import Tiny Slider

    slider = tns({
      container: '.insta-slider',
      loop: true,
      items: 1,
      speed: 400,
      autoplay: true,
      controls: false,
      nav: false,
      edgePadding: 0,
      autoplayButtonOutput: false,
      responsive: {
        768: {
          items: 4
        },
        992: {
          items: 6
        }
      }
    });
  });
</script>

<style>
  .insta-img::before {
    content: '';
    float: left;
    padding-top: 100%;
  }

  .insta-img a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(33, 33, 33, 0.6);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  .insta-img a img {
    object-fit: cover;
    object-position: center;
  }
</style>

<div class="insta-slider -top-8 flex w-full flex-row relative gap-1 bg-white justify-around z-10">
    {#each [
        'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt4e85df5eb20fcbff/448569687_779346564008210_3416760205215697120_n.jpg',
        'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltf118d1f860b939a0/448694325_315115225005724_6301371939379897393_n.jpg',
        'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltaca7f30ffc87deaf/448434590_433182022901291_2478139411441097841_n.jpg',
        'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt8cb276b3fd65da73/448262650_1436791843632324_1706182936115211127_n.jpg',
        'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltbe057369fe5c8f4f/448224291_311666071899966_8950184415912037048_n.jpg',
        'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltef1fd1c370c2a960/448223278_1589155425355108_2571030639166550669_n.jpg',
        'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt5cae3b88c333f942/447116130_1228206198345472_1331850285357279770_n.jpg',
        'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt7f158c86a1dced47/446458779_432684672950595_9178486864276501501_n.jpg'
    ] as imgSrc}
        <div class="insta-img m-0">
            <a class="relative block h-100 w-full aspect-w-1 aspect-h-1" href="#" aria-label="Instagram-link...">
                <img class="w-full h-auto object-cover object-center" src={`${imgSrc}`} alt="...">
                <span aria-hidden="true"><i class="fa-solid fa-square-up-right text-white"></i></span><span class="sr-only">(opens in a new tab)</span>
            </a>
        </div>
    {/each}
</div>

<svg class="w-[175%] md:w-full h-9 bg-transparent block relative -top-16 rotate-180 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
    <path class="fill-dark-d20" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
</svg>