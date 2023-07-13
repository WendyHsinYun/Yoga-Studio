<template lang="pug">
.slider-4
    a(href="/classes/KXPilates") 
        .dot(:class="{ 'dot-scaled': isDotScaled }"
            @mouseover="scaleDot"
            @mouseleave="resetDot")
        .title 機械皮拉提斯 KX Pilates
        .intro 利用器材輔助，提升身體感受力，針對局部的肌力加強。
    .image-area
        img.home-slider4-base(data-swiper-parallax="-10%" src="@/assets/images/home-slider1-base2.webp")
        img.home-slider4-role(data-swiper-parallax="0%" src="@/assets/images/home-slider3-role.webp")
        img.home-slider4-machine(data-swiper-parallax="-30%" src="@/assets/images/home-slider4-machine.webp")
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
        // border: 1px solid black
        transform: translateY(-50px)

        .dot-scaled
            animation: scaleAnimation .6s ease-in-out
        .dot 
            width: 60px
            height: 60px
            background-color: #9f7f60
            border-radius: 50%
            // cursor: url("./src/assets/images/mouse_solid.svg")
        .title
            margin-top: 30px
            font-weight: 500
            font-size: 1.25rem
            opacity: .5
        .intro
            font-weight: 100
            margin-top: 20px
            opacity: .5

    .image-area
        width: 100%
        height: 100%
        position: absolute
        box-sizing: border-box
        // transform: rotate(-5deg)
        // border: 1px solid black
        .home-slider4-role
            position: absolute
            width: 15%
            left: 80px
            bottom: 100px
            left: 15%
            z-index: 2  
            // border: 1px solid black
        .home-slider4-base
            position: absolute
            width: 130vw
            bottom: -15%
            left: -3%
        .home-slider4-machine
            position: absolute
            width: 25vw
            left: 10%
            bottom: 0
            
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




@media (min-width: 980px) and (max-width: 1280px)
    .slider-4
        a
            transform: translateY(-25%)
        .image-area
            .home-slider4-role
                position: absolute
                width: 15%
                left: 80px
                bottom: 15%
                left: 15%
                z-index: 2
                // border: 1px solid black
            .home-slider4-base
                position: absolute
                width: 110vw
                bottom: -10%
                left: -3%
            .home-slider4-machine
                position: absolute
                width: 25vw
                left: 10%
                bottom: 3%

@media (min-width: 700px) and (max-width: 980px)
    .slider-4
        a
            transform: translateY(-25%)
        .image-area        
            .home-slider4-role
                position: absolute
                width: 21%
                left: 80px
                bottom: 12%
                left: 12%
                z-index: 2
                // border: 1px solid black
            .home-slider4-base
                position: absolute
                width: 130vw
                bottom: -4%
                left: -3%
            .home-slider4-machine
                position: absolute
                width: 28vw
                left: 8%
                bottom: 3%

@media (min-width: 450px) and (max-width: 700px)

    .slider-4
        a
            transform: translateY(-25%)
            .title
                font-size: 1rem
            .intro
                font-size: 0.8rem
        .image-area
            .home-slider4-role
                position: absolute
                width: 20%
                bottom: 12%
                left: 10%
                z-index: 2
            .home-slider4-base
                position: absolute
                width: 130vw
                bottom: -5%
                left: -3%
            .home-slider4-machine
                position: absolute
                width: 32vw
                left: 8%
                bottom: 3%

@media (min-width: 0px) and (max-width: 450px)
    .slider-4
        a
            transform: translateY(-25%)
            .dot
                width: 50px
                height: 50px
            .title
                font-size: 1rem
            .intro
                font-size: 0.8rem
        .image-area
            .home-slider4-role
                position: absolute
                width: 35%
                left: 80px
                bottom: 10%
                left: 15%
                z-index: 2
            .home-slider4-base
                position: absolute
                width: 130vw
                bottom: 0%
                left: -3%
            .home-slider4-machine
                position: absolute
                width: 40vw
                left: 12%
                bottom: 3%


@media (min-height: 490px) and (max-height: 600px)
    .slider-4
        a 
            transform: translateY(-40px)
            .dot 
                width: 50px
                height: 50px
            .title
                font-size: 1.1rem
            .intro
                font-size: .95rem

@media (min-height: 390px) and (max-height: 490px)
    .slider-4
        a 
            transform: translateY(-10px)
            .dot 
                width: 50px
                height: 50px
            .title
                font-size: 1rem
            .intro
                font-size: .85rem
        .image-area
            .home-slider4-role
                position: absolute
                width: 12%
                bottom: 15%
                left: 15%
                z-index: 2
            .home-slider4-base
                position: absolute
                width: 110vw
                bottom: -15%
                left: -3%
            .home-slider4-machine
                position: absolute
                width: 22vw
                left: 10%
                bottom: 3%


@media (min-height: 0px) and (max-height: 390px)
    .slider-4
        a 
            transform: translateY(0px)
            .dot 
                width: 40px
                height: 40px
            .title
                font-size: 1rem
                transform: translateY(-10px)
            .intro
                display: none
        .image-area
            .home-slider4-role
                position: absolute
                width: 12%
                bottom: 15%
                left: 15%
                z-index: 2
            .home-slider4-base
                position: absolute
                width: 110vw
                bottom: -15%
                left: -3%
            .home-slider4-machine
                position: absolute
                width: 22vw
                left: 10%
                bottom: 3%
</style>