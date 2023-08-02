<template lang="pug">
loadingPage(v-show="loading")
swiper(
  :parallax='true' 
  :modules='modules' 
  :navigation="true" 
  :speed="1000" 
  :mousewheel="true" 
  v-show="!loading"
  )
  .parallax-bg(
    slot="container-start"
    :style="{'background': `url(${parallaxBg}) no-repeat` }"
    data-swiper-parallax='-20%')
  swiper-slide(v-for="(slide, index) in slides" :key="index")
    template(v-if="slide.component === 'homeSlide1'")
      .slide.slide1
        .dot-container
          .dot(:class="{ 'dot-scaled': isDotScaled }"
            @mouseover="scaleDot"
            @mouseleave="resetDot" 
            :style="{ 'background-color': slide.data.backgroundColor }")
          .title {{ slide.data.title }}
          .eng-title {{ slide.data.engTitle }}
        .scrollReminder {{ slide.data.scrollReminder }}
        .image-area
          img.slider1-base2(
            data-swiper-parallax="10%"
            :src="homeSlide1Base2"
            alt='卡姊瑜珈教室'
          )
          img.slider1-base(
            data-swiper-parallax="-10%"
            :src="homeSlide1Base1"
            alt='卡姊瑜珈教室'
          )
          img.slider1-role(
            data-swiper-parallax="30%"
            :src="homeSlide1Role"
            alt='卡姊瑜珈教室'
          )
    template(v-if="slide.component === 'homeSlide2'")
      .slide.slide2
        .dot-container
          router-link(to="/about")
            .dot(:class="{ 'dot-scaled': isDotScaled }"
              @mouseover="scaleDot"
              @mouseleave="resetDot" 
              :style="{ 'background-color': slide.data.backgroundColor }")
          .title {{ slide.data.title }}
          .experience(v-html="slide.data.experience")
        .image-area
          img.slider2-base(
            data-swiper-parallax="-20%" 
            :src="homeSlide2Base"
            alt='卡姊瑜珈教室')
          img.slider2-role(
            data-swiper-parallax="10%" 
            :src="homeSlide2Role"
            alt='卡姊瑜珈教室'
          )
    template(v-if="slide.component === 'homeSlide3'")
      .slide.slide3
        .dot-container
          router-link(to='/classes/yoga')
            .dot(:class="{ 'dot-scaled': isDotScaled }"
              @mouseover="scaleDot"
              @mouseleave="resetDot" 
              :style="{ 'background-color': slide.data.backgroundColor }")
          .title {{ slide.data.title }}
          .intro {{ slide.data.intro }}
        .image-area
          img.slider3-base(
            data-swiper-parallax="-20%" 
            :src="homeSlide3Base"
            alt='瑜珈課'
            )
          img.slider3-role(
            data-swiper-parallax="0%" 
            :src="homeSlide3Role"
            alt='瑜珈課')
    template(v-if="slide.component === 'homeSlide4'")
      .slide.slide4
        .dot-container
          router-link(to='/classes/KXPilates')
            .dot(:class="{ 'dot-scaled': isDotScaled }"
              @mouseover="scaleDot"
              @mouseleave="resetDot" 
              :style="{ 'background-color': slide.data.backgroundColor }")
          .title {{ slide.data.title }}
          .intro {{ slide.data.intro }}
        .image-area  
          img.slider4-base(
            data-swiper-parallax="-10%" 
            :src="homeSlide4Base"
            alt='機械皮拉提斯課'
            )
          img.slider4-role(
            data-swiper-parallax="0%" 
            :src="homeSlide4Role"
            alt='機械皮拉提斯課'
            )
          img.slider4-machine(
            data-swiper-parallax="-30%" 
            :src="homeSlide4Machine"
            alt='機械皮拉提斯課'
            )
    template(v-if="slide.component === 'homeSlide5'")
      .slide.slide5
        .dot-container
          router-link(to='/classes/AerialYoga')
            .dot(:class="{ 'dot-scaled': isDotScaled }"
              @mouseover="scaleDot"
              @mouseleave="resetDot" 
              :style="{ 'background-color': slide.data.backgroundColor }")
          .title {{ slide.data.title }}
          .intro {{ slide.data.intro }}
        .image-area      
          img.slider5-role(
            data-swiper-parallax="0%" 
            :src="homeSlide5Role"
            alt='空中瑜珈課'
            )
          img.slider5-base2(
            data-swiper-parallax="5%" 
            :src="homeSlide5Base2"
            alt='空中瑜珈課'
            )
          img.slider5-base(
            data-swiper-parallax="-20%"
            :src="homeSlide5Base1"
            alt='空中瑜珈課'
            ) 
