<script>
  import { onMount } from 'svelte';
  import 'intersection-observer';

  export let svgPath = 'M0,828.86l2437.07-1.49s21.86.61,75.41,11.2c53.53,10.57,32.84,1.54,21.36-33.34-11.47-34.89-24.36-85.67-18.75-123.38,5.59-37.69,11.92-303.12,10.26-285.65-1.63,17.46,1.62,332.69-9.54,343.96-11.18,11.24-89.43,75.35-89.43,75.35l12.6-588.01s80.45,4,81.99,12.71c1.57,8.7,5.52,103.34,5.52,103.34l-3.96-101.85,12.83-6.93,31.14,1.8s-1.87-16.88,6.06-57.78c7.94-40.89,23.12-99.88,80.84-97.16,57.69,2.71,75.74,157.41,75.74,157.41,0,0-128.3-1.84-109.16-.67,19.15,1.15,11.48,5.16,13.11,17.23,1.6,12.07-1.09,22.48-8.75,15.31-7.66-7.17,16.41-27.51,16.37-11.12-.04,16.39-15.45,26.27-22.63-30.12-7.16-56.37,15.81-149.16,75.37-154.88,59.54-5.72,70.29,97.08,73.79,137.19,3.5,40.11-7.57,68.76-16.07,57.99-8.5-10.77,8.62-16.41,15.57-3.2,6.98,13.22-4.39,14.36-17.46,5.68-13.08-8.68,18.23-25.76,18.23-25.76l44.97-.51,9.25,66.11-3.91-67.99-280.05-10.8,22.79,617.42,129.17-17.9s363.88,112.55,358.76,111.92c-92.27-11.29-356.84-81.06-356.84-81.06l66.16-534.89s17.16-9.59,40.26-8.58c23.07,1,34.84-4.66,40.18,7.9,5.34,12.55,11.37,32.71,1.06,37.47-10.31,4.76-9.81-11.01.3-18.04,10.09-7.04,8.07,8.86,8.07,8.86,0,0-12.75,28.75-4.42-62.08,8.35-90.82,102.44-144.47,133.2-113.49,30.75,30.97-.25,108.49-2.44,143.95-2.19,35.46,20.4,35.35,8.18,35.68-12.25.33-15.05-18.21-.91-14.49,14.13,3.72,21.23,23.02,3.61,14.63-17.61-8.39-4.11-50.23-4.11-50.23l-64.98,1.99s7.41-142.19,59.67-131.94c52.28,10.25,80.72,126.13,80.72,126.13l29.3,2.68s1.34-.16,20.07,12.07c18.7,12.22,50.26-.54,50.26-.54,0,0,15.75,204.99,48.74,404.46,33.03,199.44,19.12,170.11,3.83,174.7-15.31,4.61-121.93,29.86-121.93,29.86,0,0,6.89-57.38,17.5-117.97,10.65-60.57-4.12-371.89-4.12-371.89,0,0-10.08,242.58,5.61,309.68,15.66,67.07,108.24,160.02,108.24,160.02l-142.07,34.37,9.05-645.89-319.87,28.47,320.84-24.29-29.38,3.2-5.44-122.7s54.79-13.44,77.51,4.13c22.76,17.57,6.72,30.49-4.13,26.36-10.85-4.13,4.13-27.91,17.06-12.4,12.92,15.51-6.72,20.16-24.27-20.68-17.58-40.82,5.68-143.14,73.36-171.05,67.71-27.9,91.47,36.66,88.16,70.34-3.31,33.68-31.78,87.75-26.08,111.94,5.68,24.19,11.85,28.45-1.43,21.82-13.27-6.64,8.54-18.97,14.7-11.38,6.18,7.59,1.91,21.82-9,11.38-11.81-11.31-7.11-39.84-7.11-39.84l-197.32,8.06,310.68-11.86-67.84,4.26s-8.04-18.97-6.15-84.42c1.9-65.45,59.29-77.79,97.7-56.44,38.43,21.34,55.99,146.08,70.69,141.34,14.7-4.75,70.83-9.2,70.83-9.2,0,0-69.9,3.03-103.09,7.3-33.2,4.28-60.47-.35-60.47-.35l-4.48,694.83-127.3-3.01,120.55,13.48s85.34-48.67,159.48-61.4c74.14-12.72,34.45-18.72-29.2-56.89-63.64-38.2-62.89-53.16-61.4-86.11,1.5-32.94-5.98-442.5-5.98-442.5,0,0,28.45,465.71,8.22,507.64-20.21,41.93-66.64,138.5-66.64,138.5l207.4-63.64-19.46-630.9,22.2,631.24';

  let svgElement;
  let pathLength = 0;
  let observer;
  let isVisible = false;

  onMount(() => {
    const path = svgElement.querySelector('path');
    pathLength = path.getTotalLength();

    // Set initial stroke properties
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
          observer.unobserve(entry.target);

          // Add classes for the animation of the rectangles when the path is visible
          svgElement.querySelector('#left-box').classList.add('rect-animation');
          svgElement.querySelector('#center-box').classList.add('rect-animation');
          svgElement.querySelector('#right-box').classList.add('rect-animation');
        }
      });
    }, { threshold: 0.1 });

    if (svgElement) {
      observer.observe(svgElement);
    }

    return () => {
      if (observer && svgElement) {
        observer.unobserve(svgElement);
      }
    };
  });
</script>

<style>
  /* .path-animation {
    animation: dash 4s ease forwards;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: var(--path-length);
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  rect {
    transition: opacity 2s ease;
    animation: fadeIn 2s forwards;
  }

  #left-box {
    animation-delay: 1.6s;
  }

  #center-box {
    animation-delay: 2.4s;
  }

  #right-box {
    animation-delay: 3.2s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  } */
</style>

<section id="ShoppingBags" class="relative w-screen h-auto overflow-hidden flex flex-col justify-start">
    <div class="w-full p-12 md:p-28">
        <h2 class="clamp-md">Shopping at Hamilton Place Mall<span>.</span></h2>
        <h3><i class="fas fa-asterisk" aria-hidden="true"></i> Discover the Charm of Chattanooga</h3>
        <p>Hamilton Place is a regional mall located in Chattanooga, Tennessee, that features a wide array of retail, dining, and entertainment options. In summer 2021, Hamilton Place's Sears redevelopment was completed, which brought Dave & Busters, The Cheesecake Factory, DICK'S Sporting Goods, and a new-to-market 135-room Aloft by Marriott Hotel that features a rooftop bar and a Mean Mug Coffeehouse. Crunch Fitness coming soon.</p>
    </div>
  <!-- <div class="absolute bottom-0 right-12 w-full hidden md:h-1/3 2xl:h-2/3 md:flex md:flex-row md:content-end md:justify-end">
    <svg
        class="w-[150%] h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3566.53 947.44"
        preserveAspectRatio="none"
        bind:this={svgElement}
        style="--path-length: {pathLength}px;"
    >
        <rect id="left-box" class="fill-news" x="2460.4" y="246.89" width="339.05" height="615.75" style="opacity: 0;" />
        <rect id="right-box" class="fill-eat" x="3076.14" y="200.12" width="502.73" height="689.79" style="opacity: 0;" />
        <rect id="center-box" class="fill-burgundy" x="2733.2" y="340.42" width="440.38" height="592.36" style="opacity: 0;" />
        <path class="fill-none stroke-dark stroke-2 {isVisible ? 'path-animation' : ''}" d={svgPath}></path>
    </svg>
  </div> -->
</section>