<template lang="pug">
.root
  section
    .dot-container 
      .dot
      .title 機械皮拉提斯
      .eng-title KX Pilates 
    .fade-span 向下滑動
  section.preface
    .prefaceContent 機械式皮拉提斯是一種以核心肌群為基礎的全身運動系統，使用特殊的機械設備和配件。透過連續的流動運動，機械式皮拉提斯可以增強核心穩定性、改善身體對齊、加強肌肉控制和平衡。它強調身體的流動性、柔軟性和身體姿勢的正確對齊，同時提供支撐和挑戰，達到全面的身體訓練效果。
  section.feedback
    .container
      swiper( 
      :modules='modules' 
      :navigation="true" 
      :mousewheel="true"
      :speed="3000"
      :autoplay="{delay: 0, disableOnInteraction: false,}"
      :rewind="true"
      :slidesPerView="4"
      :centeredSlides="true"
      :spaceBetween="100"
      :loop="true"
      )
        swiper-slide 
          span 瑜珈老師充滿專業、激勵人心，
        swiper-slide 
          span 瑜珈老師教學細膩，溫和而堅定，
        swiper-slide 
          span 瑜珈老師的指導讓我深入理解呼吸和身體的連結，
        swiper-slide 
          span 瑜珈老師用她的熱情和專業知識引領我們探索身心靈的奧秘，
        swiper-slide 
          span 她的熱情和耐心讓我們在瑜珈旅程中得到成長和啟發。
    img.role3(src="@/assets/images/vertical-role3.png")
  section.calendar 
    .info-container 
      .info.goal 
        h2 課程目標 
        p 漸進式的阻力訓練 
          br 
          | 提升肌肉張力
          br 
          | 訓練平衡感和協調性
      .info.schedule
        h2 課程時間 
        p 請洽老師

      .info.size 
        h2 課程人數 
        p 一對一或團體課程

      .info.charge
        h2 課程收費
        p 請洽老師
    .calendar-container
      h2 機械皮拉提斯行事曆
      div(ref='calendarEl')
  section.footer
    router-link.prev(to="/classes/Yoga") 瑜珈
    router-link.next(to="/classes/AerialYoga") 空中瑜珈


</template>
  
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".dot", {
    scale: 12,
    scrollTrigger: 
    { trigger: '.dot',
      pin: true,
      scrub: true,
      // markers: true,
      start: "-400% 0%",
      end: "+=3500px",

    },
    ease: 'power2.out'
  })

  gsap.fromTo(
    ".fade-span",
    { opacity: 1 },
    { 
      opacity: 0,
      scrollTrigger: {
        trigger: ".fade-span",
        start: "-300px 50%",
        // markers: true,
        duration: 2
      }
    }
  );
})

  
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax,  Navigation, Mousewheel, Autoplay } from "swiper";


import 'swiper/css';

import "swiper/css/navigation";

const components = {
  Swiper,
  SwiperSlide,
};

const modules = [Parallax,  Navigation, Mousewheel, Autoplay];



import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'

import { Calendar } from '@fullcalendar/core'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const calendarEl = ref(null)


onMounted(() => {
  const calendar = new Calendar(calendarEl.value, {
    plugins: [
      googleCalendarPlugin,
      dayGridPlugin,
      timeGridPlugin,
      multiMonthPlugin
    ],
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,multiMonthYear"
    },
    // height: 700,
    // aspectRatio: .5,
    // initialView: 'multiMonthYear', 
    // initialView: 'timeGridWeek',
    initialView: 'dayGridMonth',
    googleCalendarApiKey: 'AIzaSyB4poCUfkAs_97yUwR5p00wxVgH7-ncnuM',
    events: {
      googleCalendarId: 'wendyhsinyun@gmail.com',
    }
  })

  calendar.render()
})

</script>
    
<style lang='sass' scoped>
* 
  cursor: default

.root 
  width: 100%
  height: 550vh
  position: absolute
  top: 0%
  display: flex
  flex-direction: column
  background-color: #fff
  .calendar
    flex: 2
    background-color: #fff
    .info-container
      width: 1000px
      height: 600px
      // border: 1px solid black
      margin-top: 10%
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: center
      .info 
        width: 300px
        height: 200px
        // border: 1px solid black
        margin: 30px
        text-align: center
        color: #626262
        letter-spacing: 3px
        font-weight: thin
        p
          line-height: 32px
          font-weight: 150
    .calendar-container
      height: 650px
      width: 800px
      // border: 1px solid blue
      margin-top: 80px
      text-align: center
      h2 
        font-size: 24px
        color: #626262
        letter-spacing: 3px
        font-weight: thin
        margin-bottom: 50px
      div
        height: 100%
        width: 100%
  .calendar::after
    content: ""
    height: 10%
    width: 100%
    top: 0px
    background-color: #D8C5AD
    position: absolute
  .footer
    flex: .2
    background-color: #626262
    color: #EBEBEB
    letter-spacing: 3px
    flex-direction: row
    justify-content: space-evenly
    
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

    // .next
  section
    flex: 1
    width: 100%
    height: 100vh
    border: 1px solid red
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    position: relative
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
        background-color: #787878
        border-radius: 50%
      .title
        margin-top: 95px
        font-weight: 500
        font-size: 3rem
        opacity: .5
        white-space: nowrap
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
    .prefaceContent
      width: 30%
      position: absolute
      top: 30%
      left: 50%
      transform: translateX(-50%)
      font-size: 12pt
      line-height: 34px
      letter-spacing: 1.5px
      opacity: .6
      // border: 1px solid black
      z-index: 5
  .feedback
    flex: 1  
    .container 
      width: 120%
      height: 300px
      // background-color: white
      top: 50%
      display: flex
      justify-content: center
      align-items: center
      swiper
        width: 100%
        height: 100%
        padding: 50px
        swiper-slide
          width: 100%
          height: 100%
          display: flex
          text-align: center
          justify-content: center
          align-items: center
          span
            width: 100%
            height: 100%
            // border: 1px solid black
            // font-size: 16pt
            // color: blue

    .role3
      height: 75vh
      position: absolute
      top: 20%
      z-index: 2

</style>