mouseHorizontal
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax, Navigation, Mousewheel } from "swiper";
import { ref, onMounted } from 'vue';

import { RouterLink } from 'vue-router';

import router from '@/router/router';

import loadingPage from '../components/loadingPage.vue';
import mouseHorizontal from '@/components/mouseHorizontal.vue';

import 'swiper/css';
import "swiper/css/navigation";

import parallaxBg from '/src/assets/images/bg-line.webp'

import homeSlide1Base1 from '/src/assets/images/home-slider1-base.webp';
import homeSlide1Base2 from '/src/assets/images/home-slider3-base.webp';
import homeSlide1Role from '/src/assets/images/home-slider1-role.webp';
import homeSlide2Base from '/src/assets/images/home-slider2-intro.webp';
import homeSlide2Role from '/src/assets/images/intro.webp';
import homeSlide3Base from '/src/assets/images/home-slider2-base.webp';
import homeSlide3Role from '/src/assets/images/home-slider2-role.webp';
import homeSlide4Base from '/src/assets/images/home-slider1-base2.webp';
import homeSlide4Role from '/src/assets/images/home-slider3-role.webp';
import homeSlide4Machine from '/src/assets/images/home-slider4-machine.webp';
import homeSlide5Base1 from '/src/assets/images/home-slider4-base.webp';
import homeSlide5Base2 from '/src/assets/images/home-slider4-base2.webp';
import homeSlide5Role from '/src/assets/images/home-slider4-role.webp';


const components = {
  Swiper,
  SwiperSlide,
};

const modules = [ Parallax, Navigation, Mousewheel];

// dot scaled

const isDotScaled = ref(false);

function scaleDot() {
    isDotScaled.value = true;
}
function resetDot() {
    isDotScaled.value = false;
}

// slides component

const slides = ref([
  { component: 'homeSlide1', 
    data:{ title: '卡姊瑜珈教室', engTitle: 'Welcome!', scrollReminder: '向右滑動來看', backgroundColor: '#2DD98A'}, 
    },
  
  { component: 'homeSlide2', 
    data:{ title: '卡姊師資經歷', experience: '<div class="experience">RYT 200 美國瑜珈聯盟瑜珈師資證照<br />AFAA 國際皮拉提斯師資證照<br />KX 機械皮拉提斯教練培訓<br />30 小時空瑜師資培訓<br />體育署初級體適能指導員</div>', backgroundColor: '#EB5F7D' } },
 
  { component: 'homeSlide3', 
    data: { title: '瑜珈課 Yoga', intro: '透過墊上運動，就能矯正體態、加強體能與消耗熱量。', backgroundColor: '#FFA245' } },

  { component: 'homeSlide4', 
    data: { title: '機械皮拉提斯 KX Pilates', intro: '利用器材輔助，提升身體感受力，針對局部的肌力加強。', backgroundColor: '#9f7f60' }},

  { component: 'homeSlide5', 
    data: { title: '空中瑜珈 Aerial Yoga', intro: '利用懸吊的掛布，透過地心引力增加身體協調、平衡及穩定性。', backgroundColor: '#D2DA40'} },
]);


// loading

const loading = ref(true);
const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    progress.value += 5
    if (progress.value >= 100) {
      clearInterval(interval);
      loading.value = false;
    }
  }, 100);

});


