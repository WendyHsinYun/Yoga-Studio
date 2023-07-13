<template lang="pug">
.slider-3
    a(href="/classes/yoga")
        .dot(:class="{ 'dot-scaled': isDotScaled }"
            @mouseover="scaleDot"
            @mouseleave="resetDot")
        .title 瑜珈課 Yoga
        .intro 透過墊上運動，就能矯正體態、加強體能與消耗熱量。
    .image-area
        img.home-slider3-base(data-swiper-parallax="-20%" src="@/assets/images/home-slider2-base.webp")
        img.home-slider3-role(data-swiper-parallax="0%" src="@/assets/images/home-slider2-role.webp")
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

.slider-3
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
        transform: translateY(-50px)
        .dot-scaled
            animation: scaleAnimation .6s ease-in-out
        .dot 
            width: 60px
            height: 60px
            background-color: #FFA245
            border-radius: 50%
            
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
        .home-slider3-role
            position: absolute
            width: 15%
            bottom: 50px
            left: 70%
        .home-slider3-base
            position: absolute
            width: 100vw
            bottom: -12%
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




@media (min-width: 980px) and (max-width: 1280px)
    .slider-3
        a
            transform: translateY(-25%)
        .image-area
            .home-slider3-role
                width: 17%
                bottom: 50px
                left: 65%
            .home-slider3-base
                width: 110vw
                bottom: -80px
                left: 5%

@media (min-width: 700px) and (max-width: 980px)
    .slider-3
        a
            transform: translateY(-25%)
        .image-area
            .home-slider3-role
                width: 22%
                bottom: 50px
                left: 65%
            .home-slider3-base
                width: 110vw
                bottom: -5%
                left: 5%

@media (min-width: 450px) and (max-width: 700px)

    .slider-3
        a
            transform: translateY(-25%)
            .title
                font-size: 1rem
            .intro
                font-size: 0.8rem
        .image-area
            .home-slider3-role
                width: 30%
                bottom: 50px
                left: 60%
            .home-slider3-base
                width: 110vw
                bottom: 0%
                left: 5%

@media (min-width: 0px) and (max-width: 450px)
    .slider-3
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
            .home-slider3-role
                width: 40%
                bottom: 50px
                left: 45%
            .home-slider3-base
                width: 120vw
                bottom: 0%
                left: -10%


@media (min-height: 540px) and (max-height: 600px)
    .slider-3
        a 
            transform: translateY(-40px)
            .dot 
                width: 50px
                height: 50px
            .title
                font-size: 1.1rem
            .intro
                font-size: .95rem

@media (min-height: 390px) and (max-height: 540px)
    .slider-3
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
            .home-slider3-role
                width: 25%
                bottom: 30px
                left: 70%
            .home-slider3-base
                width: 120vw
                bottom: -10%
                left: -5%


@media (min-height: 0px) and (max-height: 390px)
    .slider-3
        a 
            transform: translateY(-10px)
            .dot 
                width: 40px
                height: 40px
            .title
                font-size: 1rem
                transform: translateY(-10px)
            .intro
                display: none

        .image-area
            .home-slider3-role
                width: 18%
                bottom: 30px
                left: 65%
            .home-slider3-base
                width: 120vw
                bottom: -15%
                left: -5%
</style>