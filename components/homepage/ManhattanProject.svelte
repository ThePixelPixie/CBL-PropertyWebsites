<script>
  import { onMount } from 'svelte';
  //import { tns } from 'tiny-slider';
  import 'tiny-slider/dist/tiny-slider.css';

  let MPCarousels = [
    {
      imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt57b9b989906bb232/hpl-hero-content-Artboard 2.png',
      imagePos: 'object-center',
      supertitle: 'Susan G. Komen',
      title: 'More Than Pink Walk',
      subtitle: 'May 27th, 2024',
      buttontext: 'Join Us!',
      link: '#',
      blockBkg: '',
      textColor: 'text-white',
      column: 'md:items-center justify-center',
      overlayClasses: 'bg-gradient-to-b md:bg-gradient-to-b',
      svgPath: 'M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,197.3C672,203,768,149,864,138.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    },
    {
      imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltaab0570ec6da9a19/hpl-hero-content-Artboard 1.png',
      imagePos: 'object-left-center',
      supertitle: 'Visit',
      title: 'Easter Bunny\'s Garden',
      subtitle: 'at Hamilton Place!',
      buttontext: 'Reserve Photos Here',
      link: '#',
      blockBkg: '',
      textColor: 'text-white',
      column: 'md:items-end justify-center',
      overlayClasses: 'bg-gradient-to-b md:bg-gradient-to-l',
      svgPath: 'M0,128L30,144C60,160,120,192,180,197.3C240,203,300,181,360,192C420,203,480,245,540,245.3C600,245,660,203,720,192C780,181,840,203,900,181.3C960,160,1020,96,1080,80C1140,64,1200,96,1260,122.7C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z',
    },
    {
      imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt58a94655e4d5ae00/hpl-hero-content-Artboard 3.png',
      imagePos: 'object-center',
      supertitle: '',
      title: 'Inventory Insider',
      subtitle: 'In Stock. In Store. In Closet.',
      buttontext: 'See Products',
      link: '#',
      blockBkg: '',
      textColor: 'text-white',
      column: 'md:items-end justify-center',
      overlayClasses: 'bg-gradient-to-b md:bg-gradient-to-l',
      svgPath: 'M0,192L120,192C240,192,480,192,720,165.3C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z',
    },
    {
      imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltf8fedcfafecaa805/hpl-hero-content-Artboard 4.png',
      imagePos: 'object-right-center',
      supertitle: 'Meet Me at the Mall to',
      title: 'See What\'s New',
      subtitle: 'at Hamilton Place!',
      buttontext: 'See New Stores!',
      link: '#',
      blockBkg: '',
      textColor: 'text-white',
      column: 'md:items-start justify-center',
      overlayClasses: 'bg-gradient-to-b md:bg-gradient-to-r',
      svgPath: 'M0,32L120,69.3C240,107,480,181,720,192C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z',
    },
  ];

  let slider = null;

  onMount(async () => {
    const { tns } = await import('tiny-slider/src/tiny-slider');

    slider = tns({
      container: '.mp-slider',
      items: 1,
      autoplay: false,
      controls: true,
      nav: true,
      navPosition: 'bottom',
      mouseDrag: true,
      swipeAngle: false,
      prevButton: '.mp-prev',
      nextButton: '.mp-next',
      speed: 400,
      autoplayButtonOutput: false,
      slideBy: 'page',
    });
  });
</script>

<style>
  .object-left-center {
    object-position: left center;
  }

  .object-right-center {
    object-position: right center;
  }

  @media (max-width: 768px) {
  .carousel-content {
    transform: scale(0.85); /* Adjust the scale as needed */
  }
}
</style>

<div id="ManhattanProject" class="hero relative w-screen p-0 m-0">
    <button class="mp-prev absolute top-1/2 left-1 z-30">
        <svg viewBox="0 0 477.175 477.175">
            <path class="fill-white" d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                    c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"></path>
        </svg>
    </button>
    <button class="mp-next absolute top-1/2 right-1 z-30">
        <svg viewBox="0 0 477.175 477.175">
            <path class="fill-white" d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                    c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path>
        </svg>
    </button>
    <div class="mp-slider w-full h-[800px] overflow-hidden relative">
        {#each MPCarousels as MPCarousel}
        <div class="tns-item relative overflow-hidden w-full h-full">
            <div class={`hero-overlay absolute top-0 left-0 w-full h-full z-10 ${MPCarousel.overlayClasses}`}></div>
            <div class="image-container absolute top-0 left-0 w-full h-full">
                <img src={MPCarousel.imageUrl} alt={MPCarousel.title} class={`carousel-image w-full h-full object-cover ${MPCarousel.imagePos}`} />
            </div>
            <div class={`content-wrapper w-full h-full absolute top-0 left-0 flex flex-col px-20 md:px-28 items-center justify-center overflow-hidden z-20 ${MPCarousel.column}`}>
                <div class={`carousel-content absolute p-0 md:p-3 box-border ${MPCarousel.textColor} ${MPCarousel.blockBkg}`}>
                    <h3 class="mb-2 uppercase leading-tight text-center md:text-left text-clamp-md" style="text-shadow: 1px 1px 1px rgba(0,0,0,.5);">{MPCarousel.supertitle}</h3>
                    <h2 class={`mb-2 text-center md:text-left text-clamp-lg ${MPCarousel.textColor}`} style="text-shadow: 1px 1px 1px rgba(0,0,0,.5);">{MPCarousel.title}</h2>
                    <h3 class="text-center md:text-left text-clamp-sm leading-tight uppercase" style="text-shadow: 1px 1px 1px rgba(0,0,0,.5);">{MPCarousel.subtitle}</h3>
                    <p class="w-full flex flex-row justify-center md:justify-start drop-shadow-2xl"><a href={MPCarousel.link} class="btn-white-solid">{MPCarousel.buttontext}</a></p>
                </div>
            </div>
            <!-- <svg class="w-full h-[55px] block absolute bottom-0 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none" width="200" height="50">
                <path class="fill-white" d={MPCarousel.svgPath}></path>
            </svg> -->
            <!-- <svg class="w-full h-[150px] block absolute bottom-0 z-20" fill="none">
              <path class="fill-white">
                <animate 
                  repeatCount="indefinite"
                  fill="freeze"
                  attributeName="d" dur="20s" 
                  values="
                    M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                    M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
                    M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                    M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z">
                </animate>
              </path>
            </svg> -->
            <!-- <svg class="w-[175%] md:w-full h-9 bg-transparent block absolute bottom-0 rotate-180 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                <path class="fill-white" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
            </svg> -->
        </div>
        {/each}
    </div>
    <!-- <svg class="w-[200%] md:w-full h-48 block absolute bottom-0 left-0 z-20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
      <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 68-18s 58 18 88 18 58-18 98-5 58 18 88 18 v44h-352z" />
      </defs>
      <g>
        <use xlink:href="#gentle-wave" x="55" y="0" fill="rgba(248,249,250, 0.6)"/>
        <use xlink:href="#gentle-wave" x="48" y="2" fill="rgba(248,249,250, 0.6)"/>
        <use xlink:href="#gentle-wave" x="50" y="4" fill="rgba(248,249,250, 1)"/>  
      </g>
    </svg> -->
    <svg class="w-[175%] md:w-full h-9 bg-transparent block relative bottom-[36px] rotate-180 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
      <path class="fill-white" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
  </svg>
</div>