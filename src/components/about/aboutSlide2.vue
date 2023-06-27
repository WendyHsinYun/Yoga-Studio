<template lang="pug">
.slider-2
    .content 
        p 卡姊 50 歲後從公關公司負責人退休後，考取中正大學成人教育研究所，積極推廣退休後的第二人生觀念，不只是要為自己的財富做規劃，也要對自己的「健康儲蓄」做規劃。才能在邁向高齡的生活更強壯、自由，於是卡姊積極地加入各種體育活動。
        

</template>


<script setup>

</script>


<style lang="sass" scoped>
.swiper-button-next, .swiper-button-prev, .swiper-button-disabled, .swiper-button-disabled::after  
    --swiper-navigation-size: 500px
    --swiper-navigation-top-offset: 40%
    --swiper-navigation-sides-offset: 20px
    --swiper-navigation-color: none
    opacity: 0

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
        color: #4A4A4A
        letter-spacing: 2.5px
        font-family: 'Playfair Display'
        // border: 1px solid black

</style>