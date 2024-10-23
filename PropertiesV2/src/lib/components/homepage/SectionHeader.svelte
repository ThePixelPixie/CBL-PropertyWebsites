<script>
    import BrandBrouhahaShop from '../BrandBrouhahaShop.svelte';
    import Fifty50Shop from '../Fifty50Shop.svelte';
    import ProductCarousel from '../ProductCarousel.svelte';

    import BrandBrouhahaEat from '../BrandBrouhahaEat.svelte';
    import Fifty50Eat from '../Fifty50Eat.svelte';
    
    import EventsGrid from '../EventsGrid.svelte';
    import Fifty50Enjoy from '../Fifty50Enjoy.svelte';
    import AlsoLikeEnjoy from '../AlsoLikeEnjoy.svelte';

    //import DealsEventsScrollGrid from '../DealsEventsScrollGrid.svelte';
</script>

<div id="Section1" class="relative flex flex-col items-center justify-center text-left overflow-hidden p-0 mx-0 mb-0 -mt-18">
    <svg class="footer-wave-svg relative block fill-transparent h-8 w-screen z-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="fill-white" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    </svg>
    <figure class="absolute inset-0 p-0 m-0 h-full w-full z-20">
        <img src="https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltb41063b4324fee1d/headers-Artboard 2.png" alt="A woman shopping racks of clothing" class="w-full h-full relative object-cover object-center ">
    </figure>
    <div id="Overlay" class="absolute inset-0 p-0 m-0 h-full w-full z-20 bg-shop-l backdrop-blur-6 bg-opacity-70"></div>
    <div class="headlines w-full px-12 relative z-40 flex flex-col justify-center items-start">
        <p class="intro font-normal mx-0 mt-1 mb-0 text-shop-d drop-shadow-custom leading-none">Meet Me at the Mall</p>
        <h2 class="shop font-black m-0 text-shop-d clamp-lg drop-shadow-custom mb-3">Shop</h2>
        <!-- <p class="tagline font-black m-0 text-shop-d uppercase drop-shadow-custom">Hamilton Place</p> -->
    </div>
    <svg class="w-screen h-8 bg-transparent block relative -bottom-[1px] transform rotate-180 z-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="fill-shop-l" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    </svg>
</div>

<div id="Section1-Content" class="-mt-12 -mb-12 p-0 pb-24">

    <BrandBrouhahaShop />

    <Fifty50Shop />

    <ProductCarousel />

</div>

<div id="Section2" class="relative flex flex-col items-center justify-center text-left overflow-hidden p-0 mx-0 mb-0">
    <svg class="footer-wave-svg relative block fill-transparent h-8 w-screen z-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="fill-white" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    </svg>
    <figure class="absolute inset-0 p-0 m-0 h-full w-full z-20">
        <img src="https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/blt4fa605cb42b830ff/headers-Artboard 1.png" alt="Spaghetti being twirled on a spoon" class="w-full h-full relative object-cover object-center ">
    </figure>
    <div id="Overlay" class="absolute inset-0 p-0 m-0 h-full w-full z-20 bg-eat-l backdrop-blur-6 bg-opacity-70"></div>
    <div class="headlines w-full px-12 relative z-40 flex flex-col justify-center items-start">
        <p class="intro font-normal mx-0 mb-0 text-eat-d drop-shadow-custom leading-none">Let's go out to</p>
        <h2 class="eat font-black m-0 text-eat-d clamp-lg drop-shadow-custom mb-3">Eat</h2>
    </div>
    <svg class="w-screen h-8 bg-transparent block relative -bottom-[1px] transform rotate-180 z-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="fill-eat-l" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    </svg>
</div>

<div id="Section2-Content" class="-mt-12 -mb-12 p-0 pb-24">

    <BrandBrouhahaEat />

    <Fifty50Eat />

</div>

<div id="Section3" class="relative flex flex-col items-center justify-center text-left overflow-hidden p-0 mx-0 mb-0">
    <svg class="footer-wave-svg relative block fill-transparent h-8 w-screen z-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="fill-white" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    </svg>
    <figure class="absolute inset-0 p-0 m-0 h-full w-full z-20">
        <img src="https://images.contentstack.io/v3/assets/blt24b06c4905f92e56/bltd29ac78b6242f967/pexels-olly-864939.jpg" alt="A woman shopping racks of clothing" class="w-full h-full relative object-cover object-center">
    </figure>
    <div id="Overlay" class="absolute inset-0 p-0 m-0 h-full w-full z-20 bg-accent2-l10 backdrop-blur-6 bg-opacity-80"></div>
    <div class="headlines w-full px-12 relative z-40 flex flex-col justify-center items-start">
        <p class="intro font-normal mx-0 mb-0 text-accent2 drop-shadow-custom leading-none">More to</p>
        <h2 class="do font-black m-0 text-accent2 clamp-lg drop-shadow-custom mb-4">Enjoy</h2>
        <!-- <p class="tagline font-black m-0 text-accent2 uppercase drop-shadow-custom">At Hamilton Place</p> -->
    </div>
    <svg class="w-screen h-8 bg-transparent block relative -bottom-[1px] rotate-180 z-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="fill-accent2-l10" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    </svg>
</div>

<div id="Section3-Content" class="-mt-12 -mb-12 p-0 pb-24">

    <eventsGrid />

    <Fifty50Enjoy />

    <AlsoLikeEnjoy />

</div>

<!-- <DealsEventsScrollGrid /> -->

<style>
    h2 {
        font-size: clamp(5.21875rem, 3.7454rem + 6.5481vw, 11.603125rem);
        line-height: 1;
    }

    .intro {
        font-size: clamp(1.5625rem, 1.2019rem + 1.6026vw, 3.125rem);
    }

    .tagline {
        font-size: clamp(2.125rem, 1.8942rem + 1.0256vw, 3.125rem);
    }
</style>