<template lang="pug">
//- swiper.mySwiper(:speed='600' :parallax='true' :navigation='true' :modules='modules')
//-     .parallax-bg(:style="{'background-image': 'url(https://swiperjs.com/demos/images/nature-1.jpg)'}" data-swiper-parallax='-10%')
//-         .c-nav
//-             .dot-1(data-text="Namaste")
//-             .dot-2(data-text="瑜珈課")
//-             .dot-3(data-text="機械皮拉提斯")
//-             .dot-4(data-text="空中瑜珈")
//-     swiper-slide
//-         .title(data-swiper-parallax='-300') Slide 1
//-         .subtitle(data-swiper-parallax='-200') Subtitle
//-         .text(data-swiper-parallax='-100')
//-         p
//-             | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//-             | dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//-             | laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//-             | Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//-             | Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
//-             | velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
//-             | libero. Aenean feugiat non eros quis feugiat.
//-     swiper-slide
//-         .title(data-swiper-parallax='-300') Slide 2
//-         .subtitle(data-swiper-parallax='-200') Subtitle
//-         .text(data-swiper-parallax='-100')
//-         p
//-             | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//-             | dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//-             | laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//-             | Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//-             | Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
//-             | velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
//-             | libero. Aenean feugiat non eros quis feugiat.
//-     swiper-slide
//-         .title(data-swiper-parallax='-300') Slide 3
//-         .subtitle(data-swiper-parallax='-200') Subtitle
//-         .text(data-swiper-parallax='-100')
//-         p
//-             | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//-             | dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//-             | laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//-             | Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//-             | Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
//-             | velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
//-             | libero. Aenean feugiat non eros quis feugiat.
</template>


<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";

const components = {
  Swiper,
  SwiperSlide,
};

const modules = [Parallax, Pagination, Navigation];


//
</script>

  
<style lang='sass' scoped>
#app
  height: 100%

html
  position: relative
  height: 100%

body
  position: relative
  height: 100%
  background: #eee
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif
  font-size: 14px
  color: #000
  margin: 0
  padding: 0

.swiper
  width: 100%
  height: 100%
  background: #000

.swiper-slide
  font-size: 18px
  color: #fff
  -webkit-box-sizing: border-box
  box-sizing: border-box
  padding: 40px 60px

.parallax-bg
  position: absolute
  left: 0
  top: 0
  width: 130%
  height: 100%
  -webkit-background-size: cover
  background-size: cover
  background-position: center
.c-container
    width: 450px
    height: 450px
    top: -350px
    left: 50%
    transform: translateX(-50%)
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    
    .c-nav
        width: 400px
        height: 400px
        border-radius: 50%
        border: 1px solid #565151
        opacity: .5
        position: absolute
        display: flex
        justify-content: center
        align-items: center
        
        .dot-1, .dot-2, .dot-3, .dot-4 
            position: relative
            width: 8px
            height: 8px
            border: 1px solid #565151
            border-radius: 50%
            background-color: #565151
        .dot-1::after, .dot-2::after, .dot-3::after, .dot-4::after
            content: attr(data-text)
            letter-spacing: 1px
            font-family: 'Playfair Display'
            white-space: nowrap
            position: absolute
        .dot-1::after
            top: 35px
            right: -30px 
        .dot-1
            top: 45%
        .dot-2::after
            right: -80px
            top: -5px 
        .dot-2
            right: -45%
        .dot-3::after
            top: -45px
            right: -50px
        .dot-3
            top: -45%
        .dot-4::after
            top: -5px
            right: 55px
        .dot-4 
            right: 45%
.swiper-slide
  .title
    font-size: 41px
    font-weight: 300

  .subtitle
    font-size: 21px

  .text
    font-size: 14px
    max-width: 400px
    line-height: 1.3

</style>
