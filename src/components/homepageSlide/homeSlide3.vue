<template lang="pug">
.slider-3
    router-link(to="/classes/KXPilates") 
        .dot(:class="{ 'dot-scaled': isDotScaled }"
            @mouseover="scaleDot"
            @mouseleave="resetDot")
        .title 機械皮拉提斯
        .eng-title KX Pilates
    .image-area
        img.home-slider3-base(data-swiper-parallax="100" src="@/assets/images/home-slider3-base.png")
        img.home-slider3-role(data-swiper-parallax="-400" src="@/assets/images/home-slider3-role.png")
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
            background-color: #787878
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
        .home-slider3-base
            width: 100%
            height: auto
            left: 100px
            bottom: -70px
            position: absolute
        .home-slider3-role
            width: 75%
            height: auto
            bottom: -30px
            position: absolute
            left: -50px
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