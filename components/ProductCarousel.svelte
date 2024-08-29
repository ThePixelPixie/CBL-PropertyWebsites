<script>
  import { onMount } from 'svelte';
  //import { tns } from 'tiny-slider/src/tiny-slider';

  let slider; // Declare the slider variable

  let columns = [
      {
          imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltf6033e98afa972e0/001125_WELLINGTON-A161_PINK_00.webp',
          title: 'Gracelynn Smocked Floral Skirt',
          description: 'This vibrant skirt features a double layer of cascading floral fabric, creating a mesmerizing flow with every step. The comfortable smocked waistband flatters your figure, while the playful floral pattern adds a touch of whimsy to your look.',
          tenant: 'Altar\'d State',
          link: '#'
      },
      {
          imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltc2859226cff082d8/https___www.altardstate.com_dw_image_v2_BDDX_PRD_on_demandware.static_-_Sites-as_catalog_default_dwc0af22e0_image_002076_504441-1_WHITE_01.JPG_large.jpg',
          title: 'Juliet Hair Bow',
          description: 'Add an elegant touch to any hairstyle with this adorable tulle bow with pearl accents!',
          tenant: 'Altar\'d State',
          link: '#'
      },
      {
          imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltf6fc28e939c0388f/https___www.altardstate.com_dw_image_v2_BDDX_PRD_on_demandware.static_-_Sites-as_catalog_default_dw07327170_image_001125_UMBER-F206_IVORY_00.JPG_large.webp',
          title: 'Umber Embroidered Lace Dress',
          description: 'Crafted with a corset-styled top featuring boning for structure and an embroidered lace detail, this dress exudes a touch of creativity and elegance. The corset-inspired design adds a confidence-forward edge, while the flowing maxi length creates a captivating silhouette. This dress takes center stage, reflecting your unique style with an on-trend charm that\'s hard to miss. Perfect for your next special occasion!',
          tenant: 'Altar\'d State',
          link: '#'
      },
      {
          imageUrl: 'https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltecc5cc0ef1aa83f1/002041_12CAPTNAT_NATURAL_00.webp',
          title: 'Captivating Candle',
          description: 'Make an entrance with this unique scent. Captivate everyone with this warm and woody candle that is sure to become your go-to. With key notes of ylang ylang, cashmere wood, patchouli, mandrin vanilla, this scent will leave you feeling confident.',
          tenant: 'Altar\'d State',
          link: '#'
      }
  ];

  onMount(async () => {
    const { tns } = await import('tiny-slider/src/tiny-slider'); // Dynamically import Tiny Slider

    slider = tns({
      container: '.product-carousel',
      loop: true,
      items: 1,
      edgePadding: 50,
      speed: 400,
      autoplay: false,
      mouseDrag: true,
      controls: true,
      prevButton: '.invprev-shop',
      nextButton: '.invnext-shop',
      nav: false,
      autoplayButtonOutput: false,
      responsive: {
        1024: {
          items: 2,
          edgePadding: 30,
        },
        1280: {
          items: 3,
          edgePadding: 75,
        }
      }
    });
  });

  // Define background colors
  const bgColors = [
    'bg-variable1',
    'bg-variable2',
    'bg-variable3',
    'bg-variable4',
    'bg-variable5'
  ];

  const fontColors = [
    'text-variable1',
    'text-variable2',
    'text-variable3',
    'text-variable4',
    'text-variable5'
  ]

  const borderColors = [
    'border-variable1 hover:border-variable1-d',
    'border-variable2 hover:border-variable2-d',
    'border-variable3 hover:border-variable3-d',
    'border-variable4 hover:border-variable4-d',
    'border-variable5 hover:border-variable5-d'
  ]
</script>

<div id="InvInsiderCarousel" class="my-0 px-0 pb-8 mx-auto text-center relative w-screen" aria-labelledby="moreShopping">
  <h3 id="moreShopping" class="shop px-12 pt-12 text-center">Become an <span class="alt-shop">Inventory Insider</span><span>.</span></h3>
  
  <div class="product-carousel flex w-full h-auto md:min-h-96 pb-5 px-0 m-0 overflow-visible">
    {#each columns as column, index (index)}
    <div class={`content h-auto md:h-64 py-6 border shadow-md w-full flex flex-col md:flex-row md:flex-grow-1 ${bgColors[index % bgColors.length]}`}>
      <div class="h-full flex flex-col md:flex-row md:justify-center px-6 md:px-3 md:flex-1 relative">
        <figure class="figParent w-full h-auto md:w-1/3 md:h-[150%] rounded flex flex-row md:flex-col flex-shrink-0 shadow-xl">
          <img src={column.imageUrl} alt={column.title} class="w-full h-full object-cover object-center rounded" />
        </figure>
        <div class="description w-full md:w-2/3 h-full flex flex-row md:flex-col justify-start px-4 py-2">
          <div class="flex flex-col w-full h-full">
            <div class="product-title text-lg text-white text-left text-nowrap leading-none font-black truncate">{column.title}</div>
            <div class="product-store text-white text-sm text-left opacity-75">{column.tenant}</div>
            <div class="product-sum text-white text-md text-left mt-3 md:mt-5 mb-12 md:mb-0 overflow-hidden" style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;">{column.description}</div>
            <div class="mini-btn mt-auto w-auto h-auto transition-transform duration-300 hover:scale-95">
              <a class={`text-center bg-white font-semibold px-4 py-2 rounded-full border-2 ${borderColors[index % borderColors.length]} ${fontColors[index % fontColors.length]}`} href={column.link}>Click for more info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/each}
  </div>

  <div id="InvNavButtons" class="mt-12 mx-auto relative z-20 w-full md:w-2/3 flex flex-row justify-center items-center gap-4">
      <button class="invprev-shop h-11 w-11 flex items-center justify-center"><i class="far fa-arrow-alt-circle-left fa-2x"></i></button>
    <a href="#" class="btn-shop-solid leading-none flex items-center" aria-label="More..." target="_blank">See Inventory</a>
    <button class="invnext-shop h-11 w-11 flex items-center justify-center"><i class="far fa-arrow-alt-circle-right fa-2x"></i></button>
  </div>

</div>