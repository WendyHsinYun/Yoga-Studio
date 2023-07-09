<template lang="pug">
.root
  mouseVertical
  .overlay(
    v-show="clicking"
    @click.stop="showForm")
  feedbackForm(v-show="clicking")
  section.title
    .dot-container 
      .dot
      .title 瑜珈課 
      .eng-title Yoga Class
    .fade-span 向下滑動
  section.preface
    .prefaceContent 卡姊將以 RYT 200 小時瑜珈師資證照的專業知識引導學生進行各式瑜珈動作和呼吸練習，以提升柔軟度和身體協調性。她注重學員動作的正確性，引導學員享受瑜珈的美好。不論你是初學者或有一定基礎，這堂課都能讓你獲得身心的平衡與增強。
  section.feedback
    carouselSwiper
    v-btn(style="height: 350px; width: 250px; opacity: 0; position: absolute; z-index: 3; transform: translateY(50px);"
    @click.stop="showForm")  
      v-tooltip(
        activator="parent"
        location="start"
        style = "letter-spacing: 2px; border-radius: 20px; font-size: 16px;  white-space: wrap; padding: 50px;"
        ) 點擊！留言給卡姊
    img.role2(src="@/assets/images/vertical-role2.webp")
    
  section.calendar 
    .info-container 
      .info-container-bar
      .infoRow
        .infoCard 
          h2 課程目標 
          p 全身療癒伸展 
            br 
            | 鍛鍊肌力與肌耐力
            br 
            | 增進協調性及平衡感
        .infoCard
          h2 課程時間 
          p 平日晚上，兩小時
      .infoRow
        .infoCard 
          h2 課程人數 
          p 團體課 4 到 6人
        .infoCard
          h2 課程收費
          p 每次 250 到 450 元
    .calendar-container
      h2 課程行事曆
      div(ref='calendarEl')
  section.footer
    a.prev(href="/classes/AerialYoga") 空中瑜珈
    a.next(href="/classes/KXPilates") 機械式皮拉提斯


</template>
  
<script setup>


import { onMounted, onUnmounted, ref  } from 'vue';

import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

import carouselSwiper from '@/components/carouselSwiper.vue'
import feedbackForm from '@/components/feedbackForm.vue';

import mouseVertical from '@/components/mouseVertical.vue';

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
      start: "-180% 0%",
      end: "+=3500px",
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
    
    .role2
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



