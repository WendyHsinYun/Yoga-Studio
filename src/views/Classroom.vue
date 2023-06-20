<template>
  <swiper :navigation="true" :parallax="true" :modules="modules" @slideChange="handleSlideChange">
    <div class="parallax-bg" :style="{'background-image': 'url(../src/assets/images/bg-line.png)'}" data-swiper-parallax="-30%"></div>
    <div class="c-container">
      <div class="c-nav">
        <div class="dot-1" data-text="Namaste"></div>
        <div class="dot-2" data-text="瑜珈課"></div>
        <div class="dot-3" data-text="機械皮拉提斯"></div>
        <div class="dot-4" data-text="空中瑜珈"></div>
      </div>
    </div>
    <swiper-slide>
      slide 1
    </swiper-slide>
    <swiper-slide>
      Slide 2
    </swiper-slide>
    <swiper-slide>
      Slide 3
    </swiper-slide>
    <swiper-slide>
      Slide 4
    </swiper-slide>
  </swiper>
</template>


<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
const modules = [Parallax, Pagination, Navigation];

const components = {
  Swiper,
  SwiperSlide,
};



import { ref } from 'vue';

const rotation = ref(0);

function handleSlideChange() {
  rotation.value += 360;
}

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
  // background: #000

.swiper-slide
  width: 100%
  height: 100%
  font-size: 18px
  color: #fff
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
  opacity: .2
.c-container
  width: 450px
  height: 450px
  bottom: 0px
  left: 50%
  transform: translateX(-50%)
  border: 1px solid black
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
