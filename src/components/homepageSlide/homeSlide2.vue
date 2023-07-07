<template lang="pug">
.slider-2
    a(href="/classes/yoga")
        .dot(:class="{ 'dot-scaled': isDotScaled }"
            @mouseover="scaleDot"
            @mouseleave="resetDot")
        .title 瑜珈課 
        .eng-title Yoga Class
    .image-area
        img.home-slider2-base(data-swiper-parallax="-20%" src="@/assets/images/home-slider2-base.webp")
        img.home-slider2-role(data-swiper-parallax="0%" src="@/assets/images/home-slider2-role.webp")
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

</script>


<style lang="sass" scoped>

.slider-2
    width: 100%
    height: 100%
    display: flex    
    justify-content: center
    align-items: center
    flex-direction: column
    overflow: hidden
    a
        width: 300px
        height: 300px
        letter-spacing: 2.5px
        font-family: 'Playfair Display'
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        z-index: 6
        text-decoration: none
        color: black
        cursor: default
        // border: 1px solid black
        .dot-scaled
            animation: scaleAnimation .6s ease-in-out
        .dot 
            width: 70px
            height: 70px
            background-color: #FFA245
            border-radius: 50%
            
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
        .home-slider2-role
            position: absolute
            width: 15%
            bottom: 50px
            left: 70%
        .home-slider2-base
            position: absolute
            width: 100vw
            bottom: -10%
            left: 10%
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