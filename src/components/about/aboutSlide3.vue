<template lang="pug">
.slider-3
    .content 
        p 卡姊除了唸成人教育研究所之外，也去考了台科大的 EMBA 研究所，在此認識了許多運動的愛好者，每周末都投入馬拉松、單車、爬山等戶外運動。後來卡姊選擇以瑜珈作為志業，因為瑜珈是隨時隨地、不分年齡都適合的運動，且對肌力及核心穩定度有高度的要求，同時又能維持個人的身心平衡。
        
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
        color: #4A4A4A
        letter-spacing: 2.5px
        font-family: 'Playfair Display'
        // border: 1px solid black

</style>