<template lang="pug">
.slider-2
    .content 
        p 卡姊 50 歲後從公關公司負責人退休後，考取中正大學成人教育研究所，積極推廣退休後的第二人生觀念，不只是要為自己的財富做規劃，也要對自己的「健康儲蓄」做規劃。才能在邁向高齡的生活更強壯、自由，於是卡姊積極地加入各種體育活動。    
    img.about-slider2-role(data-swiper-parallax="15%" src="@/assets/images/about-slider2-role.webp")

</template>


<script setup>

</script>


<style lang="sass" scoped>
.slider-2
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
    .about-slider2-role
        position: absolute
        width: 8%
        bottom: 0%
        left: 65%


@media(min-width: 830px ) and (max-width: 1080px )
    .slider-2
        .content
            font-size: 15px
            transform: translateY(-10%)
        .about-slider2-role
            width: 10%
            left: 60%

@media(min-width: 550px ) and (max-width: 830px )
    .slider-2
        .content
            width: 45%
            font-size: 15px
            transform: translateY(-10%)
        .about-slider2-role
            width: 15%
            left: 60%
            bottom: 3%

@media(min-width: 350px ) and (max-width: 550px )
    .slider-2
        .content
            width: 50%
            font-size: 14px
            line-height: 28px
            transform: translateY(-15%)
        .about-slider2-role
            width: 18%
            left: 60%
            bottom: 3%
@media(min-width: 0px ) and (max-width: 350px )
    .slider-2
        .content
            width: 55%
            font-size: 13px
            line-height: 26px
            transform: translateY(0%)
        .about-slider2-role
            width: 25%
            left: 60%
            bottom: 5%        

@media(min-height: 460px ) and (max-height: 560px )
    .slider-2
        .content
            width: 50%
            transform: translateY(5%)
            font-size: 14px
            height: 300px
            line-height: 36px
        .about-slider2-role
            width: 10%

@media(min-height: 0px ) and (max-height: 460px )
    .slider-2
        .content
            width: 80%
            transform: translateY(5%)
            font-size: 13px
            height: 50%
            line-height: 26px
            letter-spacing: 1px
        .about-slider2-role
            width: 12%
</style>