<template lang="pug">
.slider-4
    router-link(to="/classes/AerialYoga")  
        .dot(:class="{ 'dot-scaled': isDotScaled }"
            @mouseover="scaleDot"
            @mouseleave="resetDot")
        .title 空中瑜珈
        .eng-title Aerial Yoga
    .image-area
        img.home-slider4-base(data-swiper-parallax="-200" src="@/assets/images/home-slider4-base.png")
        img.home-slider4-role(data-swiper-parallax="100" src="@/assets/images/home-slider4-role.png")
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

.slider-4
    width: 100%
    height: 100%
    display: flex    
    justify-content: center
    align-items: center
    flex-direction: column
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

        .dot-scaled
            animation: scaleAnimation .6s ease-in-out
        .dot 
            width: 70px
            height: 70px
            background-color: #18AE66
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
        // transform: rotate(-5deg)
        // border: 1px solid black
        .home-slider4-base
            width: 130%
            height: auto
            left: -250px
            bottom: -200px
            position: absolute
        .home-slider4-role
            width: 70%
            height: auto
            bottom: 0px
            position: absolute
            left: 400px
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