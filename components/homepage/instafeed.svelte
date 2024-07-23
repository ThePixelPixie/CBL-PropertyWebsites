<script>
import 'tiny-slider/dist/tiny-slider.css';

let slider;

  onMount(async () => {
    const { tns } = await import('tiny-slider/src/tiny-slider'); // Dynamically import Tiny Slider

    slider = tns({
      container: '.insta-slider',
      loop: true,
      items: 2,
      speed: 400,
      edgePadding: 15,
      autoplay: true,
      controls: false,
      nav: false,
      autoplayButtonOutput: false,
      responsive: {
        768: {
          items: 4
        },
        992: {
          items: 5
        }
      }
    });
  });
</script>