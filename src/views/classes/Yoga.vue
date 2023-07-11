<template lang="pug">
.root
  .overlay(
    v-show="clicking"
    @click.stop="showForm")
    feedbackForm(v-show="clicking")
  section.titleContainer
    .dot-container 
      .dot
      .title 瑜珈課 
      .eng-title Yoga Class
    .fade-span 向下滑動
  section.preface
    .prefaceContent 
      h2 課程介紹
      p 卡姊將以 RYT 200 小時瑜珈師資證照的專業知識引導學生進行各式瑜珈動作和呼吸練習，以提升柔軟度和身體協調性。不論你是初學者或有一定基礎，這堂課都能讓你獲得平衡與增強。
    .info-container
      .infoRow.row1
        .infoCard 
          h2 課程目標 
          p 全身療癒伸展 
            br 
            | 鍛鍊肌力與肌耐力
            br 
            | 增進協調性及平衡感
        .infoCard
          h2 課程時間 
          p 平日晚上，2 小時
      .infoRow.row2
        .infoCard 
          h2 課程人數 
          p 團體課 4 到 6 人
        .infoCard
          h2 課程收費
          p 每次 250 元到 450 元
  section.gallery
    v-container(style =" border: 1px solid none; ")
      v-row.justify-center.imgRow1(style="border: 1px solid none;")
        v-col.d-flex(cols='8' style="border: 1px solid none; " )
          v-img.yogaImg.bg-grey-lighten-2.mr-2( :src="image1" cover='' style="aspect-ratio: 4/3; box-shadow: -3px 3px 3px 0 rgba(0,0,0,0.3) ; width: 30%; border-radius: 5%;" lazy-src="https://picsum.photos/id/11/100/60")
            template(v-slot:placeholder='')
              .d-flex.align-center.justify-center.fill-height
                v-progress-circular(color='grey-lighten-4' indeterminate='')
          v-img.yogaImg.bg-grey-lighten-2.ml-2( :src="image2" cover='' style="aspect-ratio: 4/3; box-shadow: -3px 3px 3px 0 rgba(0,0,0,0.3) ; width: 30%; border-radius: 5%;" lazy-src="https://picsum.photos/id/11/100/60")
            template(v-slot:placeholder='')
              .d-flex.align-center.justify-center.fill-height
                v-progress-circular(color='grey-lighten-4' indeterminate='')
      v-row.justify-center.imgRow2(style="border: 1px solid none;")
        v-col.d-flex(cols='8')
          v-img.yogaImg.bg-grey-lighten-2.mr-2( :src="image3" cover='' style="aspect-ratio: 4/3; box-shadow: -3px 3px 3px 0 rgba(0,0,0,0.3) ; width: 30%; border-radius: 5%;" lazy-src="https://picsum.photos/id/11/100/60")
            template(v-slot:placeholder='')
              .d-flex.align-center.justify-center.fill-height
                v-progress-circular(color='grey-lighten-4' indeterminate='')
          v-img.yogaImg.bg-grey-lighten-2.ml-2( :src="image4" cover='' style="aspect-ratio: 4/3; box-shadow: -3px 3px 3px 0 rgba(0,0,0,0.3) ; width: 30%; border-radius: 5%;" lazy-src="https://picsum.photos/id/11/100/60")
            template(v-slot:placeholder='')
              .d-flex.align-center.justify-center.fill-height
                v-progress-circular(color='grey-lighten-4' indeterminate='')
  section.feedback
    carouselSwiper(style="position: absolute; top: 10%;")
    v-btn(style="height: 350px; width: 250px; opacity: 0; position: absolute; z-index: 3; transform: translateY(50px);"
    @click.stop="showForm")  
      v-tooltip(
        activator="parent"
        location="start"
        style = "letter-spacing: 2px; border-radius: 20px; font-size: 16px;  white-space: wrap; padding: 50px;"
        ) 點擊！留言給卡姊
    img.role2(src="@/assets/images/vertical-role2.webp")
    
  section.calendar 
    .container-bar
    CalendarVue
    router-link(to="/contact" style="position: absolute ; bottom: 150px;")
      v-btn(size="x-large" rounded="xl" style=" padding: 30px 50px; text-align: center; align-content: center; letter-spacing: .8rem ; color: #626262 ;") 預約課程
      
  section.footer
    a.prev(href="/classes/AerialYoga") 空中瑜珈
    v-btn#pagetop(size="large" rounded="xl " @click="toTop" variant="outlined" style="left: 50%; transform: translateX(-50%); position: absolute; letter-spacing: 3px;") 回到頂端 
    a.next(href="/classes/KXPilates") 機械式皮拉提斯

