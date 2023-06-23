<template lang="pug">
.slider-1
    .dot-container 
        .dot(:class="{ 'dot-scaled': isDotScaled }"
            @mouseover="scaleDot"
            @mouseleave="resetDot")
        .title 卡姊的瑜珈教室 
        .eng-title Welcome!
    .scrollReminder 滑動來繼續看
    .image-area
        img.home-slider1-role(data-swiper-parallax="20%" src="@/assets/images/home-slider1-role.png")
        img.home-slider1-base(data-swiper-parallax="5%" src="@/assets/images/home-slider1-base.png")
</template>


<script setup>
import { ref } from 'vue';

const isDotScaled = ref(false);

function scaleDot() {
  isDotScaled.value = true;
}
function resetDot() {
  isDotScaled.value = false;
}

import gsap from 'gsap'

</script>


<style lang="sass">
.swiper-button-next, .swiper-button-prev, .swiper-button-disabled, .swiper-button-disabled::after  
  --swiper-navigation-size: 500px
  --swiper-navigation-top-offset: 40%
  --swiper-navigation-sides-offset: 20px
  --swiper-navigation-color: none
  opacity: 0

.slider-1
    width: 100%
    height: 100%
    display: flex    
    justify-content: center
    align-items: center
    flex-direction: column
    .dot-container
        width: 300px
        height: 300px
        letter-spacing: 2.5px
        font-family: 'Playfair Display'
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        z-index: 6
        // border: 1px solid black
        .dot-scaled
            animation: scaleAnimation .6s ease-in-out
        .dot 
            width: 70px
            height: 70px
            background-color: #2DD98A
            border-radius: 50%
            // cursor: url("./src/assets/images/mouse_solid.svg")
        .title
            margin-top: 30px
            font-weight: 500
            font-size: 1.25rem
            opacity: .5
        .eng-title
            font-weight: 100
            margin-top: 20px
            opacity: .5
    .scrollReminder
        font-family: 'Noto Sans HK'
        font-weight: 100
        font-size: 10pt
        margin-top: 20px
        letter-spacing: 2px
        opacity: .5
    .image-area
        width: 100%
        height: 100%
        position: absolute
        box-sizing: border-box
        transform: rotate(-5deg)

@media (min-width: 1800px)
    .image-area
        .home-slider1-role
            width: 100%
            bottom: -5%
            position: absolute
        .home-slider1-base
            width: 135%
            left: -25%
            bottom: -50%
            position: absolute
@media (min-width: 1600px) and (max-width: 1800px)
    .image-area
        .home-slider1-role
            width: 100%
            height: auto
            bottom: 0%
            left: -10%
            position: absolute
        .home-slider1-base
            width: 125%
            height: auto
            left: -20%
            bottom: -35%
            position: absolute
@media (min-width: 1400px) and (max-width: 1600px)
    .image-area   
        .home-slider1-role
            width: 95%
            height: auto
            bottom: 0%
            left: -10%
            position: absolute
        .home-slider1-base
            width: 130%
            height: auto
            left: -25%
            bottom: -35%
            position: absolute
@media (min-width: 1200px) and (max-width: 1400px)
    .image-area   
        .home-slider1-role
            width: 120%
            height: auto
            bottom: 0%
            left: -15%
            position: absolute
        .home-slider1-base
            width: 120%
            height: auto
            left: -20%
            bottom: -25%
            position: absolute
@media (min-width: 850px) and (max-width: 1200px)
    .image-area   
        .home-slider1-role
            width: 150%
            height: auto
            bottom: -5%
            left: -20%
            position: absolute
        .home-slider1-base
            width: 115%
            height: auto
            left: -20%
            bottom: -15%
            position: absolute
@media (min-width: 600px) and (max-width: 850px)
    .image-area   
        .home-slider1-role
            width: 170%
            height: auto
            bottom: -5%
            left: -25%
            position: absolute
        .home-slider1-base
            width: 130%
            height: auto
            left: -25%
            bottom: -15%
            position: absolute
@media (min-width: 430px) and (max-width: 600px)
    .image-area   
        .home-slider1-role
            width: 210%
            height: auto
            bottom: 0%
            left: -35%
            position: absolute
        .home-slider1-base
            width: 130%
            height: auto
            left: -25%
            bottom: -6%
            position: absolute
@media (min-width: 0px) and (max-width: 430px)
    .image-area   
        .home-slider1-role
            width: 230%
            height: auto
            bottom: 0%
            left: -40%
            position: absolute
        .home-slider1-base
            width: 130%
            height: auto
            left: -25%
            bottom: -4%
            position: absolute
@keyframes scaleAnimation 
    0% 
        transform: scale(1)
    65% 
        transform: scale(1.3)
    80%
        transform: scale(1)
    90%
        transform: scale(1.1)
    100% 
        transform: scale(1)



</style>