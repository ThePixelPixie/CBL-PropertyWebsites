<script>
  import { getContext } from 'svelte';
  import Instagram from './Instagram.svelte';
  import CurrentYear from './CurrentYear.svelte';

  // Get urlStore from context for the conditional Instagram feed
  const { url } = getContext('APP');
  let urlStore = url;

  let isEntering = false;

  function handleFocus() {
    isEntering = true;
  }

  function handleBlur() {
    isEntering = false;
  }

  function handleGoIconClick() {
    const newsletterForm = document.querySelector(".newsletter-form");
    newsletterForm.submit();
    handleBlur();
  }
</script>

<style>
    .newsletter-box i.newsletter-icon {
        will-change: transform;
        transition: transform 400ms 220ms cubic-bezier(-.190, 1.000, 0.220, 1.000);
        -webkit-transition: transform 400ms 220ms cubic-bezier(-.190, 1.000, 0.220, 1.000);
        -moz-transition: transform 400ms 220ms cubic-bezier(-.190, 1.000, 0.220, 1.000);
        -o-transition: transform 400ms 220ms cubic-bezier(-.190, 1.000, 0.220, 1.000);
    }

    .newsletter-box path {
        stroke-miterlimit: 10;
        stroke-dasharray: 740;
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 400ms cubic-bezier(0.600, 0.040, 0.735, 0.990);
        -webkit-transition: stroke-dashoffset 400ms cubic-bezier(0.600, 0.040, 0.735, 0.990);
        -moz-transition: stroke-dashoffset 400ms cubic-bezier(0.600, 0.040, 0.735, 0.990);
        -o-transition: stroke-dashoffset 400ms cubic-bezier(0.600, 0.040, 0.735, 0.990);
    }

    .border-entering path {
        stroke-dasharray: 740;
        stroke-dashoffset: 459;
        transition: stroke-dashoffset 650ms cubic-bezier(0.755, 0.150, 0.205, 1.000);
    }

    .newsletter-box .go-icon {
        will-change: opacity;
        transition: opacity 190ms ease-out, transform 260ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
    }

    .border-entering .go-icon {
        transition: opacity 190ms ease-out, transform 260ms 20ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
    }
</style>