mouseHorizontal
</template>
  
    
<style lang='sass' scoped>
* 
  cursor: default

.root 
  width: 100%
  height: auto
  position: absolute
  top: 0%
  display: flex
  flex-direction: column
  background-color: #F9F9FB
  .overlay
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0.8)
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    z-index: 10
  section
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    position: relative
  .titleContainer
    height: 120vh
    .dot-container
      width: 300px
      height: 300px
      letter-spacing: 2.5px
      font-family: 'Playfair Display'
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      .dot 
        width: 70px
        height: 70px
        background-color: #FFA245
        border-radius: 50%
      .title
        margin-top: 95px
        font-weight: 500
        font-size: 3rem
        opacity: .5
      .eng-title
        font-size: 1.5rem
        font-weight: 100
        margin-top: 20px
        opacity: .5
    .fade-span
      position: absolute
      left: 50%
      transform: translateX(-50%)
      bottom: 5%
      letter-spacing: 2.5px
      opacity: .8
  .preface
    border: 1px solid black
    height: 140vh
    .prefaceContent
      position: absolute
      display: flex
      flex-direction: column
      top: 20%
      left: 50%
      width: 30%
      transform: translateX(-50%)
      color: #626262
      // border: 1px solid black
      z-index: 5
      text-align: center
      justify-content: center
      opacity: .6
      h2
        margin-bottom: 20px
      p
        font-size: 12pt
        line-height: 36px
        letter-spacing: 1.5px
        
      
    .info-container
      position: absolute
      width: 100%
      // height: 600px
      display: flex
      flex-direction: column
      top: 400px

      .infoRow
        position: relative
        width: 100%
        height: 200px
        display: flex
        // background-color: pink 
        justify-content: center

        .infoCard
          position: relative
          width: 200px
          height: 200px
          color: #515151
          // z-index: 5
          // background-color: pink        
          margin: 30px
          text-align: center
          color: #626262
          letter-spacing: 3px
          font-weight: thin
          p
            line-height: 32px
            font-weight: 150
            margin-top: 10px
  
  .gallery
    border: 1px solid black
    height: 150vh
    .yogaImg:hover
      opacity: .9
  .feedback
    height: 90vh
    .role2:hover
      transform: translateY(-15px)    
    .role2
      height: 75vh
      position: absolute
      top: 20%
      z-index: 2


  .calendar
    background-color: #F9F9FB
    justify-content: start
    border: 1px solid black
    height: 230vh
    .container-bar
      height: 100px
      width: 100%
      top: 0px
      background-color: #D8C5AD
      position: relative
      margin-bottom: 50px

  .footer
    height: 30vh
    background-color: #626262
    color: #EBEBEB
    letter-spacing: 3px
    flex-direction: row
    justify-content: center
    
    .prev
      position: relative
      padding-right: 1em
      text-decoration: none
      color: #EBEBEB
    .prev::before
      content: ""
      position: absolute
      top: 50%
      right: 0
      transform: translate(-123px, -50%) rotate(90deg)
      width: 0.15rem
      height: 100%
      background-color: #EBEBEB
    .prev::after
      content: ""
      border: solid
      border-width: 0.15em 0.15em 0 0
      display: inline-block
      padding: 0.2em
      transform: translate(-110px, -25%) rotate(-135deg)
    
    .next
      position: relative
      padding-right: -5em
      margin-left: 50%
      text-decoration: none
      color: #EBEBEB
    .next::before
      content: ""
      position: absolute
      top: 50%
      right: 0
      transform: translate(10px, -50%) rotate(90deg)
      width: 0.15rem
      height: 100%
      background-color: #EBEBEB
    .next::after
      content: ""
      border: solid
      border-width: 0.15em 0.15em 0 0
      display: inline-block
      padding: 0.2em
      transform: translate(20px, -25%) rotate(45deg)

