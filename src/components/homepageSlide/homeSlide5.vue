<template lang="pug">
.slider-5
    a(href="/classes/AerialYoga")  
        .dot(:class="{ 'dot-scaled': isDotScaled }"
            @mouseover="scaleDot"
            @mouseleave="resetDot")
        .title 空中瑜珈 Aerial Yoga
        .intro 利用懸吊的掛布，透過地心引力增加身體協調、平衡及穩定性
    .image-area
        img.home-slider5-role(data-swiper-parallax="0%" src="@/assets/images/home-slider4-role.webp")
        img.home-slider5-base2(data-swiper-parallax="5%" src="@/assets/images/home-slider4-base2.webp")
        img.home-slider5-base(data-swiper-parallax="-20%" src="@/assets/images/home-slider4-base.webp")
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

.slider-5
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
            background-color: #D2DA40
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
        .home-slider5-base
            width: 100%
            left: 40%
            bottom: -120px
            position: absolute
        .home-slider5-base2
            width: 100%
            position: absolute
            bottom: -5%
            left: -10%
        .home-slider5-role
            width: 17%
            height: auto
            bottom: 20%
            position: absolute
            left: 65%
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
    .slider-5
        a
            transform: translateY(-25%)
        .image-area
            .home-slider5-role
                position: absolute
                width: 15%
                left: 80px
                bottom: 15%
                left: 65%
                // border: 1px solid black
            .home-slider5-base
                width: 100%
                left: 40%
                bottom: -120px
                position: absolute
            .home-slider5-base2
                width: 100%
                position: absolute
                bottom: -5%
                left: -10%

@media (min-width: 450px) and (max-width: 980px)
    .slider-5
        a
            transform: translateY(-25%)
        .image-area        
            .home-slider5-role
                position: absolute
                width: 23%
                bottom: 10%
                left: 65%
                z-index: 2
                // border: 1px solid black
            .home-slider5-base
                width: 100%
                left: 40%
                bottom: -80px
                position: absolute
            .home-slider5-base2
                width: 100%
                position: absolute
                bottom: -2%
                left: -10%

@media (min-width: 500px) and (max-width: 700px)

    .slider-5
        a
            transform: translateY(-25%)
        .image-area
            .home-slider5-role
                position: absolute
                width: 28%
                bottom: 10%
                left: 60%
                z-index: 2
            .home-slider5-base
                width: 100%
                left: 40%
                bottom: -5%
                position: absolute
            .home-slider5-base2
                width: 100%
                position: absolute
                bottom: 0%
                left: -10%

@media (min-width: 0px) and (max-width: 500px)
    .slider-5
        a
            transform: translateY(-25%)
            .dot
                width: 50px
                height: 50px
            .title
                font-size: 1.1rem
            .intro
                font-size: 0.9rem
        .image-area
            .home-slider5-role
                position: absolute
                width: 35%
                bottom: 10%
                left: 32%
            .home-slider5-base            
                width: 130%
                left: -15%
                bottom: -30px
                position: absolute
            .home-slider5-base2
                width: 100%
                position: absolute
                bottom: -5%
                left: -10%

</style>