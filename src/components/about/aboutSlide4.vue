<template lang="pug">
.slider-4
    .content 
        p 
            | 現在的卡姊除了有 RYT200 美國瑜珈聯盟瑜珈師資證照、AFAA 國際皮拉提斯師資證照、初級體適能指導員資格，也通過了 KX 機械皮拉提斯教練培訓、30 小時空瑜師資培訓等等。此外，卡姊也積極參與各種體適能研習，2023 下半年更要進修運動科學研究所。
            br 
            br
            | 讓我們跟卡姊一起擁抱瑜珈，讓身心優雅盛放。
    img.about-slider4-role(data-swiper-parallax="10%" src="@/assets/images/about-slider4-role.webp")


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

.slider-4
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
    .about-slider4-role
        position: absolute
        bottom: 5%
        width: 25%
        left: 55%


</style>