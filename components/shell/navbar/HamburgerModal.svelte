<script>
  import { createEventDispatcher } from 'svelte';

  export let isOpen = false;
  const dispatch = createEventDispatcher();

  function closeModal() {
    setTimeout(() => {
        dispatch('close');
    }, 250);
  }
</script>

<style>
    #drawerHamburger::-webkit-scrollbar {
        display: none;
    }
</style>

<div id="overlay" class={`fixed transition-opacity duration-300 ${isOpen ? 'opacity-100 inset-0 bg-white bg-opacity-50 backdrop-blur-8 h-screen w-screen z-[115]' : 'opacity-0 pointer-events-none h-0 w-0'}`} on:click={closeModal}></div>

<div id="drawerHamburger" class={`fixed w-[95%] md:max-w-[430px] left-2/4 -translate-x-1/2 transition-all duration-500 max-h-[80vh] h-auto overflow-y-auto ${isOpen ? 'opacity-100 bottom-14' : 'opacity-0 -bottom-full'} ease-in-out z-[119]`}>
    <div class="bg-accent1 h-auto rounded-t-xl pb-20">
        <div class="flex justify-between items-center p-4 border-b">
            <a href="/" class="cursor-pointer" aria-label="Hamilton Place - Home">
                <svg id="MallLogo" class="w-1/2 md:w-3/4 h-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.51 96.42">
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
            <button on:click={closeModal} class="close" type="button">
                Close
            </button>
        </div>
        <div class="px-4 pt-4 pb-0 flex flex-col">
            <div role="navigation" class="navbar flex flex-col order-3 md:order-1">
                <ul class="list-none px-7 pt-7 pb-3 text-center flex flex-col">
                    <li class="mb-1 order-9 md:order-1">
                        <a href="#" class="text-white hover:text-accent2 transition-all duration-700 ease-in-out font-semibold uppercase leading-loose" aria-label="Navigate to Easter Bunny's Garden" on:click={closeModal}>Easter Bunny's Garden</a>
                    </li>
                    <li class="mb-1 order-8 md:order-2">
                        <a href="#" class="text-white hover:text-accent2 transition-all duration-700 ease-in-out font-semibold uppercase leading-loose" aria-label="Navigate to Products" on:click={closeModal}>Products</a>
                    </li>
                    <li class="mb-1 order-7 md:order-3">
                        <a href="#" class="text-white hover:text-accent2 transition-all duration-700 ease-in-out font-semibold uppercase leading-loose" aria-label="Navigate to Directory">Directory</a>
                    </li>
                    <li class="mb-1 order-6 md:order-4">
                        <a href="#" class="text-white hover:text-accent2 transition-all duration-700 ease-in-out font-semibold uppercase leading-loose" aria-label="Navigate to About">About</a>
                    </li>
                    <li class="mb-1 order-5">
                        <a href="/tenant" class="text-white hover:text-accent2 transition-all duration-700 ease-in-out font-semibold uppercase leading-loose" aria-label="Navigate to a Tenant Page">Altar'd State</a>
                    </li>
                    <li class="mb-1 order-4 md:order-6">
                        <a href="/deals" class="text-white hover:text-accent2 transition-all duration-700 ease-in-out font-semibold uppercase leading-loose" aria-label="Navigate to Deals">Deals</a>
                    </li>
                    <li class="mb-1 order-3 md:order-7">
                        <a href="/events" class="text-white hover:text-accent2 transition-all duration-700 ease-in-out font-semibold uppercase leading-loose" aria-label="Navigate to Deals">Events</a>
                    </li>
                    <li class="mb-1 order-2 md:order-8">
                        <a href="/jobs" class="text-white hover:text-accent2 transition-all duration-700 ease-in-out font-semibold uppercase leading-loose" aria-label="Navigate to a Jobs Collection Page">Jobs</a>
                    </li>
                    <li class="mb-1 order-1 md:order-9">
                        <a href="/news" class="text-white hover:text-accent2 transition-all duration-700 ease-in-out font-semibold uppercase leading-loose" aria-label="Navigate to News Collection Page">News</a>
                    </li>
                </ul>
            </div>

            <div id="socials" class="flex flex-row justify-center space-x-4 order-2">
                <a href="#" target="_blank" class="flex p-1 w-8 h-8 leading-8 m-2 text-light hover:text-accent2" aria-label="Link to our Instagram" rel="noopener noreferrer">
                    <i class="fab fa-instagram text-2xl text-center"></i>
                    <span aria-hidden="true"><i class="fa-solid fa-square-up-right text-white sr-only"></i></span><span class="sr-only">(opens in a new tab)</span>
                </a>
                <a href="#" target="_blank" class="flex p-1 w-8 h-8 leading-8 m-2 text-light hover:text-accent2" aria-label="Link to our Facebook" rel="noopener noreferrer">
                    <i class="fab fa-facebook-f text-2xl text-center"></i>
                    <span aria-hidden="true"><i class="fa-solid fa-square-up-right text-white sr-only"></i></span><span class="sr-only">(opens in a new tab)</span>
                </a>
                <a href="#" target="_blank" class="group flex p-1 w-8 h-8 leading-8 m-2" aria-label="Link to our TripAdvisor" rel="noopener noreferrer">
                    <svg id="TripAdvisor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.2 320.2" class="fill-current w-8 h-8 text-white group-hover:text-accent2">
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

            <div id="leasing" class="flex flex-row justify-content-center mt-5 space-x-4 order-1 md:order-3">
                <a class="btn-2-outline mx-auto py-0 leading-2" href="#" aria-label="This links to leasing info">Leasing</a>
            </div>
        </div>
    </div>
</div>