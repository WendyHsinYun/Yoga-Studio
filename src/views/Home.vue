<template lang="pug">
//- .c-container
//-   .c-nav
//-       .dot-1(data-text="Namaste")
//-       .dot-2(data-text="瑜珈課")
//-       .dot-3(data-text="機械皮拉提斯")
//-       .dot-4(data-text="空中瑜珈")

swiper(
  :parallax='true' 
  :modules='modules' 
  :navigation="true" 
  :speed="1000" 
  :mousewheel="true" 
  v-show="!loading")
  .parallax-bg(
    :style="{'background-image': 'url(../src/assets/images/bg-line.png)'}" 
    data-swiper-parallax='-30%' 
    v-show="!loading")
  swiper-slide(v-show="!loading") 
    homeSlide1
  swiper-slide(v-show="!loading") 
    homeSlide2
  swiper-slide(v-show="!loading")
    homeSlide3
  swiper-slide(v-show="!loading") 
    homeSlide4

v-container.d-flex.flex-column(
  style="background-color: none; overflow: hidden; position: absolute; height: 100%;" 
  v-show="loading")
  v-row.pt-10(
    height="30" 
    justify="center" 
    style="background-color: none; margin-top: 80px" 
    v-show="loading" )
    .progressNum.pl-5 {{ progress }} %
  v-row(
    height="220" 
    style="background-color: none;" 
    v-show="loading")
    .circular.mx-auto
      v-img.ml-4.spinning(
        src="src/assets/images/loading.webp"
        height="180"
        center
        style="{ width: '80%'}")
  v-row(
    height="50" 
    justify="center"  
    style="background-color: none; " 
    v-show="loading")
    .remind 
      span 暖身中......


div(
  :class="mouseClass" 
  :style="{ left: divLeft, top: divTop }" 
  @dotEvent="setClickValue" 
  v-show="!loading") 

</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax,  Navigation, Mousewheel } from "swiper";

import { ref, onMounted, onUnmounted, computed } from 'vue';

import 'swiper/css';

import "swiper/css/navigation";
import homeSlide1 from '../components/homepageSlide/homeSlide1.vue';
import homeSlide2 from '../components/homepageSlide/homeSlide2.vue';

import homeSlide3 from '../components/homepageSlide/homeSlide3.vue';

import homeSlide4 from '../components/homepageSlide/homeSlide4.vue';

const components = {
  Swiper,
  SwiperSlide,
};

const modules = [Parallax,  Navigation, Mousewheel];


const isMouseRight = ref(false);
const isMouseLeft = ref(false);
const isMouseMiddle = ref(false);
const isMouseClick = ref(false)

const divLeft = ref('0px');
const divTop = ref('0px');

let mouseStyle;


function setClickValue(value) {
    isMouseClick.value = value;
  }

onMounted(() => {
  const mouseStyle = (e) => {
    isMouseRight.value = e.clientX > window.innerWidth / 3*2;
    isMouseLeft.value = e.clientX < window.innerWidth / 3;
    isMouseMiddle.value = e.clientX > window.innerWidth / 3 && e.clientX < (window.innerWidth / 3) * 2;
    divLeft.value = e.clientX + 'px';
    divTop.value = e.clientY + 'px';
  };
  document.addEventListener('mousemove', mouseStyle);


});

onUnmounted(() => {
  document.removeEventListener('mousemove', mouseStyle);
});

const mouseClass = computed(() => {
  if (isMouseClick.value) {
    return 'mouseClick';
  } else if (isMouseRight.value) {
    return 'mouseRight';
  } else if (isMouseLeft.value) {
    return 'mouseLeft';
  } else if (isMouseMiddle.value) {
    return 'mouseMiddle';
  }
  return '';
});


// import gsap from 'gsap';

// import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);

// onMounted(() => {
//   gsap.to(".c-container", {
//     rotation: 360,
//     scrollTrigger: 
//     { trigger: '.c-container',
//       horizontal: true,
//       // pin: true,
//       // toggleActions: "play pause reverse none"
//       scrub: true,
//       markers: true,
//       // start: "-500% 0%",
//       // end: '+=4000',
//     },
//   })
// })


// loading effect

const loading = ref(true);
const progress = ref(0);

