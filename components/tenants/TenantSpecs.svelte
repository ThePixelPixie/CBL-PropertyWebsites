<script>
    import TenantButtons from './TenantButtons.svelte';
    import TenantHoursAlt from './TenantHours.svelte';
    import TenantSocials from './TenantSocials.svelte';

    let fullText = "Altar'd State is a fast-growing women's fashion boutique known for its trend-setting apparel and visual displays. What most shoppers do not realize is that behind the scenes of the fashion company is a group of caring individuals that focus their time and resources on improving the quality of life for children around the globe. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum. Amet mattis vulputate enim nulla aliquet. Purus ut faucibus pulvinar elementum. Convallis aenean et tortor at risus viverra. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Enim facilisis gravida neque convallis a. Et egestas quis ipsum suspendisse ultrices gravida. At augue eget arcu dictum varius duis at consectetur lorem. Suspendisse potenti nullam ac tortor vitae. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Magna etiam tempor orci eu lobortis. Neque sodales ut etiam sit amet nisl. Diam maecenas ultricies mi eget mauris. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Id velit ut tortor pretium viverra.";
    let truncated = true;
    let transitioning = false;
    let truncatedText = '';
    let moreText = '';

    const words = fullText.split(' ');

    if (words.length > 60) {
        truncatedText = words.slice(0, 60).join(' ') + '...';
        moreText = words.slice(60).join(' ');
    } else {
        truncated = false;
    }

    function toggle() {
        if (transitioning) return;
        transitioning = true;
        setTimeout(() => {
            truncated = !truncated;
            setTimeout(() => {
                transitioning = false;
            }, 1500);
        }, 50);
    }
</script>

<svelte:head>
    <script type="text/javascript" id="mapplic-script" src="https://mapplic.com/mapplic.js"></script>
</svelte:head>

<style>
    .description {
        transition: max-height 1.5s ease, opacity 1.5s ease;
        max-height: 100em;
        overflow: hidden;
    }

    .description.expanded {
        max-height: 300em;
        opacity: 1;
    }

    .description.collapsing {
        max-height: 15em;
    }

    .fa-li {
        position: relative;
        left: -2em;
    }

    .fa-li i {
        position: absolute;
        left: 2em;
    }
</style>

<div class="w-full flex flex-col lg:flex-row items-start p-12">

    <div id="TenantInfo" class="w-full lg:w-2/3 mx-auto px-0 sm:px-9 md:pl-0 md:pr-12 mt-12 md:mt-0 order-2 lg:order-1">
        <div id="tenantDescription" class="w-full">
            <p class="description {truncated ? (transitioning ? 'collapsing' : '') : 'expanded'} lg:py-0">
                {#if truncated}
                    {truncatedText}
                    {#if moreText}
                        <span class="text-accent1-d10 transition-opacity transition-1000 hover:opacity-55 font-semibold cursor-pointer" on:click={toggle}> show more <i class="fa-regular fa-arrow-right"></i></span>
                    {/if}
                {:else}
                    {fullText}
                    <span class="text-accent1-d10 transition-opacity transition-1000 hover:opacity-55 font-semibold cursor-pointer" on:click={toggle}><i class="fa-regular fa-arrow-left"></i> show less</span>
                {/if}
            </p>
        </div>

        <TenantButtons />

        <TenantSocials />
    </div>

    <div id="Details" class="mx-auto w-full lg:w-1/3 order-1 lg:order-2">
        <TenantHoursAlt />

        <ul id="TenantSpecs" class="w-full flex flex-row flex-wrap gap-6 lg:text-sm py-3 my-4 justify-evenly font-semibold">
            <li id="space" class="flex items-start">
                <span class="fa-li"><i class="fas fa-map-marker-alt text-accent2"></i></span>
                <div>Level 2<br />Space 222</div>
            </li>
            <li id="phone" class="flex items-start">
                <span class="fa-li"><i class="fas fa-phone text-accent2"></i></span>
                <div><a href="tel:423-445-2700" aria-label="Call the store" class="hover:text-accent2-l20">423.445.2700</a></div>
            </li>
            <li id="web" class="flex items-start">
                <span class="fa-li"><i class="fas fa-globe text-accent2"></i></span>
                <div><a href="https://www.altardstate.com" aria-label="Visit the store's website" class="hover:text-accent2-l20">altardstate.com</a></div>
            </li>
        </ul>

        <div class="w-full h-auto mx-auto overflow-hidden shadow-xl border-accent1 border rounded-lg relative">
            <mapplic-map data-location="U222" data-settings={`{"sidebar":false}`} data-json="https://mapplic.com/getMapData?id=vlcUgrQd4wCkjINjkkSC" id="my-mapplic-map"></mapplic-map>
        </div>
    </div>

</div>