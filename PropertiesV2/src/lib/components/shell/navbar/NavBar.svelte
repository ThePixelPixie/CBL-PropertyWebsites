<script>
  //import { Router, Route, Link } from 'svelte-routing';
  import HamburgerModal from "./HamburgerModal.svelte";
  import SearchModal from "./SearchModal.svelte";

  let activeButton = null;

  function setActiveButton(button) {
    console.log('Setting active button to:', button);
    activeButton = activeButton === button ? null : button;
  }

  function closeModal() {
    console.log('Closing modal, activeButton was:', activeButton);
    const buttonToFocus = activeButton;
    activeButton = null;
    if (buttonToFocus) {
      console.log('Focusing on button:', buttonToFocus);
      document.getElementById(activeButton)?.focus();
    }
  }
</script>

<style>
  .filter-shadow-custom {
    filter: drop-shadow(theme("boxShadow.custom"));
  }

  .stroke-animate {
    transition: all 0.5s ease-in-out;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawPath 5s forwards;
  }

  @keyframes drawPath {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  /* for 3-line hamburger */
  .menu-btn .line2 {
    width: 60%;
    height: 2px;
    background-color: #ecf0f1;
    display: block;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    z-index: 999;
  }

  .menu-btn:hover {
    cursor: pointer;
  }

  .menu-btn.active {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .menu-btn.active .line2:nth-child(2) {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }

  .menu-btn .line2:nth-child(2) {
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  .menu-btn.active .line2:nth-child(2) {
    opacity: 0;
  }

  .menu-btn.active .line2:nth-child(1),
  .menu-btn.active .line2:nth-child(3) {
    width: 40%;
    -webkit-transform-origin: left;
    -moz-transform-origin: left;
    -ms-transform-origin: left;
    -o-transform-origin: left;
    transform-origin: left;
  }

  .menu-btn.active .line2:nth-child(1) {
    -webkit-transform: translateY(12.5px) rotate(-45deg);
    -ms-transform: translateY(12.5px) rotate(-45deg);
    -o-transform: translateY(12.5px) rotate(-45deg);
    transform: translateY(12.5px) rotate(-45deg);
  }

  .menu-btn.active .line2:nth-child(3) {
    -webkit-transform: translateY(-12.5px) rotate(45deg);
    -ms-transform: translateY(-12.5px) rotate(45deg);
    -o-transform: translateY(-12.5px) rotate(45deg);
    transform: translateY(-12.5px) rotate(45deg);
  }
</style>

<nav class="h-[93px] fixed bottom-0 w-screen max-w-custom left-1/2 -translate-x-1/2 z-[120]">
  <svg id="TabNavBack" data-name="Tab Nav Background" class="absolute top-0 bottom-0 left-0 right-0 h-full w-full overflow-visible" viewBox="0 0 430 94.33" preserveAspectRatio="none">
    <path class="fill-dark drop-shadow-custom" d="M421.01,21.48c4.96,0,8.99,4.71,8.99,9.67v63.18s-429.84,0-429.84,0l-.16-63.18c0-4.96,4.03-9.67,8.99-9.67l163.72.11v-.05c4.85-.12,8.99-2.11,10.77-4.92.06-.08.04-.05.05-.07C193.59,2.95,203.56-.06,215,0c11.2.06,21.41,2.95,31.46,16.55.01.02-.01-.01.05.07,2.49,4.15,6.07,5.25,10.77,4.92l163.72-.06Z" />
  </svg>

  <div class="links flex flex-row justify-evenly w-full h-auto relative pb-1">
    <div class="directory-button w-[33%] h-full text-center flex flex-col justify-end -ml-[16.6%] mt-10">
      <a href="/directory" id="Directory" on:click={() => setActiveButton("Directory")} class="w-full h-full -mt-1 cursor-pointer" aria-label="Go to Directory page" aria-describedby="DirText" on:click={closeModal}>
        <svg data-name="Directory Icon" class="w-full h-7 mx-auto" viewBox="0 0 26.59 27.28" preserveAspectRatio="xMidYMid meet">
          <g id="MapBkgnd">
            <path id="mapPath1" class="stroke-0 transition-all duration-500 ease-in-out {activeButton === 'Directory' ? 'fill-gray-500 stroke-navlines stroke-animate' : 'fill-none stroke-navlines'}" d="M26.26,4.86v17.79c0,.34-.2.64-.51.78l-7.78,3.46c-.11.05-.23.07-.35.07V7.3c.12,0,.24-.02.35-.07l7.07-3.15c.27-.12.58-.1.83.06.25.16.39.43.39.72Z" />
            <path id="mapPath2" class="stroke-0 transition-all duration-500 ease-in-out {activeButton === 'Directory' ? 'fill-gray-500 stroke-navlines stroke-animate' : 'fill-none stroke-navlines'}" d="M17.62,9.17v17.79c-.12,0-.24-.02-.35-.07l-7.94-3.53c-.11-.05-.23-.07-.35-.07V3.62c.12,0,.24.03.35.07l7.94,3.53c.11.05.23.07.35.07v1.88Z" />
            <path id="mapPath3" class="stroke-0 transition-all duration-500 ease-in-out {activeButton === 'Directory' ? 'fill-gray-500 stroke-navlines stroke-animate' : 'fill-none stroke-navlines'}" d="M8.97,5.71v17.57c-.12,0-.24.03-.35.07l-7.07,3.15c-.27.12-.58.1-.83-.06s-.39-.43-.39-.72V7.94c0-.34.2-.64.51-.78l7.78-3.46c.11-.05.23-.07.35-.07v2.09Z" />
          </g>
          <g id="MapLines">
            <path class="stroke-navlines stroke-1 fill-none" class:stroke-animate={activeButton === "Directory"} d="M8.97,23.28c-.12,0-.24.03-.35.07l-7.07,3.15c-.27.12-.58.1-.83-.06s-.39-.43-.39-.72V7.94c0-.34.2-.64.51-.78l7.78-3.46c.11-.05.23-.07.35-.07s.24.03.35.07l7.94,3.53c.11.05.23.07.35.07s.24-.02.35-.07l7.07-3.15c.27-.12.58-.1.83.06.25.16.39.43.39.72v17.79c0,.34-.2.64-.51.78l-7.78,3.46c-.11.05-.23.07-.35.07s-.24-.02-.35-.07l-7.94-3.53c-.11-.05-.23-.07-.35-.07Z" />
            <polyline class="stroke-navlines stroke-1 fill-none" class:stroke-animate={activeButton === "Directory"} points="17.62 26.96 17.62 26.96 17.62 9.17" />
            <line class="stroke-navlines stroke-1 fill-none" class:stroke-animate={activeButton === "Directory"} x1="8.97" y1="23.28" x2="8.97" y2="5.71" />
          </g>
          <g id="Pin">
            <circle class="stroke-navlines stroke-1 fill-dark" class:stroke-animate={activeButton === "Directory"} cx="7.45" cy="4.22" r="1.62" />
            <path class="stroke-1 transition-all duration-500 ease-in-out {activeButton === 'Directory' ? 'fill-accent1-l20 stroke-navlines stroke-animate' : 'fill-dark stroke-navlines'}" d="M10.86,4.22c0,.73-.23,1.41-.62,1.96h0l-2.79,3.96-2.79-3.96h0c-.39-.55-.62-1.23-.62-1.96,0-1.88,1.53-3.41,3.41-3.41s3.41,1.53,3.41,3.41ZM9.06,4.22c0-.89-.72-1.62-1.62-1.62s-1.62.72-1.62,1.62.72,1.62,1.62,1.62,1.62-.72,1.62-1.62Z" />
          </g>
        </svg>
        <div id="DirText" class="text-sm mx-auto {activeButton === 'Directory' ? 'text-accent1-l20' : 'text-navlines'}">Directory</div>
      </a>
    </div>

    <div class="nav-button w-1/6 h-[87px] absolute mx-auto pt-[5px] px-[2.5px] flex flex-col">
      <button id="NavHamburger" on:click={() => setActiveButton("NavHamburger")} class="flex flex-col justify-center w-full h-full transition-all duration-100 relative ease-in-out" aria-haspopup="dialog" aria-expanded={activeButton === "NavHamburger"} aria-controls="mainNavModal" aria-label="Open navigation menu">
        <svg id="Button" aria-hidden="true" class="absolute w-full h-full left-0 right-0 top-0 bottom-0" data-name="Button" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 60 75.8" preserveAspectRatio="none">
          <path class={`fill-accent2-d40 transition-all duration-500 ease-in-out ${activeButton === "NavHamburger" ? "filter-shadow-none scale-[96.5%] origin-center" : "filter-shadow-custom"}`} d="M57.5,30.6v14.6c0,15.2-12.3,27.4-27.4,27.5h0c-15.2,0-27.5-12.3-27.5-27.5v-14.6C2.5,15.4,14.8,3.1,30,3.1h0c15.1,0,27.4,12.3,27.4,27.5Z" />
        </svg>
        <div class="menu-btn w-full h-full flex flex-col justify-center transition-all duration-500 ease-in-out cursor-pointer" aria-label="Navigation menu toggle" class:active={activeButton === "NavHamburger"}>
          <span class="line2"></span>
          <span class="line2"></span>
          <span class="line2"></span>

        </div>
      </button>
    </div>

    <div class="search-button w-[33%] h-full text-center flex flex-col self-baseline -mr-[16.6%] mt-10">
      <button id="Search" on:click={() => setActiveButton("Search")} class="w-full h-full -mt-1 cursor-pointer" aria-haspopup="dialog" aria-expanded={activeButton === "Search"} aria-controls="searchModal" aria-label="Open">
        <svg data-name="Search Icon" class="w-full h-7 mx-auto" viewBox="0 0 28.07 28.55" preserveAspectRatio="xMidYMid meet">
          <circle id="ActiveCircle" cx="15.4" cy="15.43" r="10.04" class="{activeButton === 'Search' ? 'fill-gray-500' : 'fill-none'} stroke-none" />
          <path id="Glass" d="M10.84.83c5.8,0,10.5,4.7,10.5,10.5,0,2.9-1.18,5.52-3.08,7.42s-4.52,3.08-7.42,3.08C5.04,21.82.34,17.12.34,11.33S5.04.83,10.84.83Z" class="stroke-1 transition-all duration-500 ease-in-out {activeButton === 'Search' ? 'fill-gray-500 stroke-navlines stroke-animate' : 'fill-none stroke-navlines'}"/>
          <path id="Handle" d="M27.19,25.06c.72.72.72,1.89,0,2.61-.72.72-1.89.72-2.61,0l-4.61-4.61,1.31-1.3,1.3-1.31,4.61,4.61Z" class="stroke-1 transition-all duration-500 ease-in-out {activeButton === 'Search' ? 'fill-accent1-l20 stroke-navlines stroke-animate' : 'fill-none stroke-navlines'}"/>
          <line x1="21.27" y1="21.76" x2="18.26" y2="18.75" class="stroke-1 stroke-navlines" />
        </svg>
        <div id="SearchText" class="text-sm mx-auto {activeButton === 'Search' ? 'text-accent1-l20' : 'text-navlines'}">Search</div>
      </button>
    </div>
  </div>
</nav>

<HamburgerModal isOpen={activeButton === "NavHamburger"} on:close={closeModal} />
<SearchModal isOpen={activeButton === "Search"} on:close={closeModal} />