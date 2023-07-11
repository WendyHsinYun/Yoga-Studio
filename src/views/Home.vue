<template lang="pug">
swiper(
  :parallax='true' 
  :modules='modules' 
  :navigation="true" 
  :speed="1000" 
  :mousewheel="true" 
  v-show="!loading")
  .parallax-bg(
    slot="container-start"
    :style="{'background': 'url(../src/assets/images/bg-line.webp) no-repeat' }"
    data-swiper-parallax='-20%')
  swiper-slide
    homeSlide1
  swiper-slide 
    homeSlide2
  swiper-slide
    homeSlide3
  swiper-slide 
    homeSlide4
  swiper-slide 
    homeSlide5

v-container.flex-column(
    style="background-color: none; position: absolute; top: 0; left: 0; "
    v-show="loading"
    )
  loadingPage

mouseHorizontal

//- .c-container
//-   .c-nav
//-       .dot-1(data-text="Namaste")
//-       .dot-2(data-text="瑜珈課")
//-       .dot-3(data-text="機械皮拉提斯")
//-       .dot-4(data-text="空中瑜珈")
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax, Navigation, Mousewheel } from "swiper";

import { ref, onMounted, onUnmounted, computed } from 'vue';

import 'swiper/css';

import "swiper/css/navigation";
import homeSlide1 from '../components/homepageSlide/homeSlide1.vue';
import homeSlide2 from '../components/homepageSlide/homeSlide2.vue';
import homeSlide3 from '../components/homepageSlide/homeSlide3.vue';
import homeSlide4 from '../components/homepageSlide/homeSlide4.vue';
import homeSlide5 from '../components/homepageSlide/homeSlide5.vue';

import loadingPage from '../components/loadingPage.vue';

import mouseHorizontal from '@/components/mouseHorizontal.vue';

const components = {
  Swiper,
  SwiperSlide,
};

const modules = [ Parallax, Navigation, Mousewheel];


// loading

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
  
.swiper
  width: 100vw
  height: 100vh
  .parallax-bg
    position: absolute
    left: 0
    bottom: -25px
    width: 250%
    height: 400px
    -webkit-background-size: cover
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


</style>
