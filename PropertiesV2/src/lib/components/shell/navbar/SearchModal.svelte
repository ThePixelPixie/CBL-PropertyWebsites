<script>
  import { createEventDispatcher } from 'svelte';

  export let isOpen = false;
  const dispatch = createEventDispatcher();

  let search = "";
  let isEnteringSearch = false;
  let returnList = [];
  let isHovered = false;
  let focusedIndex = -1;

  let popularSearches = ['Stanley', 'Hours', 'Miniso', 'Deals', 'Directory', 'Cava'];

  let searchItems = [
    { name: "Abuelo's", category: "Eat", text: "Abuelo's in Eat" },
    { name: "Banter", category: "Shop", text: "Banter in Shop" },
    { name: "Barnes & Noble", category: "Shop", text: "Barnes & Noble in Shop" },
    { name: "Baskin Robbins", category: "Eat", text: "Baskin Robbins in Eat" },
    { name: "Bath & Body Works", category: "Shop", text: "Bath & Body Works in Shop" },
    { name: "Beauty Express", category: "Shop", text: "Beauty Express in Shop" },
    { name: "Buckle", category: "Shop", text: "Buckle in Shop" },
    { name: "Buff City Soap", category: "Shop", text: "Buff City Soap in Shop" },
    { name: "Build-a-Bear Workshop", category: "Shop", text: "Build-a-Bear Workshop in Shop" },
    { name: "Brunch", category: "Directory", text: "Brunch in Directory" },
    { name: "Buckle", category: "Deals", text: "Buckle in Deals" },
    { name: "Buckle", category: "Directory", text: "Buckle in Directory" }
  ];

  function openModal() {
    isOpen = true;
  }

  function closeModal() {
    isOpen = false;
    search = "";
    returnList = [];
    dispatch('close');
  }

  function getSearchResults() {
    const lowerCaseSearch = search.toLowerCase();
    if (lowerCaseSearch.length === 0) {
      returnList = popularSearches.map(item => ({ text: item, isPopular: true }));
    } else {
      const matches = searchItems
        .filter(item => item.name.toLowerCase().includes(lowerCaseSearch))
        .map(item => {
          const boldLetters = lowerCaseSearch.split('');
          return { text: item.text, boldLetters };
        });

      if (matches.length > 0) {
        returnList = matches;
      } else {
        returnList = [{ text: "No matches", noMatch: true }];
      }
    }
  }

  function highlightMatch(item) {
    let text = item.text;

    if (item.noMatch) {
      return `<span>${text}</span>`;
    }

    if (item.boldLetters) {
      let chars = text.split('');
      for (let i = 0; i < chars.length; i++) {
        if (item.boldLetters.includes(chars[i].toLowerCase())) {
          chars[i] = `<strong class="font-bold">${chars[i]}</strong>`;
        }
      }
      return chars.join('');
    } else {
      return text;
    }
  }

  function handleFocus() {
    isEnteringSearch = true;
    if (search.length === 0) {
      returnList = popularSearches.map(item => ({ text: item, isPopular: true }));
    }
  }

  function handleBlur() {
    setTimeout(() => {
      if (!isHovered) {
        isEnteringSearch = false;
        returnList = [];
      }
    }, 200);
  }

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
  }

  function handleInput(e) {
    search = e.target.value;
    getSearchResults();
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      focusedIndex = (focusedIndex + 1) % returnList.length;
    } else if (e.key === 'ArrowUp') {
      focusedIndex = (focusedIndex - 1 + returnList.length) % returnList.length;
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      selectItem(returnList[focusedIndex]);
    }
  }

  function selectItem(item) {
    search = item.text;
    returnList = [];

    isEnteringSearch = true;
  }
</script>

<div id="overlay" class={`inset-0 bg-white bg-opacity-50 backdrop-blur-8 h-screen w-screen transition-opacity duration-300 ${isOpen ? 'fixed opacity-100 z-[115]' : 'hidden opacity-0 pointer-events-none'}`} on:click={closeModal}></div>
<div id="drawerSearch" class={`fixed w-[95%] md:max-w-[430px] left-2/4 -translate-x-1/2 transition-all duration-500 h-[90vh] overflow-y-scroll ${isOpen ? 'opacity-100 bottom-14' : 'opacity-0 -bottom-full'} ease-in-out z-[119]`} style="scrollbar-width: none; -ms-overflow-style: none;">
    <div class="bg-accent1 h-full rounded-t-xl pb-20 flex flex-col justify-between md:justify-start">
        <div class="flex justify-between items-center p-4 border-b">
            <a class="cursor-pointer" href="/" aria-label="Hamilton Place - Home">
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
            <button on:click={closeModal} class="close" type="button">Close</button>
        </div>
        <div class="p-4 flex flex-col relative">
            <ul 
              id="output" 
              class={`${returnList.length > 0 && isEnteringSearch ? 'flex flex-col-reverse md:flex-col -mb-12 md:mb-0 px-16 pb-2 absolute bottom-full md:top-full md:bottom-0 left-0 w-full max-h-full' : 'hidden'} bg-transparent`}
              on:mouseenter={handleMouseEnter}
              on:mouseleave={handleMouseLeave}
            >
              {#if returnList.length > 0 && returnList[0].isPopular}
                <div class="popular-search-title text-white pl-3 py-2 font-bold">Popular Searches</div>
              {/if}

              {#each returnList as item, index}
                {#if item.noMatch}
                  <div class="prediction-item text-white pl-3 py-2 italic">No matches</div>
                {:else}
                  <li class="prediction-item pl-3 py-2 hover:bg-accent2 {index === focusedIndex ? 'bg-accent2' : ''}">
                    <a aria-label="Link to Term" href="#" class="text-white hover:bg-accent2 w-full cursor-pointer" on:click|preventDefault={() => selectItem(item)} tabindex="0">
                      {@html highlightMatch(item)}
                    </a>
                  </li>
                {/if}
              {/each}
            </ul>
            <div class={`input-box relative ${isEnteringSearch ? 'border-entering' : ''}`}>
                <i class={`fa fa-search input-icon ${isEnteringSearch ? 'text-white rotate-90' : 'text-white'}`} aria-hidden="true"></i>
                <form class="input-form relative" on:submit|preventDefault>
                    <input
                      id="search"
                      type="text"
                      placeholder="Search Hamilton Place"
                      name="search"
                      autocomplete="off"
                      class="placeholder-white text-white"
                      on:focus={handleFocus}
                      on:blur={handleBlur}
                      on:input={handleInput}
                      on:keydown={handleKeyDown}
                      bind:value={search}
                    >
                </form>
                <svg class="input-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style="enable-background:new 0 0 671 111;" xml:space="preserve">
                    <path class={`${isEnteringSearch? 'fill-transparent stroke-white' : 'fill-none stroke-white'}`} d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"></path>
                    <path class={`${isEnteringSearch? 'fill-transparent stroke-white' : 'fill-none stroke-white'}`} d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"></path>
                </svg>
                <div class={`go-icon ${isEnteringSearch ? 'opacity-1 rotate-0 text-white' : 'opacity-0 rotate-45 text-white'}`}>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
</div>