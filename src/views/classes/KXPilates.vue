<template lang="pug">
.root
  .overlay(
    v-show="clicking"
    @click.stop="showForm")
  feedbackForm(v-show="clicking")
  section.title
    .dot-container 
      .dot
      .title 機械皮拉提斯
      .eng-title KX Pilates 
    .fade-span 向下滑動
  section.preface
    .prefaceContent 機械式皮拉提斯是一種以核心肌群為基礎的全身運動系統，使用特殊的機械設備和配件。透過連續的流動運動，機械式皮拉提斯可以增強核心穩定性、改善身體對齊、加強肌肉控制和平衡。它強調身體的流動性、柔軟性和身體姿勢的正確對齊，同時提供支撐和挑戰，達到全面的身體訓練效果。
  section.feedback
    carouselSwiper
    v-btn(style="height: 350px; width: 250px; opacity: 0; position: absolute; z-index: 3; transform: translateY(50px);"
    @click.stop="showForm")  
      v-tooltip(
        activator="parent"
        location="start"
        style = "letter-spacing: 2px; border-radius: 20px; font-size: 16px;  white-space: wrap; padding: 50px;"
        ) 點擊！留言給卡姊
    img.role3(src="@/assets/images/vertical-role3.webp")
    
  section.calendar 
    .info-container 
      .info-container-bar
      .infoRow
        .infoCard
          h2 課程目標 
          p 漸進式的阻力訓練 
            br 
            | 提升肌肉張力
            br 
            | 訓練平衡感和協調性
        .infoCard
          h2 課程時間 
          p 請洽老師
      .infoRow
        .infoCard 
          h2 課程人數 
          p 一對一或團體課程
        .infoCard
          h2 課程收費
          p 請洽老師
    .calendar-container
      h2 課程行事曆
      div(ref='calendarEl')
  section.footer
    a.prev(href="/classes/Yoga") 瑜珈
    a.next(href="/classes/AerialYoga") 空中瑜珈


</template>


<script setup>


import { onMounted, onUnmounted, ref  } from 'vue';

import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

import carouselSwiper from '@/components/carouselSwiper.vue'
import feedbackForm from '@/components/feedbackForm.vue';


// animation

gsap.registerPlugin(ScrollTrigger);

let dotAnimation;

onMounted(() => {
  dotAnimation = gsap.to(".dot", {
    opacity: 0.3,
    scale: 12,
    scrollTrigger: {
      trigger: '.dot',
      pin: true,
      scrub: true,
      // markers: true,
      start: "-180% 0%",
      end: "+=3000px",
    },
    ease: 'power2.out'
  });
});

onUnmounted(() => {
  if (dotAnimation) {
    dotAnimation.kill();
  }
});


onMounted(() => {
  gsap.fromTo(
    ".fade-span",
    { opacity: 1 },
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
})

// form

const clicking = ref(false);

const showForm = () => {
  clicking.value = !clicking.value;
  // console.log(`showform :  ${clicking.value}`);
}


// calander 

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
      googleCalendarId: '338dcb0f9b82233383f8f13c276494f8058566d2250c52e0bd658b081aa6738a@group.calendar.google.com',
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
  height: 600vh
  position: absolute
  top: 0%
  display: flex
  flex-direction: column
  background-color: #fff
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
    flex: 1
    width: 100%
    height: 100vh
    // border: 1px solid red
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
    
    .role3
      height: 75vh
      position: absolute
      top: 20%
      z-index: 2


  .calendar
    flex: 3
    background-color: #fff
    justify-content: start
    .info-container
      width: 100%
      height: 600px
      // border: 1px solid black
      // margin-top: 10%
      display: flex
      flex-direction: column
      // flex-wrap: wrap
      // justify-content: center
      top: 0px
      .info-container-bar
        height: 100px
        width: 100%
        top: 0px
        background-color: #D8C5AD
        position: relative
        margin-bottom: 50px
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
    .calendar-container
      height: 45%
      width: 60%
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

</style>
  
  