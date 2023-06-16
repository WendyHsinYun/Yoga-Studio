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
        img.home-page-image(src="@/assets/images/homepage-mix.png")
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


<style lang="sass">
.cursor-solid
    background-image: url('./src/assets/images/mouse_solid.svg')
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
        z-index: 5
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
        .home-page-image
            position: relative
            width: 100%
            height: auto
            bottom: 0px
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