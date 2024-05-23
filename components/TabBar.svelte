<!-- <script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { cubicOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';

  const isSearchActive = writable(false);
  const isDirectoryActive = writable(false);
  const isNavHamburgerActive = writable(false);

  let elements = {};

  const [send, receive] = crossfade({
    duration: 700,
    easing: cubicOut,
    fallback: (node, params) => {
      return {
        duration: 700,
        easing: cubicOut,
        css: t => `stroke-dashoffset: ${t * 1000}`
      };
    }
  });

  function cacheElements() {
    elements = {
      search: {
        activeCircle: document.getElementById('ActiveCircle'),
        glass: document.getElementById('Glass'),
        handle: document.getElementById('Handle'),
        searchText: document.getElementById('SearchText')
      },
      directory: {
        mapPaths: document.querySelectorAll('#MapBkgnd path'),
        pinPaths: document.querySelectorAll('#Pin path'),
        dirText: document.getElementById('DirText')
      },
      navHamburger: {
        navButton: document.getElementById('NavHamburger'),
        line1: document.getElementById('Line1'),
        line2: document.getElementById('Line2'),
        line3: document.getElementById('Line3'),
        line4: document.getElementById('Line4')
      }
    };
  }

  function toggleClasses(element, classes, active) {
    for (const [className, add] of Object.entries(classes)) {
      element.classList.toggle(className, add === active);
    }
  }

  function toggleElementState(type, active) {
    if (type === 'Search') {
      const { activeCircle, glass, handle, searchText } = elements.search;
      toggleClasses(activeCircle, { 'fill-navgray': true, 'fill-none': false }, active);
      toggleClasses(glass, { 'fill-navgray': true, 'fill-navback': false }, active);
      toggleClasses(handle, { 'fill-navaccent': true, 'fill-navback': false }, active);
      toggleClasses(searchText, { 'text-navaccent': true, 'text-navoutline': false }, active);
    } else if (type === 'Directory') {
      const { mapPaths, pinPaths, dirText } = elements.directory;
      mapPaths.forEach(path => toggleClasses(path, { 'fill-navgray': true, 'fill-navback': false }, active));
      pinPaths.forEach(path => toggleClasses(path, { 'fill-navaccent': true, 'fill-navback': false }, active));
      toggleClasses(dirText, { 'text-navaccent': true, 'text-navoutline': false }, active);
    } else if (type === 'NavHamburger') {
      const { navButton, line1, line2, line3, line4 } = elements.navHamburger;
      toggleClasses(navButton, {
        'scale-95': true,
        'outline-navaccent': true,
        'ring-navaccent-300': true,
        'shadow-none': true,
        'shadow-custom': false
      }, active);
      toggleClasses(line1, { 'block': true, 'hidden': false }, !active);
      toggleClasses(line2, {
        'rotate-0': true,
        'top-1/3': true,
        'w-full': true,
        'left-0': true,
        'rotate-[125deg]': false,
        'top-1/2': false,
        'w-[135%]': false,
        'left-[-17.5%]': false
      }, !active);
      toggleClasses(line3, {
        'rotate-0': true,
        'top-2/3': true,
        'w-full': true,
        'right-0': true,
        'rotate-[-125deg]': false,
        'top-1/2': false,
        'w-[135%]': false,
        'right-[-17.5%]': false
      }, !active);
      toggleClasses(line4, { 'block': true, 'hidden': false }, !active);
    }
  }

  function handleButton(node, type) {
    function toggleState() {
      if (type === 'Search') {
        isSearchActive.update(active => {
          toggleElementState('Search', !active);
          if (!active) {
            isDirectoryActive.set(false);
            toggleElementState('Directory', false);
            isNavHamburgerActive.set(false);
            toggleElementState('NavHamburger', false);
          }
          return !active;
        });
      } else if (type === 'Directory') {
        isDirectoryActive.update(active => {
          toggleElementState('Directory', !active);
          if (!active) {
            isSearchActive.set(false);
            toggleElementState('Search', false);
            isNavHamburgerActive.set(false);
            toggleElementState('NavHamburger', false);
          }
          return !active;
        });
      } else if (type === 'NavHamburger') {
        isNavHamburgerActive.update(active => {
          toggleElementState('NavHamburger', !active);
          if (!active) {
            isSearchActive.set(false);
            toggleElementState('Search', false);
            isDirectoryActive.set(false);
            toggleElementState('Directory', false);
          }
          return !active;
        });
      }
    }

    node.addEventListener('click', toggleState);

    return {
      destroy() {
        node.removeEventListener('click', toggleState);
      }
    };
  }

  function closeSearchModal() {
    isSearchActive.set(false);
    toggleElementState('Search', false);
  }

  onMount(() => {
    cacheElements();
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeSearchModal();
      }
    });
  });