onMounted(() => {

  const interval = setInterval(() => {
    progress.value += 5
    if (progress.value >= 100) {
      clearInterval(interval);
      loading.value = false;

    }
  }, 100);

});

</script>

<style lang='sass' scoped>
.swiper-button-next, .swiper-button-prev, .swiper-button-disabled, .swiper-button-disabled::after  
  --swiper-navigation-size: 400px
  --swiper-navigation-top-offset: 40%
  --swiper-navigation-sides-offset: 20px
  --swiper-navigation-color: none
  opacity: 0
  
.mouseRight
  position: fixed
  width: 50px
  height: 50px
  background-image: url('./src/assets/images/mouse_right.svg')
  background-repeat: no-repeat
  background-position: center
  pointer-events: none 
  z-index: 9999 

.mouseLeft
  position: fixed
  width: 50px
  height: 50px
  background-image: url('./src/assets/images/mouse_right.svg')
  transform: scaleX(-1)
  background-repeat: no-repeat
  background-position: center
  pointer-events: none 
  z-index: 9999 
.mouseMiddle
  position: fixed
  width: 50px
  height: 50px
  background-image: url('./src/assets/images/mouse_center.svg')
  background-repeat: no-repeat
  background-position: center
  pointer-events: none 
  z-index: 9999 

.mouseClick
  position: fixed
  width: 50px
  height: 50px
  right: 50%
  top: 30%
  background-image: url('./src/assets/images/mouse_click.svg')
  background-repeat: no-repeat
  background-position: center
  pointer-events: none 
  z-index: 9999 
  

.swiper
  width: 100vw
  height: 100vh
  overflow: hidden
  .parallax-bg
    position: absolute
    left: 0
    top: 0
    width: 150%
    height: auto
    background-size: cover
    background-position: center
    opacity: .1

// .c-container
//   width: 450px
//   height: 450px
//   top: -350px
//   left: 50%
//   transform: translateX(-50%)
//   position: absolute
//   display: flex
//   justify-content: center
//   align-items: center
  
//   .c-nav
//     width: 400px
//     height: 400px
//     border-radius: 50%
//     border: 1px solid #565151
//     opacity: .5
//     position: absolute
//     display: flex
//     justify-content: center
//     align-items: center
    
    // .dot-1, .dot-2, .dot-3, .dot-4 
    //   position: relative
    //   width: 8px
    //   height: 8px
    //   border: 1px solid #565151
    //   border-radius: 50%
    //   background-color: #565151
    // .dot-1::after, .dot-2::after, .dot-3::after, .dot-4::after
    //   content: attr(data-text)
    //   letter-spacing: 1px
    //   font-family: 'Playfair Display'
    //   white-space: nowrap
    //   position: absolute
    // .dot-1::after
    //   top: 35px
    //   right: -30px 
    // .dot-1
    //   top: 45%
    // .dot-2::after
    //   right: -80px
    //   top: -5px 
    // .dot-2
    //   right: -45%
    // .dot-3::after
    //   top: -45px
    //   right: -50px
    // .dot-3
    //   top: -45%
    // .dot-4::after
    //   top: -5px
    //   right: 55px
    // .dot-4 
    //   right: 45%
// .swiper
//   width: 100%
//   height: 100vh
//   position: absolute
//   top: 0
//   .swiper-slide
//     width: 100%
//     height: 100%
    // display: flex
    // justify-content: center
    // align-items: center
    // text-align: center


.spinning 
  animation: spin .8s ease-in-out infinite


@keyframes spin 
  from 
    transform: rotate(0deg)
  to 
    transform: rotate(360deg)

@keyframes typewriter
  40%, 60%
    left: 100%
  100%
    left: 0

.progressNum
  color: #2DD98A
  font-size: 32px
  font-family: 'Playfair Display'

.circular
  width: 220px
  height: 220px
  border: 20px solid #2DD98A
  border-radius: 50%

.remind
  color: #2DD98A
  font-size: 20px
  font-family: 'Playfair Display'
  letter-spacing: 2px
  position: relative //相對於偽元素而言
  white-space: nowrap
  ::before
    content: ''
    position: absolute
    border-left: solid 1px  #EDDE5D
    width: 100%
    height: 100%
    bottom: 0
    left:0
    animation: typewriter 4s steps(23) infinite
    background-color: #fff
</style>
