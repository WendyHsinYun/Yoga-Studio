<template lang="pug">
swiper(
    :parallax='true' 
    :modules='modules' 
    :navigation="true" 
    :speed="1000" ref="swiper" 
    :mousewheel="true")
    .parallax-bg(
        slot="container-start"
        :style="{'background': 'url(../src/assets/images/bg-line.webp) no-repeat' }"
        data-swiper-parallax='-45%')
    swiper-slide 
        aboutSlide1
    swiper-slide 
        aboutSlide2
    swiper-slide 
        aboutSlide3
    swiper-slide
        aboutSlide4

mouseHorizontal
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax, Navigation, Mousewheel } from "swiper";

import aboutSlide1 from '@/components/about/aboutSlide1.vue';
import aboutSlide2 from '@/components/about/aboutSlide2.vue';
import aboutSlide3 from '@/components/about/aboutSlide3.vue';
import aboutSlide4 from '@/components/about/aboutSlide4.vue';

import 'swiper/css';

import "swiper/css/navigation";

import mouseHorizontal from '@/components/mouseHorizontal.vue';

const components = {
    Swiper,
    SwiperSlide,
};

const modules = [Parallax,  Navigation, Mousewheel];

</script>

<style lang='sass'>
    
.swiper-button-next, .swiper-button-prev, .swiper-button-disabled, .swiper-button-disabled::after  
    --swiper-navigation-size: 300px
    --swiper-navigation-top-offset: 40%
    --swiper-navigation-sides-offset: 20px
    --swiper-navigation-color: none
    opacity: 0

.swiper
    width: 100%
    height: 100%
    .parallax-bg
        position: absolute
        left: 0
        bottom: -50px
        width: 250%
        height: 400px
        -webkit-background-size: cover
        background-position: center
        opacity: .1
        // border: 1px solid red
    .swiper-slide
        width: 100%
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        text-align: center

</style>
