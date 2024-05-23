<script>
  import { onMount } from 'svelte';

  let hourGroup;
  let minuteGroup;

  onMount(() => {
    if (hourGroup && minuteGroup) {
      // Declare and Initialize the inbuilt date function
      const date = new Date();

      // Hours/Minutes
      let hr = date.getHours();
      let min = date.getMinutes();

      // Declare and Initialize your variables and create positions for each.
      let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
      let minPosition = (min * 360) / 60;

      // Create a function that actually runs the clock
      const runClock = () => {
        // Set each position when the function is called
        hrPosition = hrPosition + 3 / 360;
        minPosition = minPosition + 6 / 60;

        // Set the transformation for each arm
        hourGroup.style.transform = `rotate(${hrPosition}deg)`;
        minuteGroup.style.transform = `rotate(${minPosition}deg)`;
      };

      // Use the inbuilt setInterval function to invoke the method we created earlier
      setInterval(runClock, 1000);
    }
  });
</script>

<style>
  .header-bar {
    height: 80px;
    padding: 1em;
    margin-top: 60px; /* Adjust this value based on the alert bar height */
    transition: margin-top 0.7s ease-out;
  }

  #Logo {
    height: auto;
    max-height: 50px;
    width: auto;
  }

  .clockbox #clock {
    width: 36.6px;
    height: 36.6px;
  }

  .clockbox .circle {
    fill: none;
    stroke: #242121;
    stroke-width: 22.5;
    stroke-miterlimit: 0;
  }

  .clockbox .hour-marks {
    fill: none;
    stroke: #242121;
    stroke-width: 22.5;
    stroke-miterlimit: 0;
  }

  .clockbox .mid-circle {
    fill: #242121;
  }

  .clockbox #hour .hour-arm {
    
    fill: none;
    stroke: #242121;
    stroke-width: 17;
    stroke-miterlimit: 10;
  }

  .clockbox #minute .minute-arm {
    fill: none;
    stroke: #242121;
    stroke-width: 11;
    stroke-miterlimit: 10;
  }

  .clockbox #hour,
  .clockbox #minute {
    transform-origin: 300px 300px;
    transition: transform 0.5s ease-in-out;
  }

  .clockbox .sizing-box {
    fill: none;
  }
</style>

<header id="logo-bar" class="header-bar flex flex-col w-full will-change-transform transition-margin-top duration-700 ease-out mx-auto px-4">
  <div class="flex grow w-full">
    <div class="flex justify-start items-center w-1/2 space-x-4">
      <svg id="Logo" class="w-auto max-h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.51 96.42">
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
    </div>
    <div class="flex w-1/2 justify-end items-center">
      <div class="flex justify-end w-full items-center">
        <div class="w-1/4 text-right clockbox">
          <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 600 600">
            <g id="face">
              <circle class="circle" cx="300" cy="300" r="253.9" />
              <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6" />
              <circle class="mid-circle" cx="300" cy="300" r="16.2" />
            </g>
            <g id="hour" bind:this={hourGroup}>
              <path class="hour-arm" d="M300.5 298V142" />
              <circle class="sizing-box" cx="300" cy="300" r="253.9" />
            </g>
            <g id="minute" bind:this={minuteGroup}>
              <path class="minute-arm" d="M300.5 298V67" />
              <circle class="sizing-box" cx="300" cy="300" r="253.9" />
            </g>
          </svg>
        </div>
        <div class="w-3/4 pl-4 text-left">
          <span class="block font-bold">Open Now</span>
          10:00am - 8:00pm
        </div>
      </div>
    </div>
  </div>
</header>