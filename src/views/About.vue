<template lang="pug">
swiper(
    :parallax='true' 
    :modules='modules' 
    :navigation="true" 
    :speed="1000" ref="swiper" 
    :mousewheel="true")
    .parallax-bg(
        slot="container-start"
        :style="{ 'background': `url(${parallaxBg}) no-repeat` }"
        data-swiper-parallax='-45%')
    swiper-slide(v-for="(slide, index) in slides" :key="index")
        template(v-if="slide.component === 'aboutSlide1'")
            .dot-container
                .dot
                .title {{ slide.data.title }}
                .eng-title {{ slide.data.engTitle }}
            .scrollReminder {{ slide.data.scrollReminder }}
        template(v-if="slide.component === 'aboutSlide2'")
            p {{ slide.data.content }}
            img.about-slider2-role(
            data-swiper-parallax="15%" 
            :src="aboutImg1"
            title='卡姊的故事' 
            alt='卡姊中年退休後，投身瑜珈志業'
            )
        template(v-if="slide.component === 'aboutSlide3'")
            p {{ slide.data.content }}
            img.about-slider3-role(
            data-swiper-parallax="-20%" 
            :src="aboutImg2"
            title='卡姊的故事' 
            alt='卡姊中年退休後，投身瑜珈志業'
            )
        template(v-if="slide.component === 'aboutSlide4'")
            p {{ slide.data.content }}
            img.about-slider4-role(
            data-swiper-parallax="10%" 
            :src="aboutImg3"
            title='卡姊的故事' 
            alt='卡姊考取各類瑜珈證照'
            )

mouseHorizontal
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax, Navigation, Mousewheel } from "swiper";

import 'swiper/css';

import "swiper/css/navigation";

import mouseHorizontal from '@/components/mouseHorizontal.vue';

import parallaxBg from '/src/assets/images/bg-line.webp'

import aboutImg1 from '/src/assets/images/about-slider2-role.webp'
import aboutImg2 from '/src/assets/images/about-slider3-role.webp'
import aboutImg3 from '/src/assets/images/about-slider4-role.webp'


const components = {
    Swiper,
    SwiperSlide,
};

const modules = [Parallax,  Navigation, Mousewheel];

import { ref } from 'vue';


const slides = [
  { component: 'aboutSlide1', data: { title: '卡姊的故事', engTitle: 'About Jessica', scrollReminder: '向右滑動來看' } },
  { component: 'aboutSlide2', data: { content: '卡姊 50 歲後從公關公司負責人退休後，考取中正大學成人教育研究所，積極推廣退休後的第二人生觀念，不只是要為自己的財富做規劃，也要對自己的「健康儲蓄」做規劃。才能在邁向高齡的生活更強壯、自由，於是卡姊積極地加入各種體育活動。'} },
  { component: 'aboutSlide3', data: { content: '卡姊除了唸成人教育研究所之外，也去考了台科大的 EMBA 研究所，在此認識了許多運動的愛好者，每周末都投入馬拉松、單車、爬山等戶外運動。後來卡姊選擇以瑜珈作為志業，因為瑜珈是不受地點限制的運動，且對肌力及核心穩定度也有高度的要求，更能為身心平衡帶來益處。'} },
  { component: 'aboutSlide4', data: { content: '現在的卡姊除了有 RYT200 美國瑜珈聯盟瑜珈師資證照、AFAA 國際皮拉提斯師資證照、初級體適能指導員資格，也通過了 KX 機械皮拉提斯教練培訓、30 小時空瑜師資培訓等等。此外，卡姊也積極參與各種體適能研習，2023 下半年更要進修運動科學研究所。\n\n讓我們跟卡姊一起擁抱瑜珈，讓身心優雅盛放。'} },
];

</script>

<style lang='sass' scoped>
    
.swiper-button-next, .swiper-button-prev, .swiper-button-disabled, .swiper-button-disabled::after  
    --swiper-navigation-size: 300px
    --swiper-navigation-top-offset: 40%
    --swiper-navigation-sides-offset: 20px
    --swiper-navigation-color: none
    opacity: 0

.swiper
    width: 100%
    height: 100%
    .parallax-bg
        position: absolute
        left: 0
        bottom: -50px
        width: 250%
        height: 400px
        -webkit-background-size: cover
        background-position: center
        opacity: .1
        // border: 1px solid red
    .swiper-slide
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

        p
            width: 30%
            height: 300px
            line-height: 36px
            color: #696969
            letter-spacing: 2.5px
            font-family: 'Playfair Display'
        .about-slider2-role
            position: absolute
            width: 8%
            bottom: 0%
            left: 65%
        .about-slider3-role
            position: absolute
            bottom: 0%
            width: 30%
            left: 15%
        .about-slider4-role
            position: absolute
            bottom: 5%
            width: 25%
            left: 60%

@media(min-width: 830px ) and (max-width: 1080px )
        p
            font-size: 15px
            transform: translateY(-10%)
        .about-slider2-role
            width: 10%
            left: 60%
        .about-slider3-role
            bottom: 5%
            width: 35%
            left: 15%
        .about-slider4-role
            width: 25%
            left: 60%
@media(min-width: 550px ) and (max-width: 830px )
        p
            width: 45%
            font-size: 15px
            transform: translateY(-10%)
        .about-slider2-role
            width: 15%
            left: 60%
            bottom: 3%
        .about-slider3-role
            bottom: 5%
            width: 40%
            left: 15%
        .about-slider4-role
            width: 30%
            left: 70%
            bottom: 3%

@media(min-width: 360px ) and (max-width: 550px )
        p
            width: 70%
            font-size: 14px
            line-height: 28px
            transform: translateY(-45%)
        .about-slider2-role
            width: 18%
            left: 60%
            bottom: 3%
        .about-slider3-role
            bottom: 5%
            width: 65%
            left: 5%
        .about-slider4-role
            width: 40%
            left: 55%
            bottom: 3%
@media(min-width: 0px ) and (max-width: 360px )
        p
            width: 55%
            font-size: 13px
            line-height: 26px
            transform: translateY(0%)
        .about-slider2-role
            width: 25%
            left: 60%
            bottom: 5%        
        .about-slider3-role
            bottom: 5%
            width: 75%
            left: 5%
        .about-slider4-role
            width: 40%
            left: 55%
            bottom: 3%
@media(min-height: 460px ) and (max-height: 560px )
        p
            width: 50%
            transform: translateY(5%)
            font-size: 14px
            height: 300px
            line-height: 36px
        .about-slider2-role
            width: 10%
        .about-slider3-role
            bottom: 2%
            width: 75%
            left: 10%
        .about-slider4-role
            width: 30%
            left: 50%
@media(min-height: 0px ) and (max-height: 460px )
        p
            width: 80%
            transform: translateY(5%)
            font-size: 13px
            height: 50%
            line-height: 26px
            letter-spacing: 1px
        .about-slider2-role
            width: 12%
        .about-slider3-role
            bottom: 0%
            width: 40%
            left: 8%
        .about-slider4-role
            width: 35%
</style>