</script>

<style lang='sass' scoped>

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

  
.swiper
  width: 100vw
  height: 100vh
  overflow: hidden
  .parallax-bg
    position: absolute
    left: 0
    bottom: -25px
    width: 250%
    height: 400px
    -webkit-background-size: cover
    background-position: center
    opacity: .1
  .swiper-slide
    width: 100%
    height: 100%
    .slide
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
        z-index: 6
        .dot-scaled
          animation: scaleAnimation .6s ease-in-out
        .dot 
          width: 60px
          height: 60px
          background-color: #2DD98A
          border-radius: 50%
        .title
          margin-top: 30px
          font-weight: 500
          font-size: 1.25rem
          white-space: nowrap
          opacity: .5
        .eng-title
          font-weight: 100
          margin-top: 20px
          opacity: .5
        .experience
          font-weight: 100
          margin-top: 15px
          line-height: 30px
          font-size: 0.9rem
          opacity: .6
          text-align: center
        .intro
          font-weight: 100
          margin-top: 20px
          opacity: .5
          text-align: center
        
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
        .slider1-role
          position: absolute
          width: 20%
          bottom: 50px
          left: 10%
        .slider1-base
          position: absolute
          width: 100vw
          bottom: -50px
          right: 10%
        .slider1-base2
          position: absolute
          width: 100%
          left: 50%
          bottom: -50px
        .slider2-role
          position: absolute
          width: 15%
          bottom: 50px
          left: 70%
        .slider2-base
          position: absolute
          width: 110vw
          bottom: -30%
          left: 20%
        .slider3-role
          position: absolute
          width: 15%
          bottom: 50px
          left: 70%
        .slider3-base
          position: absolute
          width: 100vw
          bottom: -12%
          left: 10%
        .slider4-role
          position: absolute
          width: 15%
          left: 80px
          bottom: 100px
          left: 15%
          z-index: 2
        .slider4-base
          position: absolute
          width: 130vw
          bottom: -15%
          left: -3%
        .slider4-machine
          position: absolute
          width: 25vw
          left: 10%
          bottom: 0
        .slider5-base
          width: 100%
          left: 40%
          bottom: -120px
          position: absolute
        .slider5-base2
          width: 100%
          position: absolute
          bottom: -5%
          left: -10%
        .slider5-role
          width: 17%
          height: auto
          bottom: 20%
          position: absolute
          left: 65%            


@media (min-height: 470px) and (max-height: 600px)
  .slide
    .dot-container 
      transform: translateY(10%)
      .dot 
        width: 50px
        height: 50px
      .title
        font-size: 1.1rem
      .eng-title
        font-size: 0.8rem
      .experience
        font-size: 0.8rem
      .intro
        font-size: .95rem
    .scrollReminder
      transform: translateY(-30px)
      font-size: 0.8rem

@media (min-height: 390px) and (max-height: 470px)
  .slide
    .dot-container 
      transform: translateY(-5%)
      .dot 
        width: 50px
        height: 50px
      .title
        font-size: 1.1rem
      .eng-title
        display: none
      
      
    .scrollReminder
      transform: translateY(-75px)
      font-size: 0.8rem
    .image-area
      .slider1-role
        bottom: 7%
        width: 20%
        left: 7%
      .slider1-base
        width: 100%
        bottom: -10%
        left: -10%

  .slide2
    .dot-container 
      transform: translateY(25%)
      .dot 
        width: 50px
        height: 50px
      .title
        font-size: 1rem
      .experience
        line-height: 23px
  .slide3, .slide4, .slide5
    .dot-container  
      transform: translateY(-10px)
      .dot 
        width: 50px
        height: 50px
      .title
        font-size: 1rem
      .intro
        font-size: .85rem
    .image-area
      .slider3-role
        width: 25%
        bottom: 30px
        left: 70%
      .slider3-base
        width: 120vw
        bottom: -10%
        left: -5%   
      .slider4-role
        width: 12%
        bottom: 15%
        left: 15%
        z-index: 2
      .slider4-base
        width: 110vw
        bottom: -15%
        left: -3%
      .slider4-machine
        width: 22vw
        left: 10%
        bottom: 3%
      .slider5-role
        width: 15%
        bottom: 15%
        left: 70%
      .slider5-base
        width: 100%
        left: 40%
        bottom: -12%
      .slider5-base2
        width: 100%
        bottom: 0%
        left: -10%


