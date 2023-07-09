<template lang="pug">
.slider-1
    .dot-container 
        .dot
        .title 卡姊的瑜珈教室 
        .eng-title Welcome!
    .scrollReminder 滑動來繼續看
    .image-area
        img.home-slider1-base(data-swiper-parallax="-10%" src="@/assets/images/home-slider1-base.webp")
        img.home-slider1-role(data-swiper-parallax="30%" src="@/assets/images/home-slider1-role.webp")
        img.home-slider1-base2(data-swiper-parallax="10%" src="@/assets/images/home-slider1-base2.webp")
</template>


<script setup>

</script>


<style lang="sass" scoped>
.slider-1
    width: 100%
    height: 100%
    display: flex    
    justify-content: center
    align-items: center
    flex-direction: column
    overflow: hidden
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
        .home-slider1-role
            position: absolute
            width: 20%
            bottom: 50px
            left: 10%
        .home-slider1-base
            position: absolute
            width: 100vw
            bottom: -50px
            right: 10%
        .home-slider1-base2
            position: absolute
            width: 100%
            left: 50%
            bottom: -50px

        
// @media (max-width: 1000px)
//     .image-area
//         .home-slider1-role
//             position: absolute
//             width: 20%
//             bottom: 30px
//             left: 10%
//         .home-slider1-base
//             position: absolute
//             width: 100vw
//             bottom: -50px
//             right: 10%
//         .home-slider1-base2
//             position: absolute
//             width: 100%
//             left: 50%
//             bottom: -50px

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