</style>




<script setup>


import { onMounted, onUnmounted, ref  } from 'vue';

import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { RouterLink } from 'vue-router';
import router from '@/router/router';

import carouselSwiper from '@/components/carouselSwiper.vue'
import feedbackForm from '@/components/feedbackForm.vue';
import CalendarVue from '@/components/calendarVue.vue';
import mouseHorizontal from '@/components/mouseHorizontal.vue';

// image URL

const image1 = new URL('../../assets/images/yoga/image1.webp', import.meta.url).href
const image2 = new URL('../../assets/images/yoga/image2.webp', import.meta.url).href
const image3 = new URL('../../assets/images/yoga/image3.webp', import.meta.url).href
const image4 = new URL('../../assets/images/yoga/image4.webp', import.meta.url).href

// back to top


const scTimer = ref(0);
const scY = ref(0);

const handleScroll = () => {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100);
};

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});


// animation

gsap.registerPlugin(ScrollTrigger);

let dotAnimation;

onMounted(() => {
  dotAnimation = gsap.to(".dot", {
    scale: 12,
    scrollTrigger: {
      trigger: '.dot',
      pin: true,
      scrub: true,
      // markers: true,
      start: "-200% 10%",
      end: "+=3500px",
    },
    ease: 'power2.out'
  });


  gsap.fromTo(
    ".fade-span",
    { opacity: .9 },
    { 
      opacity: 0,
      scrollTrigger: {
        trigger: ".fade-span",
        start: "-150px 50%",
        // markers: true,
        duration: 2
      }
    }
  );

  gsap.fromTo(
    ".prefaceContent", 
    { opacity: 0, y: 0 },
    { 
      opacity: .9,
      y: -50,
      scrollTrigger: {
        trigger: ".prefaceContent",
        start: "-300px 60%",
        markers: true,
        toggleActions: "play pause resume reverse",
        duration: 5
      }
    }
  );

  gsap.fromTo(
    ".row1", 
    { opacity: 0, y: 0 },
    { 
      opacity: .9,
      y: -50,
      scrollTrigger: {
        trigger: ".row1",
        start: "-300px 50%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 5
      }
    }
  );

  gsap.fromTo(
    ".row2", 
    { opacity: 0, y: 0 },
    { 
      opacity: .9,
      y: -50,
      scrollTrigger: {
        trigger: ".row2",
        start: "-300px 50%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 5
      }
    }
  );

  
  gsap.fromTo(
    ".role2", 
    { opacity: 0, x: 100 },
    { 
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".role2",
        start: "-400px 50%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 5
      }
    }
  );

  gsap.fromTo(
    ".imgRow1", 
    { opacity: 0, x: 200 },
    { 
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".imgRow1",
        start: "-150px 80%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 10
      }
    }
  );


  gsap.fromTo(
    ".imgRow2", 
    { opacity: 0, x: -200 },
    { 
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".imgRow2",
        start: "-150px 80%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 10
      }
    }
  );
  
})

// form

const clicking = ref(false);

const showForm = () => {
  clicking.value = !clicking.value;
  // console.log(`showform :  ${clicking.value}`);
}


</script>