@media (min-height: 0px) and (max-height: 390px)
  .slide1
    .dot-container 
      transform: translateY(-5%)
      .dot 
        width: 50px
        height: 50px
      .title
        font-size: 1.1rem
      .eng-title
        display: none
      
      
    .scrollReminder
      transform: translateY(-75px)
      font-size: 0.8rem
    .image-area
      .slider1-role
        bottom: 7%
        width: 20%
        left: 7%
      .slider1-base
        width: 100%
        bottom: -10%
        left: -10%

  .slide2
    .dot-container 
      transform: translateY(-70px)
      .dot 
        width: 40px
        height: 40px
      .title
        font-size: 1rem
      .experience
        line-height: .75rem
    .image-area
      .slider2-role
        width: 22%
        bottom: 50px
        left: 70%
      .slider2-base
        width: 110vw
        bottom: -130px
        left: 0%

  .slide3, .slide4, .slide5
    .dot-container  
      transform: translateY(20px)
      .dot 
        width: 40px
        height: 40px
      .title
        font-size: 1rem
      .intro
        display: none
    .image-area
      .slider3-role
        width: 18%
        bottom: 30px
        left: 65%
      .slider3-base
        width: 120vw
        bottom: -15%
        left: -5%
      .slider4-role
        width: 12%
        bottom: 15%
        left: 15%
        z-index: 2
      .slider4-base
        width: 110vw
        bottom: -15%
        left: -3%
      .slider4-machine
        width: 22vw
        left: 10%
        bottom: 3%
      .slider5-role
        width: 15%
        bottom: 15%
        left: 70%
      .slider5-base
        width: 100%
        left: 40%
        bottom: -12%
      .slider5-base2
        width: 100%
        bottom: 0%
        left: -10%    



@media (min-width: 980px) and (max-width: 1280px)
  .slide
    .dot-container 
      transform: translateY(-25%)
    .image-area
      .slider1-role
        bottom: 7%
        width: 25%
        left: 7%
      .slider1-base2
        width: 100%
        left: 40%
        bottom: -3%
      .slider1-base
        width: 100%
        bottom: -5%
        left: -10%
      .slider2-role
        width: 20%
        bottom: 50px
        left: 70%
      .slider2-base
        width: 100vw
        bottom: -150px
        left: 20%
      .slider3-role
        width: 17%
        bottom: 50px
        left: 65%
      .slider3-base
        width: 110vw
        bottom: -80px
        left: 5%    
      .slider4-role
        width: 15%
        left: 80px
        bottom: 15%
        left: 15%
        z-index: 2
      .slider4-base
        width: 110vw
        bottom: -10%
        left: -3%
      .slider4-machine
        width: 25vw
        left: 10%
        bottom: 3%
      .slider5-role
        width: 18%
        bottom: 15%
        left: 70%
      .slider5-base
        width: 100%
        left: 40%
        bottom: -120px
      .slider5-base2
        width: 100%
        bottom: -5%
        left: -10%

