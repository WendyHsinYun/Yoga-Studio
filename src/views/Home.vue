<template lang="pug">
//- .c-container
//-   .c-nav
//-       .dot-1(data-text="Namaste")
//-       .dot-2(data-text="瑜珈課")
//-       .dot-3(data-text="機械皮拉提斯")
//-       .dot-4(data-text="空中瑜珈")
swiper.swiper(:parallax='true' :modules='modules' :navigation="true" :speed="1000" ref="swiper" :mousewheel="true")
  .parallax-bg(:style="{'background-image': 'url(../src/assets/images/bg-line.png)'}" data-swiper-parallax='-30%')
  swiper-slide 
    homeSlide1
  swiper-slide 
    homeSlide2
  swiper-slide
    homeSlide3
  swiper-slide 
    homeSlide4

div(:class="mouseClass" :style="{ left: divLeft, top: divTop }" @dotEvent="setClickValue") 
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


import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".c-container", {
    rotation: 360,
    scrollTrigger: 
    { trigger: '.c-container',
      horizontal: true,
      // pin: true,
      // toggleActions: "play pause reverse none"
      scrub: true,
      markers: true,
      // start: "-500% 0%",
      // end: '+=4000',
    },
  })
})


</script>

<style lang='sass' scoped>
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
  
.parallax-bg
  position: absolute
  left: 0
  top: 0
  width: 120%
  height: 100%
  background-size: cover
  background-position: center
  opacity: .1

.c-container
  width: 450px
  height: 450px
  top: -350px
  left: 50%
  transform: translateX(-50%)
  position: absolute
  display: flex
  justify-content: center
  align-items: center
  
  .c-nav
    width: 400px
    height: 400px
    border-radius: 50%
    border: 1px solid #565151
    opacity: .5
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    
    .dot-1, .dot-2, .dot-3, .dot-4 
      position: relative
      width: 8px
      height: 8px
      border: 1px solid #565151
      border-radius: 50%
      background-color: #565151
    .dot-1::after, .dot-2::after, .dot-3::after, .dot-4::after
      content: attr(data-text)
      letter-spacing: 1px
      font-family: 'Playfair Display'
      white-space: nowrap
      position: absolute
    .dot-1::after
      top: 35px
      right: -30px 
    .dot-1
      top: 45%
    .dot-2::after
      right: -80px
      top: -5px 
    .dot-2
      right: -45%
    .dot-3::after
      top: -45px
      right: -50px
    .dot-3
      top: -45%
    .dot-4::after
      top: -5px
      right: 55px
    .dot-4 
      right: 45%
swiper
  width: 100%
  height: 100%
  // z-index: 3
  swiper-slide
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    text-align: center

</style>
