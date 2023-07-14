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

div(v-show="loading")
  loadingPage

mouseHorizontal
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
  overflow: hidden
  .parallax-bg
    position: absolute
    left: 0
    bottom: -25px
    width: 250%
    height: 400px
    -webkit-background-size: cover
    background-position: center
    opacity: .1

</style>
