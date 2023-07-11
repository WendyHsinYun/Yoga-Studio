<template lang="pug">
.slider-2
    .dot-container
        a.dot(:class="{ 'dot-scaled': isDotScaled }"
            href="/about"
            @mouseover="scaleDot"
            @mouseleave="resetDot")
        .title 卡姊師資經歷
        .experience
            | RYT 200 美國瑜珈聯盟瑜珈師資證照
            br
            | AFAA 國際皮拉提斯師資證照
            br 
            | KX 機械皮拉提斯教練培訓
            br
            | 30 小時空瑜師資培訓
            br
            | 體育署初級體適能指導員
    .image-area
        img.home-slider2-base(data-swiper-parallax="-20%" src="@/assets/images/home-slider2-intro.webp")
        img.home-slider2-role(data-swiper-parallax="10%" src="@/assets/images/intro.webp")
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
    .dot-container
        width: 300px
        height: 400px
        letter-spacing: 2.5px
        font-family: 'Playfair Display'
        display: flex
        justify-content: start
        align-items: center
        flex-direction: column
        z-index: 6
        text-decoration: none
        color: #727171
        cursor: default
        white-space: nowrap
        // border: 1px solid black
        transform: translateY(50px)
        .dot
            width: 60px
            height: 60px
            background-color: #EB5F7D
            border-radius: 50%
        .dot-scaled
            animation: scaleAnimation .6s ease-in-out

        .title
            margin-top: 25px
            font-weight: 500
            font-size: 1.25rem
            white-space: nowrap
            position: relative
            font-weight: 500
        .experience
            font-weight: 100
            margin-top: 15px
            line-height: 30px
            font-size: 0.9rem 
            // opacity: .5

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
            width: 110vw
            bottom: -300px
            left: 20%

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
    .slider-2
        .image-area
            .home-slider2-role
                width: 20%
                bottom: 50px
                left: 70%
            .home-slider2-base
                width: 100vw
                bottom: -150px
                left: 20%

@media (min-width: 700px) and (max-width: 980px)
    .slider-2
        .dot-container
            width: 250px
            height: 350px
            transform: translateY(-5%)
            .title
                font-size: 1rem
            .experience
                font-size: 0.8rem
        .image-area
            .home-slider2-role
                width: 25%
                bottom: 50px
                left: 70%
            .home-slider2-base
                width: 110vw
                bottom: -15%
                left: 0%

@media (min-width: 450px) and (max-width: 700px)
    .slider-2
        .dot-container
            width: 250px
            height: 350px
            transform: translateY(-5%)
            .dot
                width: 50px
                height: 50px
            .title
                font-size: 1rem
            .experience
                font-size: 0.8rem
        .image-area
            .home-slider2-role
                width: 30%
                bottom: 50px
                left: 65%
            .home-slider2-base
                width: 120vw
                bottom: -8%
                left: -10%

@media (min-width: 0px) and (max-width: 450px)
    .slider-2
        .dot-container
            width: 250px
            height: 350px
            transform: translateY(-5%)
            .dot
                width: 50px
                height: 50px
            .title
                font-size: 16px
            .experience
                font-size: 13px
        .image-area
            .home-slider2-role
                width: 45%
                bottom: 50px
                left: 50%
            .home-slider2-base
                width: 120vw
                bottom: -5%
                left: -10%

</style>