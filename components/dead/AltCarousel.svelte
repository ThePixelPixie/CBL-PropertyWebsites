<script>
  //import { onMount } from 'svelte';
  import * as THREE from 'three';
  import imagesLoaded from 'imagesloaded';
  import { TweenLite } from 'gsap';

  let slider;
  const images = [
    "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.contentstack.io/v3/assets/blt3bc60e1499ab08a6/bltd09d21453a7badcc/617ad60c3591671110c8fc6a/HamiltonPlace_Drone_entrance_101121.jpg",
    "https://images.contentstack.io/v3/assets/blt3bc60e1499ab08a6/bltc6a79af8f191d7c1/617ad67d3591671110c8fc6e/Casual_Dining_iStock-1179557662.jpg"
  ];

  const titles = [
    "Amur <br>Leopard",
    "Asiatic <br>Lion",
    "Siberian <br>Tiger",
    "Brown <br>Bear"
  ];

  const statuses = [
    "Critically Endangered",
    "Endangered",
    "Endangered",
    "Least Concern"
  ];

  let currentIndex = 0;

  function setCurrentIndex(index) {
    currentIndex = index;
  }

  onMount(() => {
    const displacementSlider = function(opts) {
      let vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `;

      let fragment = `
        varying vec2 vUv;

        uniform sampler2D currentImage;
        uniform sampler2D nextImage;

        uniform float dispFactor;

        void main() {
          vec2 uv = vUv;
          vec4 _currentImage;
          vec4 _nextImage;
          float intensity = 0.3;

          vec4 orig1 = texture2D(currentImage, uv);
          vec4 orig2 = texture2D(nextImage, uv);
          
          _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2.r * intensity)));

          _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1.r * intensity)));

          vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

          gl_FragColor = finalTexture;
        }
      `;

      let imageElements = opts.images, image, sliderImages = [];
      let canvasWidth = imageElements[0].clientWidth;
      let canvasHeight = imageElements[0].clientHeight;
      let parent = opts.parent;
      let renderWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      let renderHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      let renderW, renderH;

      if (renderWidth > canvasWidth) {
        renderW = renderWidth;
      } else {
        renderW = canvasWidth;
      }

      renderH = renderHeight;

      let renderer = new THREE.WebGLRenderer({
        antialias: false,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x23272A, 1.0);
      renderer.setSize(parent.offsetWidth, parent.offsetHeight);
      parent.appendChild(renderer.domElement);

      let loader = new THREE.TextureLoader();
      loader.crossOrigin = "anonymous";

      images.forEach((imgSrc) => {
        image = loader.load(imgSrc + '?v=' + Date.now(), texture => {
          texture.magFilter = texture.minFilter = THREE.LinearFilter;
          texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
          sliderImages.push(texture);

          if (sliderImages.length === images.length) {
            initSlider(sliderImages);
          }
        });
      });

      function initSlider(sliderImages) {
        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0x23272A);
        let camera = new THREE.OrthographicCamera(
          parent.offsetWidth / -2,
          parent.offsetWidth / 2,
          parent.offsetHeight / 2,
          parent.offsetHeight / -2,
          1,
          1000
        );

        camera.position.z = 1;

        let mat = new THREE.ShaderMaterial({
          uniforms: {
            dispFactor: { type: "f", value: 0.0 },
            currentImage: { type: "t", value: sliderImages[0] },
            nextImage: { type: "t", value: sliderImages[1] },
          },
          vertexShader: vertex,
          fragmentShader: fragment,
          transparent: true,
          opacity: 1.0
        });

        let geometry = new THREE.PlaneGeometry(
          parent.offsetWidth,
          parent.offsetHeight,
          1
        );
        let object = new THREE.Mesh(geometry, mat);
        object.position.set(0, 0, 0);
        scene.add(object);

        let addEvents = function() {
          let pagButtons = Array.from(document.getElementById('pagination').querySelectorAll('button'));
          let isAnimating = false;

          pagButtons.forEach((el) => {
            el.addEventListener('click', function() {
              if (!isAnimating) {
                isAnimating = true;

                document.getElementById('pagination').querySelectorAll('.active')[0].classList.remove('active');
                this.classList.add('active');

                let slideId = parseInt(this.dataset.slide, 10);

                mat.uniforms.nextImage.value = sliderImages[slideId];
                mat.uniforms.nextImage.needsUpdate = true;

                TweenLite.to(mat.uniforms.dispFactor, 1, {
                  value: 1,
                  ease: 'Expo.easeInOut',
                  onComplete: function() {
                    mat.uniforms.currentImage.value = sliderImages[slideId];
                    mat.uniforms.currentImage.needsUpdate = true;
                    mat.uniforms.dispFactor.value = 0.0;
                    isAnimating = false;
                  }
                });

                let slideTitleEl = document.getElementById('slide-title');
                let slideStatusEl = document.getElementById('slide-status');
                let nextSlideTitle = document.querySelector(`[data-slide-title="${slideId}"]`).innerHTML;
                let nextSlideStatus = document.querySelector(`[data-slide-status="${slideId}"]`).innerHTML;

                TweenLite.fromTo(slideTitleEl, 0.5, {
                  autoAlpha: 1,
                  y: 0
                }, {
                  autoAlpha: 0,
                  y: 20,
                  ease: 'Expo.easeIn',
                  onComplete: function() {
                    slideTitleEl.innerHTML = nextSlideTitle;

                    TweenLite.to(slideTitleEl, 0.5, {
                      autoAlpha: 1,
                      y: 0,
                    });
                  }
                });

                TweenLite.fromTo(slideStatusEl, 0.5, {
                  autoAlpha: 1,
                  y: 0
                }, {
                  autoAlpha: 0,
                  y: 20,
                  ease: 'Expo.easeIn',
                  onComplete: function() {
                    slideStatusEl.innerHTML = nextSlideStatus;

                    TweenLite.to(slideStatusEl, 0.5, {
                      autoAlpha: 1,
                      y: 0,
                      delay: 0.1,
                    });
                  }
                });
              }
            });
          });
        };

        addEvents();

        const resizeHandler = () => {
          const width = parent.offsetWidth;
          const height = parent.offsetHeight;

          renderer.setSize(width, height);
          camera.left = width / -2;
          camera.right = width / 2;
          camera.top = height / 2;
          camera.bottom = height / -2;
          camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', resizeHandler);
        resizeHandler();

        let animate = function() {
          requestAnimationFrame(animate);

          renderer.render(scene, camera);
        };
        animate();
      }
    };

    imagesLoaded(document.querySelectorAll('img'), () => {
      document.body.classList.remove('loading');

      const el = document.getElementById('slider');
      const imgs = Array.from(el.querySelectorAll('img'));
      new displacementSlider({
        parent: el,
        images: imgs
      });
    });
  });
</script>

<style>
  #slider img {
    z-index: -1;
    opacity: 0;
    transition: opacity 1s ease;
  }

  #slider img.active {
    z-index: 0;
    opacity: 1;
  }

  .slider-inner {
    z-index: 5;
  }

  #slider-content span {
    display: none;
  }

  #pagination {
    z-index: 6;
  }

  #pagination button {
    appearance: none;
    border: 0;
    opacity: 0.2;
    transition: opacity 0.2s ease-in-out;
    outline: none;
  }

  #pagination button:hover {
    opacity: 0.5;
  }

  #pagination button.active {
    opacity: 1;
  }

  #pagination button.active:before {
    width: 300%;
    height: 300%;
    opacity: 1;
  }

  #pagination button:before {
    opacity: 0;
    transition: opacity 0.4s ease-in-out, width 0.4s ease-in-out, height 0.4s ease-in-out;
  }
</style>

<div id="slider" class="w-screen h-[75vh] mx-auto relative">
  <div class="slider-inner relative flex items-center w-full h-full mx-auto z-10">
    <div id="slider-content" class="px-3">
      <div class="meta inline-block font-sm tracking-tight text-dark uppercase relative after:content-none after:block after:absolute after:top1.5 after:-right-14 after:h-[2px] after:bg-dark">Species</div>
      <h2 id="slide-title" class="leading-8 tracking-tighter text-white text-3xl font-normal mt-5 mx-0 mb-16 uppercase">{@html titles[currentIndex]}</h2>
      {#each titles as title, i}
        <span data-slide-title={i} class="hidden">{@html title}</span>
      {/each}
      <div class="meta inline-block font-sm tracking-tight text-dark uppercase relative after:content-none after:block after:absolute after:top1.5 after:-right-14 after:h-[2px] after:bg-dark">Status</div>
      <div id="slide-status" class="mt-5 font-normal text-xl text-white">{statuses[currentIndex]}</div>
      {#each statuses as status, i}
        <span data-slide-status={i} class="hidden">{status}</span>
      {/each}
    </div>
  </div>

  {#each images as img, i}
    <img src={img} class="absolute w-full h-full object-cover object-center top-0 left-0 {i === currentIndex ? 'active' : ''}" />
  {/each}

  <div id="pagination" class="absolute top-1/2 right-8 transform -translate-y-1/2">
    {#each images as _, i}
      <button class="{i === currentIndex ? 'active' : ''} block w-4 h-4 bg-white rounded-full p-0 my-8 mx-0 cursor-pointer relative before:content-none before:block before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:rounded-full" data-slide={i} on:click={() => setCurrentIndex(i)}></button>
    {/each}
  </div>
</div>