</script>

<style>
  .tab-bar {
    min-height: 95px;
    height: 104px;
    max-height: 20%;
    padding-top: 15px;
    z-index: 999999;
  }

  .tab-bar .nav-button {
    position: absolute;
    left: calc(50% - 30px);
    height: 90px;
  }

  .tab-bar .nav-button button {
    width: 60px;
    height: 45px;
  }

  :root {
      --color-navback: #393b48;
      --color-navbutton: #eabb67;
      --color-navaccent: #eabb67;
      --color-navoutline: #f3f1eb;
      --color-navlines: #f3f1eb;
      --color-navgray: rgba(235,236,239,.25);
      --custom-up-shadow-default: 0 -3px 4px rgba(33,37,56,.5);
      --custom-shadow-default: 0 0 8px rgba(33,37,56,1);
      --custom-up-shadow-peach: 0 -3px 4px rgba(163,105,85,.5);
      --custom-shadow-peach: 0 0 8px rgba(163,105,85,1);
      --custom-up-shadow-ltteal: 0 -3px 4px rgba(91,149,150,.5);
      --custom-shadow-ltteal: 0 0 8px rgba(91,149,150,1);
  }

  .drop-shadow-custom {
      filter: drop-shadow(var(--custom-up-shadow-default));
  }

  .shadow-custom {
      box-shadow: var(--custom-shadow-default);
  }

  @media (prefers-reduced-motion) {
    .tab-bar .nav-button button:hover,
    .tab-bar .nav-button button:active {
      transform: none;
    }
  }

  @keyframes drawPath {
    to {
      stroke-dashoffset: 0;
    }
  }

  .stroke-animate {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawPath 5s forwards;
  }
</style>

