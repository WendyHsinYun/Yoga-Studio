<template lang="pug">
.slider-3
    .content 
        p 卡姊除了唸成人教育研究所之外，也去考了台科大的 EMBA 研究所，在此認識了許多運動的愛好者，每周末都投入馬拉松、單車、爬山等戶外運動。後來卡姊選擇以瑜珈作為志業，因為瑜珈是不受地點限制的運動，且對肌力及核心穩定度也有高度的要求，更能為身心平衡帶來益處。
    img.about-slider3-role(data-swiper-parallax="-20%" src="@/assets/images/about-slider3-role.webp")
        
</template>

<style lang="sass" scoped>

.slider-3
    width: 100%
    height: 100%
    display: flex    
    justify-content: center
    align-items: center
    flex-direction: column
    .content
        width: 30%
        height: 300px
        line-height: 36px
        color: #696969
        letter-spacing: 2.5px
        font-family: 'Playfair Display'
        // border: 1px solid black
    .about-slider3-role
        position: absolute
        bottom: 0%
        width: 30%
        left: 15%

@media(min-width: 830px ) and (max-width: 1080px )
    .slider-3
        .content
            font-size: 15px
            transform: translateY(-10%)
            width: 45%
        .about-slider3-role
            bottom: 5%
            width: 35%
            left: 15%
            
@media(min-width: 550px ) and (max-width: 830px )
    .slider-3
        .content
            width: 45%
            font-size: 15px
            transform: translateY(-10%)
        .about-slider3-role
            bottom: 5%
            width: 40%
            left: 15%

@media(min-width: 350px ) and (max-width: 550px )
    .slider-3
        .content
            width: 50%
            font-size: 14px
            line-height: 32px
            transform: translateY(-20%)
        .about-slider3-role
            bottom: 5%
            width: 65%
            left: 5%
@media(min-width: 0px ) and (max-width: 350px )
    .slider-3
        .content
            width: 55%
            font-size: 13px
            line-height: 26px
            transform: translateY(-15%)
        .about-slider3-role
            bottom: 5%
            width: 75%
            left: 5%

@media(min-height: 560px ) and (max-height: 650px )
    .slider-3
        .content
            width: 60%
            transform: translateY(-15%)
            font-size: 14px
            height: 50%
            line-height: 32px
        .about-slider3-role
            bottom: 2%
            width: 75%
            left: 10%


@media(min-height: 460px ) and (max-height: 560px )
    .slider-3
        .content            
            width: 50%
            transform: translateY(5%)
            font-size: 13px
            height: 300px
            line-height: 30px
        .about-slider3-role
            bottom: 0%
            width: 40%
            left: 8%


@media(min-height: 0px ) and (max-height: 460px )
    .slider-3
        .content            
            width: 70%
            transform: translateY(10%)
            font-size: 13px
            height: 60%
            line-height: 26px
            letter-spacing: 1px
        .about-slider3-role
            bottom: 0%
            width: 40%
            left: 8%

</style>