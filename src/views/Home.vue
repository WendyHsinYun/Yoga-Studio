<template lang="pug">
swiper(:parallax='true' :modules='modules')
    .parallax-bg(:style="{'background-image': 'url(../src/assets/images/bg-line.png)'}" data-swiper-parallax='-30%')
    swiper-slide 
        homepage
    swiper-slide Slide 2
    swiper-slide Slide 3
    swiper-slide Slide 4

</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import homepage from '../components/homepage.vue';

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax} from "swiper";

const components = {
  Swiper,
  SwiperSlide,
};

const modules = [Parallax];


</script>

<style lang='sass' scoped>
.parallax-bg
  position: absolute
  left: 0
  top: 0
  width: 120%
  height: 100%
  background-size: cover
  background-position: center
  opacity: .2
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