<nav class="tab-bar fixed inset-x-0 bottom-0 max-w-full md:max-w-custom mx-auto custom:rounded-bl-large custom:rounded-br-large overflow-hidden custom:mb-5">
  <svg id="TabNavBack" data-name="Tab Nav Background" class="absolute bottom-0 w-screen sm:w-full overflow-visible h-auto pt-[10px]" viewBox="0 0 430 94.33" preserveAspectRatio="xMidYMin slice">
    <path class="navback fill-navback drop-shadow-custom" d="M421.01,21.48c4.96,0,8.99,4.71,8.99,9.67v63.18s-429.84,0-429.84,0l-.16-63.18c0-4.96,4.03-9.67,8.99-9.67l163.72.11v-.05c4.85-.12,8.99-2.11,10.77-4.92.06-.08.04-.05.05-.07C193.59,2.95,203.56-.06,215,0c11.2.06,21.41,2.95,31.46,16.55.01.02-.01-.01.05.07,2.49,4.15,6.07,5.25,10.77,4.92l163.72-.06Z"/>
  </svg>
  <div class="links flex w-full absolute left-0 bottom-2 right-0">
    <div class="directory-button flex-1 text-center -mt-1">
      <a href="#" id="Directory" use:handleButton={'Directory'} class="w-full h-full cursor-pointer" aria-label="Go to Directory page">
        <svg data-name="Directory Icon" class="w-1/6 mx-auto" viewBox="0 0 26.59 27.28" preserveAspectRatio="xMidYMin slice">
          <g id="MapBkgnd" class="stroke-animate">
            <path id="mapPath1" class="fill-navback transition-all duration-500 ease-in-out" d="M26.26,4.86v17.79c0,.34-.2.64-.51.78l-7.78,3.46c-.11.05-.23.07-.35.07V7.3c.12,0,.24-.02.35-.07l7.07-3.15c.27-.12.58-.1.83.06.25.16.39.43.39.72Z"/>
            <path id="mapPath2" class="fill-navback transition-all duration-500 ease-in-out" d="M17.62,9.17v17.79c-.12,0-.24-.02-.35-.07l-7.94-3.53c-.11-.05-.23-.07-.35-.07V3.62c.12,0,.24.03.35.07l7.94,3.53c.11.05.23.07.35.07v1.88Z"/>
            <path id="mapPath3" class="fill-navback transition-all duration-500 ease-in-out" d="M8.97,5.71v17.57c-.12,0-.24.03-.35.07l-7.07,3.15c-.27.12-.58.1-.83-.06s-.39-.43-.39-.72V7.94c0-.34.2-.64.51-.78l7.78-3.46c.11-.05.23-.07.35-.07v2.09Z"/>
          </g>
          <g id="MapLines" class="stroke-animate">
            <path class="stroke-navoutline fill-none" d="M8.97,23.28c-.12,0-.24.03-.35.07l-7.07,3.15c-.27.12-.58.1-.83-.06s-.39-.43-.39-.72V7.94c0-.34.2-.64.51-.78l7.78-3.46c.11-.05.23-.07.35-.07s.24.03.35.07l7.94,3.53c.11.05.23.07.35.07s.24-.02.35-.07l7.07-3.15c.27-.12.58-.1.83.06.25.16.39.43.39.72v17.79c0,.34-.2.64-.51.78l-7.78,3.46c-.11.05-.23.07-.35.07s-.24-.02-.35-.07l-7.94-3.53c-.11-.05-.23-.07-.35-.07Z"/>
            <polyline class="stroke-navoutline fill-none" points="17.62 26.96 17.62 26.96 17.62 9.17"/>
            <line class="stroke-navoutline fill-none" x1="8.97" y1="23.28" x2="8.97" y2="5.71"/>
          </g>
          <g id="Pin" class="stroke-animate">
            <circle class="fill-navback stroke-navoutline" cx="7.45" cy="4.22" r="1.62"/>
            <path class="fill-navback stroke-navoutline transition-all duration-500 ease-in-out" d="M10.86,4.22c0,.73-.23,1.41-.62,1.96h0l-2.79,3.96-2.79-3.96h0c-.39-.55-.62-1.23-.62-1.96,0-1.88,1.53-3.41,3.41-3.41s3.41,1.53,3.41,3.41ZM9.06,4.22c0-.89-.72-1.62-1.62-1.62s-1.62.72-1.62,1.62.72,1.62,1.62,1.62,1.62-.72,1.62-1.62Z"/>
          </g>
        </svg>
        <div id="DirText" class="text-sm text-navoutline transition-all duration-500 ease-in-out">Directory</div>
      </a>
    </div>
    <div class="nav-button text-center top-[-20%]">
      <button id="NavHamburger" use:handleButton={'NavHamburger'} class="bg-navbutton transition-all shadow-custom duration-100 ease-in-out text-navlines rounded-full rotate-90" style="width: 60px" aria-haspopup="dialog" aria-expanded={$isNavHamburgerActive} aria-controls="mainNavModal" aria-label="Open navigation menu">
        <div class="menu-btn -rotate-90 m-auto relative transition-all duration-500 ease-in-out cursor-pointer" style="width: 30px; height: 30px;">
          <span id="Line1" class="btn-line top-0 h-0.5 w-3/4 block absolute bg-navlines opacity-1 transition-all duration-500 rotate-0 rounded-full" style="margin-left: 12.5%"></span>
          <span id="Line2" class="btn-line top-1/3 h-0.5 w-full left-0 block absolute bg-navlines opacity-1 transition-all duration-500 rotate-0 rounded-full"></span>
          <span id="Line3" class="btn-line top-2/3 h-0.5 w-full right-0 block absolute bg-navlines opacity-1 transition-all duration-500 rotate-0 rounded-full"></span>
          <span id="Line4" class="btn-line top-full h-0.5 w-3/4 block absolute bg-navlines opacity-1 transition-all duration-500 rotate-0 rounded-full" style="margin-left: 12.5%"></span>
        </div>
      </button>
    </div>
    <div class="search-button flex-1 text-center -mt-1">
      <button id="Search" use:handleButton={'Search'} class="w-full h-full cursor-pointer" aria-haspopup="dialog" aria-expanded={$isSearchActive} aria-controls="searchModal" aria-label="Open">
        <svg data-name="Search Icon" class="w-1/6 mx-auto" viewBox="0 0 28.07 28.55" preserveAspectRatio="xMidYMin slice">
          <circle id="ActiveCircle" class="transition-all fill-navback duration-500 ease-in-out" cx="15.4" cy="15.43" r="10.04"/>
          <path id="Glass" class="fill-navback stroke-navoutline transition-all duration-500 ease-in-out" d="M10.84.83c5.8,0,10.5,4.7,10.5,10.5,0,2.9-1.18,5.52-3.08,7.42s-4.52,3.08-7.42,3.08C5.04,21.82.34,17.12.34,11.33S5.04.83,10.84.83Z"/>
          <path id="Handle" class="fill-navback stroke-navoutline transition-all duration-500 ease-in-out" d="M27.19,25.06c.72.72.72,1.89,0,2.61-.72.72-1.89.72-2.61,0l-4.61-4.61,1.31-1.3,1.3-1.31,4.61,4.61Z"/>
          <line class="stroke-navoutline transition-all duration-500 ease-in-out" x1="21.27" y1="21.76" x2="18.26" y2="18.75"/>
        </svg>
        <div id="SearchText" class="text-sm text-navoutline transition-all duration-500 ease-in-out">Search</div>
      </button>
    </div>
  </div>
