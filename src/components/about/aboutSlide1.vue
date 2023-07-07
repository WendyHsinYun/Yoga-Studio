<template lang="pug">
.slider-1
    .dot-container 
        .dot
        .title 卡姊的故事 
        .eng-title About Jessica
    .scrollReminder 滑動來繼續看

</template>


<script setup>

</script>


<style lang="sass" scoped>
// .swiper-button-next, .swiper-button-prev, .swiper-button-disabled, .swiper-button-disabled::after  
//     --swiper-navigation-size: 500px
//     --swiper-navigation-top-offset: 40%
//     --swiper-navigation-sides-offset: 20px
//     --swiper-navigation-color: none
//     opacity: 0

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
        .dot 
            width: 70px
            height: 70px
            background-color: #EB5F7D
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
        transform: rotate(-5deg)



</style>