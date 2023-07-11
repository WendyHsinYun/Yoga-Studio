<template lang="pug">
.slider-1
    .dot-container 
        .dot
        .title 卡姊瑜珈教室 
        .eng-title Welcome!
    .scrollReminder 滑動來繼續看
    .image-area
        img.home-slider1-base2(data-swiper-parallax="10%" src="@/assets/images/home-slider3-base.webp")
        img.home-slider1-base(data-swiper-parallax="-10%" src="@/assets/images/home-slider1-base.webp")
        img.home-slider1-role(data-swiper-parallax="30%" src="@/assets/images/home-slider1-role.webp")
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
        transform: translateY(-50px)
        .dot 
            width: 60px
            height: 60px
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
        letter-spacing: 2px
        opacity: .5
        margin-top: -20px
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



@media (min-width: 1000px) and (max-width: 1280px)
    .slider-1
        .dot-container 
            transform: translateY(-25%)
        .image-area
            .home-slider1-role
                position: absolute
                bottom: 7%
                width: 25%
                left: 7%
            .home-slider1-base2
                width: 100%
                left: 40%
                bottom: -3%
                position: absolute
            .home-slider1-base
                width: 100%
                position: absolute
                bottom: -5%
                left: -10%

@media (min-width: 450px) and (max-width: 1000px)
    .slider-1
        .dot-container 
            transform: translateY(-25%)
        .scrollReminder
            transform: translateY(-50px)
        .image-area        
            .home-slider1-role
                position: absolute
                width: 30%
                bottom: 8%
                left: 5%
            .home-slider1-base2
                width: 100%
                left: 40%
                bottom: 0%
                position: absolute
            .home-slider1-base
                width: 100%
                position: absolute
                bottom: 0%
                left: -10%

@media (min-width: 550px) and (max-width: 700px)

    .slider-1
        .dot-container 
            transform: translateY(-25%)
        .scrollReminder
            transform: translateY(-70px)
        .image-area        
            .home-slider1-role
                position: absolute
                width: 33%
                bottom: 8%
                left: 5%
            .home-slider1-base2
                width: 100%
                left: 40%
                bottom: 0%
                position: absolute
            .home-slider1-base
                width: 135%
                height: 15%
                position: absolute
                bottom: 0%
                left: -10%

@media (min-width: 0px) and (max-width: 550px)
    .slider-1
        .dot-container 
            transform: translateY(-25%)
        .scrollReminder
            transform: translateY(-80px)
        .image-area        
            .home-slider1-role
                position: absolute
                width: 45%
                bottom: 8%
                left: 5%
            .home-slider1-base2
                width: 100%
                left: 40%
                bottom: 0%
                position: absolute
            .home-slider1-base
                width: 135%
                height: 15%
                position: absolute
                bottom: 0%
                left: -10%

</style>