</nav>

{#if $isSearchActive}
<div id="searchModal" aria-modal="true" role="dialog">
  <button on:click={closeSearchModal}>Close</button>
  
</div>
{/if} -->

<script>
  import { cubicOut } from 'svelte/easing';

  // Reactive variable to manage the active state of the buttons
  let activeButton = null;

  // Function to toggle the active state
  function setActiveButton(button) {
    activeButton = activeButton === button ? null : button;
  }

  // Custom transition function for scaling
  function animateTab(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = cubicOut(t);
        return `
          transform: scale(${eased});
          transition: fill ${duration}ms ease;
        `;
      }
    };
  }
</script>

<style>
  .tab-bar {
    min-height: 95px;
    height: 104px;
    max-height: 20%;
    padding-top: 15px;
    z-index: 999999;
  }

  .tab-bar .nav-button button {
    width: 60px;
    height: 45px;
  }

  :root {
    --color-navback: #393b48;
    --color-navbutton: #eabb67;
    --color-navaccent: #eabb67;
    --color-navoutline: #f3f1eb;
    --color-navlines: #f3f1eb;
    --color-navgray: rgba(235,236,239,.25);
    --custom-up-shadow-default: 0 -3px 4px rgba(33,37,56,.5);
    --custom-shadow-default: 0 0 8px rgba(33,37,56,1);
  }

  .drop-shadow-custom {
    filter: drop-shadow(var(--custom-up-shadow-default));
  }

  .active-circle {
    fill: var(--color-navgray);
    stroke: none;
  }

  .inactive-circle {
    fill: none;
    stroke: none;
  }

  .active-map {
    fill: var(--color-navgray);
    stroke: var(--color-navoutline);
  }

  .inactive-map,
  .inactive-glass,
  .inactive-handle {
    fill: none;
    stroke: var(--color-navoutline);
  }

  .active-pin,
  .active-handle {
    fill: var(--color-navaccent);
    stroke: var(--color-navoutline);
  }

  .active-glass {
    fill: var(--color-navgray);
    stroke: var(--color-navoutline);
  }

  .inactive-pin {
    fill: var(--color-navback);
    stroke: var(--color-navoutline);
  }

  .active-search-text, .active-dir-text {
    color: var(--color-navaccent);
  }

  .inactive-search-text, .inactive-dir-text {
    color: var(--color-navoutline);
  }

  .stroke-animate {
    transition: all 0.5s ease-in-out;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawPath 5s forwards;
  }

  .menu-btn .btn-line {
    background: var(--color-navlines);
    height: 2px;
    position: absolute;
    transition: all 0.5s ease-in-out;
  }

  .menu-btn .line1 {
    top: 10%;
    width: 80%;
  }

  .menu-btn .line2 {
    top: 50%;
    width: 100%;
  }

  .menu-btn .line3 {
    top: 50%;
    width: 100%;
  }

  .menu-btn .line4 {
    top: 90%;
    width: 80%;
  }

  .menu-btn.active .line1 {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 100%;
  }

  .menu-btn.active .line2 {
    opacity: 0;
  }

  .menu-btn.active .line3 {
    opacity: 0;
  }

  .menu-btn.active .line4 {
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    width: 100%;
  }

  @keyframes drawPath {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
</style>

<nav class="tab-bar fixed inset-x-0 bottom-0 max-w-full md:max-w-custom mx-auto custom:rounded-bl-large custom:rounded-br-large overflow-hidden custom:mb-5">
  <svg id="TabNavBack" data-name="Tab Nav Background" class="absolute bottom-0 w-screen sm:w-full overflow-visible h-auto pt-[10px]" viewBox="0 0 430 94.33" preserveAspectRatio="xMidYMin slice">
    <path class="navback fill-navback drop-shadow-custom" d="M421.01,21.48c4.96,0,8.99,4.71,8.99,9.67v63.18s-429.84,0-429.84,0l-.16-63.18c0-4.96,4.03-9.67,8.99-9.67l163.72.11v-.05c4.85-.12,8.99-2.11,10.77-4.92.06-.08.04-.05.05-.07C193.59,2.95,203.56-.06,215,0c11.2.06,21.41,2.95,31.46,16.55.01.02-.01-.01.05.07,2.49,4.15,6.07,5.25,10.77,4.92l163.72-.06Z"/>
  </svg>
  <div class="links flex w-full absolute left-0 bottom-2 right-0">
    <div class="directory-button flex-1 text-center -mt-1">
      <a href="#" id="Directory" on:click={() => setActiveButton('Directory')} class="w-full h-full cursor-pointer" aria-label="Go to Directory page">
        <svg data-name="Directory Icon" class="w-1/6 mx-auto" viewBox="0 0 26.59 27.28" preserveAspectRatio="xMidYMin slice">
          <g id="MapBkgnd">
            <path id="mapPath1" class="stroke-1 transition-all duration-500 ease-in-out" class:active-map={activeButton === 'Directory'} class:inactive-map={activeButton !== 'Directory'} class:stroke-animate={activeButton === 'Directory'} d="M26.26,4.86v17.79c0,.34-.2.64-.51.78l-7.78,3.46c-.11.05-.23.07-.35.07V7.3c.12,0,.24-.02.35-.07l7.07-3.15c.27-.12.58-.1.83.06.25.16.39.43.39.72Z"/>
            <path id="mapPath2" class="stroke-1 transition-all duration-500 ease-in-out" class:active-map={activeButton === 'Directory'} class:inactive-map={activeButton !== 'Directory'} class:stroke-animate={activeButton === 'Directory'} d="M17.62,9.17v17.79c-.12,0-.24-.02-.35-.07l-7.94-3.53c-.11-.05-.23-.07-.35-.07V3.62c.12,0,.24.03.35.07l7.94,3.53c.11.05.23.07.35.07v1.88Z"/>
            <path id="mapPath3" class="stroke-1 transition-all duration-500 ease-in-out" class:active-map={activeButton === 'Directory'} class:inactive-map={activeButton !== 'Directory'} class:stroke-animate={activeButton === 'Directory'} d="M8.97,5.71v17.57c-.12,0-.24.03-.35.07l-7.07,3.15c-.27.12-.58.1-.83-.06s-.39-.43-.39-.72V7.94c0-.34.2-.64.51-.78l7.78-3.46c.11-.05.23-.07.35-.07v2.09Z"/>
          </g>
          <g id="MapLines">
            <path class="stroke-navoutline fill-none" class:stroke-animate={activeButton === 'Directory'} d="M8.97,23.28c-.12,0-.24.03-.35.07l-7.07,3.15c-.27.12-.58.1-.83-.06s-.39-.43-.39-.72V7.94c0-.34.2-.64.51-.78l7.78-3.46c.11-.05.23-.07.35-.07s.24.03.35.07l7.94,3.53c.11.05.23.07.35.07s.24-.02.35-.07l7.07-3.15c.27-.12.58-.1.83.06.25.16.39.43.39.72v17.79c0,.34-.2.64-.51.78l-7.78,3.46c-.11.05-.23.07-.35.07s-.24-.02-.35-.07l-7.94-3.53c-.11-.05-.23-.07-.35-.07Z"/>
            <polyline class="stroke-navoutline fill-none" class:stroke-animate={activeButton === 'Directory'} points="17.62 26.96 17.62 26.96 17.62 9.17"/>
            <line class="stroke-navoutline fill-none" class:stroke-animate={activeButton === 'Directory'} x1="8.97" y1="23.28" x2="8.97" y2="5.71"/>
          </g>
          <g id="Pin">
            <circle class="stroke-navoutline fill-navback" class:stroke-animate={activeButton === 'Directory'} cx="7.45" cy="4.22" r="1.62"/>
            <path class="stroke-1 fill-navback transition-all duration-500 ease-in-out" class:active-pin={activeButton === 'Directory'} class:inactive-pin={activeButton !== 'Directory'} class:stroke-animate={activeButton === 'Directory'} d="M10.86,4.22c0,.73-.23,1.41-.62,1.96h0l-2.79,3.96-2.79-3.96h0c-.39-.55-.62-1.23-.62-1.96,0-1.88,1.53-3.41,3.41-3.41s3.41,1.53,3.41,3.41ZM9.06,4.22c0-.89-.72-1.62-1.62-1.62s-1.62.72-1.62,1.62.72,1.62,1.62,1.62,1.62-.72,1.62-1.62Z"/>
          </g>
        </svg>
        <div id="DirText" class="text-sm" class:active-dir-text={activeButton === 'Directory'} class:inactive-dir-text={activeButton !== 'Directory'} in:animateTab={{ duration: 500 }}>
          Directory
        </div>
      </a>
    </div>
    <div class="nav-button text-center -mt-1">
      <button id="NavHamburger" on:click={() => setActiveButton('NavHamburger')} class="bg-navbutton transition-all shadow-custom duration-100 ease-in-out text-navlines rounded-full" style="width: 60px" aria-haspopup="dialog" aria-expanded={activeButton === 'NavHamburger'} aria-controls="mainNavModal" aria-label="Open navigation menu">
        <div class="menu-btn m-auto relative transition-all duration-500 ease-in-out cursor-pointer" style="width: 30px; height: 30px;" class:active={activeButton === 'NavHamburger'}>
          <span class="btn-line line1"></span>
          <span class="btn-line line2"></span>
          <span class="btn-line line3"></span>
          <span class="btn-line line4"></span>
        </div>
      </button>
    </div>
    <div class="search-button flex-1 text-center -mt-1">
      <button id="Search" on:click={() => setActiveButton('Search')} class="w-full h-full cursor-pointer" aria-haspopup="dialog" aria-expanded={activeButton === 'Search'} aria-controls="searchModal" aria-label="Open">
        <svg data-name="Search Icon" class="w-1/6 mx-auto" viewBox="0 0 28.07 28.55" preserveAspectRatio="xMidYMin slice">
          <circle id="ActiveCircle" cx="15.4" cy="15.43" r="10.04" class:active-circle={activeButton === 'Search'} class:inactive-circle={activeButton !== 'Search'} />
          <path id="Glass" d="M10.84.83c5.8,0,10.5,4.7,10.5,10.5,0,2.9-1.18,5.52-3.08,7.42s-4.52,3.08-7.42,3.08C5.04,21.82.34,17.12.34,11.33S5.04.83,10.84.83Z" class="stroke-1 transition-all duration-500 ease-in-out" class:active-glass={activeButton === 'Search'} class:inactive-glass={activeButton !== 'Search'} class:stroke-animate={activeButton === 'Search'} />
          <path id="Handle" d="M27.19,25.06c.72.72.72,1.89,0,2.61-.72.72-1.89.72-2.61,0l-4.61-4.61,1.31-1.3,1.3-1.31,4.61,4.61Z" class="stroke-1 transition-all duration-500 ease-in-out" class:active-handle={activeButton === 'Search'} class:inactive-handle={activeButton !== 'Search'} class:stroke-animate={activeButton === 'Search'} />
          <line x1="21.27" y1="21.76" x2="18.26" y2="18.75" class="stroke-1 stroke-navoutline" />
        </svg>
        <div id="SearchText" class="text-sm" class:active-search-text={activeButton === 'Search'} class:inactive-search-text={activeButton !== 'Search'}>
          Search
        </div>
      </button>
    </div>
  </div>
</nav>