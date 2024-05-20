<script>
  let isMainNavActive = false;
  let isDirectoryActive = false;
  let isSearchActive = false;

  function deactivateAll() {
    isMainNavActive = false;
    isDirectoryActive = false;
    isSearchActive = false;
  }

  function activateMainNav() {
    deactivateAll();
    isMainNavActive = !isMainNavActive;
  }

  function activateDirectory() {
    deactivateAll();
    isDirectoryActive = true;
  }

  function activateSearch() {
    deactivateAll();
    isSearchActive = true;
  }

  function closeSearchModal() {
    deactivateAll();
  }
</script>

<nav class="tab-bar fixed inset-x-0 bottom-0 max-w-full md:max-w-custom mx-auto custom:rounded-bl-large custom:rounded-br-large overflow-hidden custom:mb-5">
  <svg id="TabNavBack" data-name="Tab Nav Background" class="absolute bottom-0 w-screen sm:w-full overflow-visible h-auto pt-[10px]" viewBox="0 0 430 94.33" preserveAspectRatio="xMidYMin slice">
    <path class="navback fill-navback drop-shadow-custom" d="M421.01,21.48c4.96,0,8.99,4.71,8.99,9.67v63.18s-429.84,0-429.84,0l-.16-63.18c0-4.96,4.03-9.67,8.99-9.67l163.72.11v-.05c4.85-.12,8.99-2.11,10.77-4.92.06-.08.04-.05.05-.07C193.59,2.95,203.56-.06,215,0c11.2.06,21.41,2.95,31.46,16.55.01.02-.01-.01.05.07,2.49,4.15,6.07,5.25,10.77,4.92l163.72-.06Z"/>
  </svg>
  <div class="links flex w-full absolute left-0 bottom-2 right-0">
    <div class="directory-button flex-1 text-center -mt-1">
      <a href="#" on:click|preventDefault={activateDirectory} class="w-full h-full cursor-pointer" aria-label="Go to Directory page">
        <svg id="Directory" data-name="Directory Icon" class="w-1/6 mx-auto" viewBox="0 0 26.59 27.28" preserveAspectRatio="xMidYMin slice">
          <g id="Map">
            <g id="MapBkgnd">
              <path class="fill-navback transition-all duration-500 ease-in-out" d="M26.26,4.86v17.79c0,.34-.2.64-.51.78l-7.78,3.46c-.11.05-.23.07-.35.07V7.3c.12,0,.24-.02.35-.07l7.07-3.15c.27-.12.58-.1.83.06.25.16.39.43.39.72Z"/>
              <path class="fill-navback transition-all duration-500 ease-in-out" d="M17.62,9.17v17.79c-.12,0-.24-.02-.35-.07l-7.94-3.53c-.11-.05-.23-.07-.35-.07V3.62c.12,0,.24.03.35.07l7.94,3.53c.11.05.23.07.35.07v1.88Z"/>
              <path class="fill-navback transition-all duration-500 ease-in-out" d="M8.97,5.71v17.57c-.12,0-.24.03-.35.07l-7.07,3.15c-.27.12-.58.1-.83-.06s-.39-.43-.39-.72V7.94c0-.34.2-.64.51-.78l7.78-3.46c.11-.05.23-.07.35-.07v2.09Z"/>
            </g>
            <g id="MapLines">
              <path class="stroke-navoutline fill-none" d="M8.97,23.28c-.12,0-.24.03-.35.07l-7.07,3.15c-.27.12-.58.1-.83-.06s-.39-.43-.39-.72V7.94c0-.34.2-.64.51-.78l7.78-3.46c.11-.05.23-.07.35-.07s.24.03.35.07l7.94,3.53c.11.05.23.07.35.07s.24-.02.35-.07l7.07-3.15c.27-.12.58-.1.83.06.25.16.39.43.39.72v17.79c0,.34-.2.64-.51.78l-7.78,3.46c-.11.05-.23.07-.35.07s-.24-.02-.35-.07l-7.94-3.53c-.11-.05-.23-.07-.35-.07Z"/>
              <polyline class="stroke-navoutline fill-none" points="17.62 26.96 17.62 26.96 17.62 9.17"/>
              <line class="stroke-navoutline fill-none" x1="8.97" y1="23.28" x2="8.97" y2="5.71"/>
            </g>
          </g>
          <g id="Pin">
            <circle class="fill-navback stroke-navoutline" cx="7.45" cy="4.22" r="1.62"/>
            <path class="fill-navback stroke-navoutline transition-all duration-500 ease-in-out" d="M10.86,4.22c0,.73-.23,1.41-.62,1.96h0l-2.79,3.96-2.79-3.96h0c-.39-.55-.62-1.23-.62-1.96,0-1.88,1.53-3.41,3.41-3.41s3.41,1.53,3.41,3.41ZM9.06,4.22c0-.89-.72-1.62-1.62-1.62s-1.62.72-1.62,1.62.72,1.62,1.62,1.62,1.62-.72,1.62-1.62Z"/>
          </g>
        </svg>
        <div id="DirText" class="text-sm text-navoutline transition-all duration-500 ease-in-out">Directory</div>
      </a>
    </div>
    <div class="nav-button text-center top-[-20%]">
      <button on:click={activateMainNav} class="bg-navbutton transition-all shadow-custom duration-100 ease-in-out text-navlines rounded-full rotate-90" style="width: 60px" aria-haspopup="dialog" aria-expanded={isMainNavActive} aria-controls="mainNavModal" aria-label="Open navigation menu">
        <div id="NavHamburger" class="menu-btn -rotate-90 m-auto relative transition-all duration-500 ease-in-out cursor-pointer" style="width: 30px; height: 30px;">
          <span id="Line1" class="btn-line top-0 h-0.5 w-3/4 block absolute bg-navlines opacity-1 transition-all duration-500 rotate-0 rounded-full" style="margin-left: 12.5%"></span>
          <span id="Line2" class="btn-line top-1/3 h-0.5 w-full left-0 block absolute bg-navlines opacity-1 transition-all duration-500 rotate-0 rounded-full"></span>
          <span id="Line3" class="btn-line top-2/3 h-0.5 w-full right-0 block absolute bg-navlines opacity-1 transition-all duration-500 rotate-0 rounded-full"></span>
          <span id="Line4" class="btn-line top-full h-0.5 w-3/4 block absolute bg-navlines opacity-1 transition-all duration-500 rotate-0 rounded-full" style="margin-left: 12.5%"></span>
        </div>
      </button>
    </div>
    <div class="search-button flex-1 text-center -mt-1">
      <button on:click={activateSearch} class="w-full h-full cursor-pointer" aria-haspopup="dialog" aria-expanded={isSearchActive} aria-controls="searchModal" aria-label="Open">
        <svg id="Search" data-name="Search Icon" class="w-1/6 mx-auto" viewBox="0 0 28.07 28.55" preserveAspectRatio="xMidYMin slice">
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

{#if isSearchActive}
<div id="searchModal" aria-modal="true" role="dialog">
  <button on:click={closeSearchModal}>Close</button>
  <!-- Search form or content here -->
</div>
{/if}

<style>
    .tab-bar {
        min-height: 95px;
        height: 104px;
        max-height: 20%;
        padding-top: 15px;
        z-index:999999;
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
    
     @media (prefers-reduced-motion) {
        .tab-bar .nav-button button:hover,
        .tab-bar .nav-button button:active {
            transform: none;
        }
    }

    .stroke-animate {
        stroke-dasharray: 1000;  /* Length should be enough to cover the whole path */
        stroke-dashoffset: 1000; /* Initially offset by the full length to hide the stroke */
        animation: drawPath 5s forwards; /* Adjust duration as needed */
    }

    @keyframes drawPath {
        to {
            stroke-dashoffset: 0; /* Animate to 0 to reveal the stroke */
        }
    }
</style>