@media (min-width: 700px) and (max-width: 980px)
  .slide
    .dot-container 
      transform: translateY(-25%)
    .image-area
      .slider1-role
        bottom: 7%
        width: 25%
        left: 7%
      .slider1-base2
        width: 100%
        left: 40%
        bottom: -3%
      .slider1-base
        width: 100%
        bottom: -5%
        left: -10%
      .slider2-role
        width: 20%
        bottom: 50px
        left: 70%
      .slider2-base
        width: 100vw
        bottom: -150px
        left: 20%
      .slider3-role
        width: 22%
        bottom: 50px
        left: 65%
      .slider3-base
        width: 110vw
        bottom: -5%
        left: 5%   
      .slider4-role
        width: 15%
        left: 80px
        bottom: 15%
        left: 15%
        z-index: 2
      .slider4-base
        width: 110vw
        bottom: -10%
        left: -3%
      .slider4-machine
        width: 25vw
        left: 10%
        bottom: 3%
      .slider5-role
        width: 18%
        bottom: 15%
        left: 70%
      .slider5-base
        width: 100%
        left: 40%
        bottom: -120px
      .slider5-base2
        width: 100%
        bottom: -5%
        left: -10%

@media (min-width: 500px) and (max-width: 700px)
  .slide
    .dot-container 
      transform: translateY(-25%)
      .dot
        width: 50px
        height: 50px
      .title
        font-size: 1rem
      .experience
        font-size: 0.8rem
      .intro
        font-size: 0.8rem
    .scrollReminder
      transform: translateY(-50px)
    .image-area        
      .slider1-role
        width: 30%
        bottom: 8%
        left: 5%
      .slider1-base2
        width: 100%
        left: 40%
        bottom: 0%
      .slider1-base
        width: 100%
        bottom: 0%
        left: -10%
      .slider2-role
        width: 30%
        bottom: 50px
        left: 65%
      .slider2-base
        width: 120vw
        bottom: -10%
        left: -10%
      .slider3-role
        width: 30%
        bottom: 50px
        left: 60%
      .slider3-base
        width: 110vw
        bottom: 0%
        left: 5%
      .slider4-role
        width: 20%
        bottom: 12%
        left: 10%
        z-index: 2
      .slider4-base
        width: 130vw
        bottom: -5%
        left: -3%
      .slider4-machine
        width: 32vw
        left: 8%
        bottom: 3%
      .slider5-role
        width: 22%
        bottom: 14%
        left: 67%
          z-index: 2
      .slider5-base
        width: 100%
        left: 40%
        bottom: -5%
      .slider5-base2
        width: 100%
        bottom: 0%
        left: -10%

@media (min-width: 0px) and (max-width: 500px)
  .slide
    .dot-container 
      .dot
        width: 50px
        height: 50px
      .title
        font-size: 1rem
      .intro
        font-size: 0.8rem
      .experience
        font-size: 13px
      .image-area
        .slider2-role
          width: 45%
          bottom: 50px
          left: 50%
        .slider2-base
          width: 120vw
          bottom: -5%
          left: -10%
        .slider3-role
          width: 40%
          bottom: 50px
          left: 45%
        .slider3-base
          width: 120vw
          bottom: 0%
          left: -10%
        .slider4-role
          width: 35%
          left: 80px
          bottom: 10%
          left: 15%
          z-index: 2
        .slider4-base
          width: 130vw
          bottom: 0%
          left: -3%
        .slider4-machine
          width: 40vw
          left: 12%
          bottom: 3%
        .slider5-role
          width: 35%
          bottom: 10%
          left: 32%
        .slider5-base            
          width: 130%
          left: -15%
          bottom: -30px
        .slider5-base2
          width: 100%
          bottom: -5%
          left: -10%
  .slide1
    .dot-container 
      transform: translateY(-10%)
      .title
        font-size: 1rem
      .eng-title
        font-size: 0.8rem
    .scrollReminder
      font-size: 0.7rem
      transform: translateY(-80px)
    .image-area        
      .slider1-role
        width: 40%
        bottom: 8%
        left: 5%
      .slider1-base2
        width: 100%
        left: 40%
        bottom: 0%
      .slider1-base
        width: 135%
        height: 15%
        bottom: 0%
  .slide2
    .dot-container
      width: 250px
      height: 350px
      transform: translateY(-5%)
      .dot
        width: 50px
        height: 50px
      .title
        font-size: 16px
      .experience
        font-size: 13px


</style>