<footer class="bg-dark-d20 text-light-l100 z-30 overflow-hidden isolate">
    <svg class="footer-wave-svg relative block fill-transparent h-8 w-[175%] md:w-full top-0 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="fill-white" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    </svg>

    {#if $urlStore.pathname === '/'}
        <Instagram />
    {/if}

    <div class="max-w-screen-xl mx-auto p-5">
        <div class="text-center w-full mx-auto">
            <h3 class="mt-8 mb-5 lowercase font-light text-clamp-md">Subscribe</h3>
            <p class="text-xl mt-2 mb-4 leading-5 font-normal">Don't miss out on exclusive deals and events. Subscribe to our newsletter now.</p>
            <div class={`newsletter-box relative flex flex-row items-center w-full max-w-sm h-16 rounded-full mx-auto my-0 ${isEntering ? 'border-entering' : ''}`}>
                <i class={`fab fa-telegram-plane newsletter-icon absolute left-2.5 w-20 text-center text-[1.22rem] ${isEntering ? 'text-accent2' : 'text-white'}`} aria-hidden="true"></i>
                <form class="newsletter-form overflow-hidden absolute top-0 left-16 w-95">
                    <input id="newsletter" type="text" placeholder="Email Address" name="email" autocomplete="off" class={`relative w-[95%] h-16 rounded-full border-none bg-transparent px-17 text-xl font-normal outline-none ${isEntering ? 'placeholder-accent2-l20 text-accent2-l20' : 'placeholder-white text-white'}`} on:focus={handleFocus} on:blur={handleBlur}>
                </form>
                <svg class="newsletter-border block w-full h-16" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 671 111" style="enable-background:new 0 0 671 111;" xml:space="preserve" preserveAspectRatio="none">
                    <path class={`stroke-[3px] ${isEntering ? 'fill-dark stroke-accent2' : 'fill-none stroke-white'}`} d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"></path>
                    <path class={`stroke-[3px] ${isEntering ? 'fill-dark stroke-accent2' : 'fill-none stroke-white'}`} d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"></path>
                </svg>
                <div class={`go-icon absolute right-2.5 w-20 text-center text-[1.38rem] transform cursor-pointer ${isEntering ? 'opacity-1 rotate-0 text-accent2' : 'opacity-0 rotate-45 text-white'}`}>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
        </div>

        <div id="socials" class="mt-6 w-full">
            <div class="flex flex-row justify-center uppercase text-white text-sm font-normal text-center tracking-widest pt-6">follow us</div>
            <div class="flex flex-row justify-center space-x-3">
                <a href="#" target="_blank" class="flex p-1 w-8 h-8 leading-8 m-2 text-light hover:text-accent1" aria-label="Link to our Instagram" rel="noopener noreferrer">
                    <i class="fab fa-instagram text-2xl text-center"></i>
                    <span aria-hidden="true"><i class="fa-solid fa-square-up-right text-white sr-only"></i></span><span class="sr-only">(opens in a new tab)</span>
                </a>
                <a href="#" target="_blank" class="flex p-1 w-8 h-8 leading-8 m-2 text-light hover:text-accent1" aria-label="Link to our Facebook" rel="noopener noreferrer">
                    <i class="fab fa-facebook-f text-2xl text-center"></i>
                    <span aria-hidden="true"><i class="fa-solid fa-square-up-right text-white sr-only"></i></span><span class="sr-only">(opens in a new tab)</span>
                </a>
                <a href="#" target="_blank" class="group flex p-1 w-8 h-8 leading-8 m-2" aria-label="Link to our TripAdvisor" rel="noopener noreferrer">
                    <svg id="TripAdvisor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.2 320.2" class="fill-current w-8 h-8 text-white group-hover:text-accent1">
                        <g class="footer-social-icon-path">
                            <path d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z" />
                            <circle cx="128.4" cy="191.9" r="31.9" />
                            <path d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z" />
                            <circle cx="384.4" cy="191.9" r="31.9" />
                            <path d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z" />
                        </g>
                    </svg>
                    <span aria-hidden="true"><i class="fa-solid fa-square-up-right text-white sr-only"></i></span><span class="sr-only">(opens in a new tab)</span>
                </a>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 p-6">
            <div>
                <a class="cursor-pointer" href="/" aria-label="Hamilton Place - Home">
                    <svg id="MallLogo" class="w-1/2 md:w-3/4 mx-auto md:mx-0 h-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.51 96.42">
                        <g>
                            <path d="M125.43,27.25v9.19c0,2.29-0.31,5.99,2.31,6.96v0.15h-9.97V43.4c2.62-0.96,2.31-4.67,2.31-6.96v-19.2
                                c0-2.28,0.37-5.99-2.31-6.95v-0.15h9.97v0.15c-2.63,0.96-2.31,4.67-2.31,7.01v6.3h18.95v-6.3c0-2.34,0.37-6.04-2.31-7.01v-0.15
                                h10.02v0.15c-2.68,0.96-2.36,4.67-2.36,6.95v19.2c0,2.29-0.31,5.99,2.36,6.96v0.15h-10.02V43.4c2.68-0.96,2.31-4.67,2.31-6.96
                                v-9.19H125.43z" />
                            <path d="M166.99,31.01l-2.73,7.16c-1.1,2.84-1.47,4.32,1.05,5.23v0.15h-9.65V43.4c3.04-1.47,3.94-4.32,5.09-7.21
                                l8.76-21.17c0.73-1.83,1.73-3.96-0.79-4.72v-0.15h8.29l10.92,26.05c1.21,2.9,2.15,5.74,5.14,7.21v0.15h-10.76V43.4
                                c2.57-1.12,2.15-1.67,0.74-5.23l-2.83-7.16H166.99z M173.55,14.46l-5.2,12.8h10.34L173.55,14.46z" />
                            <path d="M227.92,13.34c0.42-1.07,0.79-2.08,0.79-3.15v-0.05h9.08v0.15c-1.26,0.35-1.63,1.83-1.63,2.99l3.46,24.93
                                c0.32,2.39,0.58,3.76,2.68,5.18v0.15h-10.13V43.4c1.84-0.56,2.15-2.08,2.15-3.81l-2.99-24.47l-11.76,29.09
                                c-2.62-1.93-3.36-3.3-4.62-6.14l-9.97-22.9L201.99,37c-0.42,3.1-0.79,5.33,1.68,6.4v0.15h-8.56V43.4
                                c2.2-1.88,2.52-4.37,2.94-7.11l2.99-21.28c0.21-1.42,0.79-3.45-1.63-4.72v-0.15h9.19v0.05c0,0.81,0.42,1.58,0.73,2.28
                                l9.87,22.4L227.92,13.34z" />
                            <path d="M250.16,17.3c0-2.34,0.37-6.04-2.31-7.01v-0.15h9.97v0.15c-2.63,0.96-2.31,4.72-2.31,7.01v19.14
                                c0,2.29-0.31,5.99,2.31,6.96v0.15h-9.97V43.4c2.63-0.91,2.31-4.67,2.31-6.96V17.3z" />
                            <path d="M280.33,39.9c3.57,0.2,6.67-0.96,9.29-3.1h0.16l-2.73,6.75h-21.57V43.4c2.68-0.91,2.36-4.67,2.36-6.96
                                V17.3c0-2.34,0.31-6.04-2.36-7.01v-0.15h10.02v0.15c-2.68,0.96-2.31,4.72-2.31,7.01v22.14L280.33,39.9z" />
                            <path d="M304.73,36.95c0,2.9-0.05,4.88,2.73,6.45v0.15h-10.39V43.4c2.62-0.96,2.31-4.67,2.31-6.96V13.79h-4.62
                                c-2.26,0-4.62,0.56-6.25,2.03h-0.16l1.84-6.04h0.16c0.63,0.25,1.31,0.25,1.99,0.36h20.88c0.9,0,1.73-0.05,2.42-0.36h0.16
                                l-1.68,6.04h-0.16c-0.68-1.78-2.78-2.03-4.51-2.03h-4.72V36.95z" />
                            <path d="M355.96,26.49c0,10.36-8.87,17.87-19.32,17.87c-10.39,0-19.16-7.21-19.16-17.62
                                c0-9.65,8.66-17.72,19.68-17.47C348.19,9.23,355.96,17.35,355.96,26.49z M323.46,26.29c0,7.11,5.2,14.42,13.44,14.42
                                c7.98,0,13.07-5.64,13.07-13.2c0-7.42-4.88-14.57-13.17-14.57C328.66,12.93,323.46,18.62,323.46,26.29z" />
                            <path d="M368.12,36.95c0,2.84-0.05,4.88,2.73,6.45v0.15h-9.29V43.4c2.78-1.57,2.78-3.61,2.78-6.45V16.69
                                c0-2.84,0-4.87-2.73-6.4v-0.15h7.66v0.05c0.21,0.61,0.42,0.86,0.79,1.27l0.73,1.01l19.21,23.46V16.69
                                c0-2.84,0.05-4.87-2.73-6.4v-0.15h9.24v0.15c-2.73,1.52-2.73,3.55-2.73,6.4v28.49c-3.73-1.22-5.35-2.89-7.67-5.79l-18-22.09
                                V36.95z" />
                        </g>
                        <g>
                            <path d="M130.57,54.01c6.82,0,12.02,3.2,12.02,8.89c0,5.84-5.62,9.55-11.55,9.55c-1.31,0-2.62-0.16-3.83-0.71
                                c4.51-0.25,9.4-2.94,9.4-7.82c0-4.47-3.26-6.25-7.45-6.25c-1.26,0-2.47,0.1-3.68,0.3v22.9c0,2.84-0.05,4.87,2.73,6.4v0.15
                                h-10.44v-0.15c2.68-0.91,2.36-4.67,2.36-6.96V61.17c0-2.29,0.31-5.99-2.31-7.01v-0.15H130.57z" />
                            <path d="M162.22,83.77c3.57,0.2,6.67-0.97,9.29-3.1h0.16l-2.73,6.75h-21.57v-0.15c2.68-0.91,2.36-4.67,2.36-6.96
                                V61.17c0-2.34,0.32-6.04-2.36-7.01v-0.15h10.02v0.15c-2.68,0.96-2.31,4.72-2.31,7.01v22.14L162.22,83.77z" />
                            <path d="M183.73,74.88L181,82.04c-1.1,2.84-1.47,4.31,1.05,5.23v0.15h-9.66v-0.15c3.05-1.47,3.94-4.32,5.09-7.21
                                l8.76-21.17c0.74-1.83,1.73-3.96-0.79-4.72v-0.15h8.29l10.92,26.05c1.21,2.9,2.15,5.74,5.14,7.21v0.15h-10.76v-0.15
                                c2.57-1.12,2.15-1.68,0.74-5.23l-2.83-7.16H183.73z M190.29,58.33l-5.2,12.8h10.34L190.29,58.33z" />
                            <path d="M238.93,60.31c-2.88-1.78-6.24-2.89-9.71-2.89c-7.24,0-12.28,5.13-12.28,12.49
                                c0,7.46,5.25,14.12,13.33,14.12c3.94,0,7.87-1.37,11.18-3.2h0.16l-2.68,5.89c-2.46,1.12-5.19,1.52-7.93,1.52
                                c-12.38,0-20.05-6.7-20.05-17.57c0-10.51,7.66-17.47,18.42-17.47c3.2,0,6.46,0.56,9.55,1.27V60.31z" />
                            <path d="M254.98,83.16l6.67,0.61c3.46,0.3,7.09-0.76,9.71-3h0.16l-2.36,6.65h-21.89v-0.15
                                c2.68-0.91,2.37-4.67,2.37-6.96V61.17c0-2.34,0.31-6.04-2.37-7.01v-0.15h16.79c0.9,0,1.78,0.1,2.47-0.25h0.16v5.94h-0.16
                                c-1.63-1.83-3.78-2.03-6.2-2.03c-1.84,0-3.67,0.05-5.35,0.36v9.44h6.25c0.84,0,1.68,0,2.31-0.31h0.16v5.38h-0.16
                                c-0.84-1.47-3.04-1.42-4.67-1.42h-3.89V83.16z" />
                            <path d="M48.21,0.12c-26.56,0-48.08,21.53-48.08,48.08s21.53,48.08,48.08,48.08s48.08-21.53,48.08-48.08
                                S74.76,0.12,48.21,0.12z M75.45,16.14c-2.62,0.42-4.51,2.73-4.41,5.38v26.73V74.9c-0.1,2.65,1.79,4.95,4.41,5.38v0.26H55.71
                                v-0.26c2.6-0.46,4.47-2.74,4.41-5.38V46.05C46.22,48.6,36.17,60.78,36.3,74.9c-0.1,2.65,1.79,4.95,4.41,5.38v0.26H20.96v-0.26
                                c2.6-0.46,4.47-2.74,4.41-5.38V48.08V21.42c0.02-2.6-1.85-4.83-4.41-5.28v-0.26h19.75v0.26c-2.53,0.5-4.38,2.7-4.41,5.28v26.66
                                v4.84v0c6.98-5.22,15.18-8.56,23.81-9.71V21.51c0.06-2.64-1.81-4.92-4.41-5.38v-0.26h19.75V16.14z" />
                        </g>
                    </svg>
                </a>
                <p class="text-center text-base md:text-start mt-4">2100 Hamilton Place Boulevard<br>
                    Chattanooga, TN 37421<br>
                    <a href="tel:423.855.5282" class="text-white hover:text-gray-100 cursor-pointer" aria-label="Call CBL Properties at 423.855.5282">423.855.5282</a>
                </p>
            </div>
            <div class="text-center md:text-left flex">
                <ul class="list-none space-y-2 mx-auto inline-block">
                    <li><a href="#" class="text-white hover:text-accent1 cursor-pointer">Newsroom</a></li>
                    <li><a href="#" class="text-white hover:text-accent1 cursor-pointer">Sponsors</a></li>
                    <li><a href="#" class="text-white hover:text-accent1 cursor-pointer">Jobs</a></li>
                </ul>
            </div>
            <div class="text-center md:text-left flex">
                <ul class="list-none space-y-2 mx-auto inline-block">
                    <li><a href="#" class="text-white hover:text-accent1 cursor-pointer">Privacy Policy<span aria-hidden="true"><i class="fa-solid fa-square-up-right sr-only"></i></span><span class="sr-only">(opens in a new tab)</span></a></li>
                    <li><a href="#" class="text-white hover:text-accent1 cursor-pointer">Terms of Use</a></li>
                    <li><a href="#" class="text-white hover:text-accent1 cursor-pointer">Security</a></li>
                    <li><a href="#" class="text-white hover:text-accent1 cursor-pointer">Code of Conduct</a></li>
                </ul>
            </div>
            <div class="text-center md:text-end">
                <a class="cursor-pointer flex justify-end" href="https://www.cblproperties.com" target="_blank" aria-label="CBL Properties Corporate Website" rel="noopener noreferrer">
                    <svg id="CBL-Logo" class="w-1/4 md:w-1/2 mx-auto md:mx-0 h-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.6 44.9">
                        <g>
                            <path d="M5,39.8c-0.1-0.2-0.3-0.3-0.5-0.4c-0.2-0.1-0.5-0.1-0.7-0.1c-0.3,0-0.5,0.1-0.8,0.2c-0.2,0.1-0.4,0.3-0.6,0.5
                                C2.2,40,2.1,40.3,2,40.5c-0.1,0.3-0.1,0.6-0.1,0.9c0,0.3,0,0.6,0.1,0.9c0.1,0.3,0.2,0.5,0.4,0.7c0.2,0.2,0.4,0.3,0.6,0.5
                                c0.2,0.1,0.5,0.2,0.7,0.2c0.3,0,0.6-0.1,0.8-0.2c0.2-0.1,0.4-0.3,0.6-0.5l1.2,0.9c-0.3,0.4-0.6,0.7-1.1,0.9
                                c-0.4,0.2-0.9,0.3-1.4,0.3c-0.5,0-1-0.1-1.5-0.2C2,44.5,1.6,44.3,1.3,44c-0.3-0.3-0.6-0.7-0.8-1.1c-0.2-0.4-0.3-0.9-0.3-1.5
                                s0.1-1,0.3-1.5c0.2-0.4,0.4-0.8,0.8-1.1c0.3-0.3,0.7-0.5,1.2-0.7c0.4-0.2,0.9-0.2,1.5-0.2c0.2,0,0.4,0,0.6,0.1
                                c0.2,0,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.2,0.6,0.3s0.3,0.3,0.5,0.5L5,39.8z" />
                            <path d="M7.2,38h2.5c0.3,0,0.6,0,0.9,0.1c0.3,0,0.6,0.1,0.8,0.2c0.2,0.1,0.4,0.3,0.6,0.5c0.1,0.2,0.2,0.5,0.2,0.9
                                c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.3-0.5,0.4-0.8,0.5v0c0.2,0,0.4,0.1,0.6,0.2c0.2,0.1,0.3,0.2,0.5,0.4c0.1,0.1,0.2,0.3,0.3,0.5
                                c0.1,0.2,0.1,0.4,0.1,0.6c0,0.4-0.1,0.7-0.2,0.9c-0.2,0.2-0.3,0.4-0.6,0.6c-0.2,0.1-0.5,0.2-0.8,0.3c-0.3,0.1-0.6,0.1-0.9,0.1H7.2
                                V38z M8.7,40.7h1.1c0.1,0,0.2,0,0.3,0c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.3-0.1-0.3
                                c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.4,0h-1V40.7z M8.7,43.5H10c0.1,0,0.2,0,0.3,0
                                c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,0.2-0.2C11,43,11,42.9,11,42.7c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.2
                                c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0H8.7V43.5z" />
                            <polygon points="13.4,38 14.9,38 14.9,43.4 17.7,43.4 17.7,44.8 13.4,44.8" />
                            <path d="M21.4,38h2.5c0.3,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.2,0.4,0.4,0.6,0.6c0.1,0.3,0.2,0.6,0.2,1
                                c0,0.4-0.1,0.7-0.2,1s-0.3,0.5-0.5,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0.1-0.6,0.1-1,0.1h-1.1v2.6h-1.5V38z M22.9,40.9h1
                                c0.1,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.4c0-0.2,0-0.3-0.1-0.4
                                c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.3,0-0.4,0h-0.8V40.9z" />
                            <path d="M27.4,38H30c0.3,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.2,0.4,0.4,0.6,0.6c0.1,0.3,0.2,0.6,0.2,1
                                c0,0.5-0.1,0.9-0.4,1.2c-0.2,0.3-0.6,0.5-1.1,0.6l1.7,2.8H31l-1.4-2.7h-0.7v2.7h-1.5V38z M28.9,40.8h0.9c0.1,0,0.3,0,0.4,0
                                c0.1,0,0.3,0,0.4-0.1c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.2
                                c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0h-1V40.8z" />
                            <path d="M33.2,41.4c0-0.5,0.1-1,0.3-1.5c0.2-0.4,0.4-0.8,0.8-1.1c0.3-0.3,0.7-0.5,1.2-0.7c0.4-0.2,0.9-0.2,1.5-0.2
                                s1,0.1,1.5,0.2c0.4,0.2,0.8,0.4,1.2,0.7c0.3,0.3,0.6,0.7,0.8,1.1c0.2,0.4,0.3,0.9,0.3,1.5c0,0.5-0.1,1-0.3,1.5
                                c-0.2,0.4-0.4,0.8-0.8,1.1c-0.3,0.3-0.7,0.5-1.2,0.7c-0.4,0.2-0.9,0.2-1.5,0.2s-1-0.1-1.5-0.2s-0.8-0.4-1.2-0.7
                                c-0.3-0.3-0.6-0.7-0.8-1.1C33.3,42.4,33.2,41.9,33.2,41.4 M34.8,41.4c0,0.3,0,0.6,0.1,0.9c0.1,0.3,0.2,0.5,0.4,0.7
                                c0.2,0.2,0.4,0.3,0.7,0.5c0.3,0.1,0.5,0.2,0.9,0.2c0.3,0,0.6-0.1,0.9-0.2c0.3-0.1,0.5-0.3,0.7-0.5c0.2-0.2,0.3-0.4,0.4-0.7
                                c0.1-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-0.9c-0.1-0.3-0.2-0.5-0.4-0.7c-0.2-0.2-0.4-0.3-0.7-0.5c-0.3-0.1-0.5-0.2-0.9-0.2
                                c-0.3,0-0.6,0.1-0.9,0.2c-0.3,0.1-0.5,0.3-0.7,0.5c-0.2,0.2-0.3,0.4-0.4,0.7C34.8,40.8,34.8,41.1,34.8,41.4" />
                            <path d="M41.6,38h2.5c0.3,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.2,0.4,0.4,0.6,0.6c0.1,0.3,0.2,0.6,0.2,1
                                c0,0.4-0.1,0.7-0.2,1s-0.3,0.5-0.5,0.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0.1-0.6,0.1-1,0.1H43v2.6h-1.5V38z M43,40.9h1
                                c0.1,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.4c0-0.2,0-0.3-0.1-0.4
                                c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.3,0-0.4,0H43V40.9z" />
                            <polygon points="47.6,38 52.2,38 52.2,39.4 49.1,39.4 49.1,40.6 52,40.6 52,42 49.1,42 49.1,43.4 52.4,43.4 52.4,44.8 
                                47.6,44.8" />
                            <path d="M53.6,38h2.6c0.3,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.2,0.4,0.4,0.6,0.6c0.1,0.3,0.2,0.6,0.2,1
                                c0,0.5-0.1,0.9-0.4,1.2c-0.2,0.3-0.6,0.5-1.1,0.6l1.7,2.8h-1.8l-1.4-2.7h-0.7v2.7h-1.5V38z M55.1,40.8H56c0.1,0,0.3,0,0.4,0
                                c0.1,0,0.3,0,0.4-0.1c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.2
                                c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0h-1V40.8z" />
                            <polygon points="61.1,39.3 59.2,39.3 59.2,38 64.5,38 64.5,39.3 62.6,39.3 62.6,44.8 61.1,44.8" />
                            <rect x="65.3" y="38" width="1.5" height="6.7" />
                            <polygon points="68.2,38 72.8,38 72.8,39.4 69.7,39.4 69.7,40.6 72.6,40.6 72.6,42 69.7,42 69.7,43.4 73,43.4 73,44.8 
                                68.2,44.8" />
                            <path d="M77.5,39.7c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2-0.1-0.4-0.1-0.6-0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0.1-0.3,0.1
                                c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.2,0.1,0.4,0.2,0.5c0.2,0.1,0.3,0.2,0.6,0.3c0.2,0.1,0.5,0.2,0.7,0.2
                                c0.3,0.1,0.5,0.2,0.7,0.3c0.2,0.1,0.4,0.3,0.6,0.6c0.2,0.2,0.2,0.5,0.2,0.9c0,0.4-0.1,0.7-0.2,1c-0.1,0.3-0.3,0.5-0.6,0.7
                                c-0.2,0.2-0.5,0.3-0.8,0.4c-0.3,0.1-0.6,0.1-1,0.1c-0.4,0-0.8-0.1-1.2-0.2c-0.4-0.1-0.7-0.3-1-0.6l1.1-1.2c0.2,0.2,0.3,0.4,0.6,0.5
                                c0.2,0.1,0.5,0.2,0.7,0.2c0.1,0,0.2,0,0.4,0c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.3
                                c0-0.2-0.1-0.4-0.2-0.5c-0.2-0.1-0.4-0.2-0.6-0.3c-0.2-0.1-0.5-0.2-0.8-0.2c-0.3-0.1-0.5-0.2-0.8-0.3c-0.2-0.1-0.4-0.3-0.6-0.6
                                c-0.2-0.2-0.2-0.5-0.2-0.9c0-0.4,0.1-0.7,0.2-1c0.1-0.3,0.3-0.5,0.6-0.7c0.2-0.2,0.5-0.3,0.8-0.4c0.3-0.1,0.6-0.1,1-0.1
                                c0.4,0,0.7,0.1,1.1,0.2c0.4,0.1,0.7,0.3,1,0.5L77.5,39.7z" />
                            <path d="M17.4,23.2c-5.9,0-10.1-3.6-10.1-8.7c0-5,4.2-8.6,10.3-8.6c2.5,0,4.9,0.6,7.2,1.6V1.3C22.5,0.4,19.9,0,17,0
                                C6.2,0,0,7.1,0,14.6c0,7.3,5.5,14.5,16.5,14.5c3.1,0,5.6-0.4,8.3-1.5v-6.2C22.2,22.5,20.1,23.2,17.4,23.2" />
                            <path d="M41.5,23.5h-6.2v-6.7h7.2c2.5,0,4.3,1.1,4.3,3.2C46.8,22.5,45.4,23.5,41.5,23.5 M35.3,5.6h5.9
                                c2.6,0,3.6,1.5,3.6,3c0,1.5-1,3.1-3.6,3.1h-5.9V5.6z M48.2,13.1c2.4-1.2,3.9-3.3,3.9-5.6c0-3.2-2.7-7.1-9.4-7.1H28.2v28.3h16
                                c8.3,0,10-5.1,10-8.3C54.3,17.1,52.3,14.2,48.2,13.1" />
                            <polygon points="63.9,23.5 63.9,0.4 56.9,0.4 56.9,28.7 78.5,28.7 78.5,23.5" />
                            <path d="M66.4,3.5c0-0.4,0.1-0.8,0.2-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.6-0.5,1-0.7c0.4-0.2,0.8-0.2,1.2-0.2
                                s0.8,0.1,1.2,0.2c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,1s0.2,0.8,0.2,1.2c0,0.4-0.1,0.8-0.2,1.2c-0.2,0.4-0.4,0.7-0.7,1
                                c-0.3,0.3-0.6,0.5-1,0.7c-0.4,0.2-0.8,0.2-1.2,0.2s-0.8-0.1-1.2-0.2s-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-1
                                C66.5,4.4,66.4,4,66.4,3.5 M66.9,3.5c0,0.3,0.1,0.7,0.2,1c0.1,0.3,0.3,0.6,0.5,0.8c0.2,0.2,0.5,0.4,0.8,0.5C68.8,6,69.1,6,69.4,6
                                s0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.5c0.2-0.2,0.4-0.5,0.5-0.8c0.1-0.3,0.2-0.6,0.2-1c0-0.3-0.1-0.7-0.2-1
                                c-0.1-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.6-0.2-1-0.2s-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.5
                                c-0.2,0.2-0.4,0.5-0.5,0.8C67,2.9,66.9,3.2,66.9,3.5 M68.3,1.8h1.3c0.4,0,0.7,0.1,0.9,0.3s0.3,0.4,0.3,0.8c0,0.3-0.1,0.5-0.2,0.7
                                c-0.2,0.2-0.4,0.2-0.6,0.3l0.9,1.5h-0.7l-0.9-1.4h-0.5v1.4h-0.6V1.8z M68.9,3.3h0.5c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1
                                c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3c0-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.1
                                c-0.1,0-0.2,0-0.3,0h-0.5V3.3z" />
                        </g>
                    </svg>
                    <span aria-hidden="true"><i class="fa-solid fa-square-up-right sr-only"></i></span><span class="sr-only">(opens in a new tab)</span>
                </a>
            </div>
        </div>
    </div>

    <div class="flex w-full flex-row justify-center pt-4 pb-40 text-center bg-accent2 text-light">
        <p class="text-sm font-semibold">©<CurrentYear /> <a class="text-light hover:text-light-80 cursor-pointer" href="https://www.cblproperties.com" rel="noopener noreferrer" aria-label="CBL Properties corporate website">CBL Properties<span aria-hidden="true"><i class="fa-solid fa-square-up-right text-white sr-only"></i></span><span class="sr-only">(opens in a new tab)</span></a> | All rights reserved.</p>
    </div>
</footer>