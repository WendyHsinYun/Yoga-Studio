<template lang="pug">
swiper.swiper(:parallax='true' :modules='modules' :navigation="true" :speed="1000" ref="swiper" :mousewheel="true")
    //- .parallax-bg(:style="{'background-image': 'url(../src/assets/images/bg-line.png)'}" data-swiper-parallax='-30%')
    swiper-slide 
        aboutSlide1
    swiper-slide 
        aboutSlide2
    swiper-slide 
        aboutSlide3
    swiper-slide
        aboutSlide4

</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax,  Navigation, Mousewheel } from "swiper";
import aboutSlide1 from '@/components/about/aboutSlide1.vue';
import aboutSlide2 from '@/components/about/aboutSlide2.vue';
import aboutSlide3 from '@/components/about/aboutSlide3.vue';
import aboutSlide4 from '@/components/about/aboutSlide4.vue';

import 'swiper/css';

import "swiper/css/navigation";

const components = {
    Swiper,
    SwiperSlide,
};

const modules = [Parallax,  Navigation, Mousewheel];


import { onMounted, onUnmounted, ref } from 'vue';

import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


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
    opacity: .1

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
