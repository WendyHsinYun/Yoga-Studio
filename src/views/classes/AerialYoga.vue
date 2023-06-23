<template lang="pug">
.root
  section
    .dot-container 
      .dot
      .title 瑜珈課 
      .eng-title Yoga Class
    .fade-span 向下滑動
  section.preface
    .prefaceContent 卡姊老師將以RYT200小時瑜珈師資證照的專業知識引導學生進行各式瑜珈動作和呼吸練習，以提升柔軟度和身體協調性。她注重學員動作的正確性，引導學員享受瑜珈的美好。不論你是初學者或有一定基礎，這堂課都能讓你獲得身心靈的放鬆和平衡。
  section.feedback
    .container 
  section
    img.role2(src="@/assets/images/vertical-role2.png")
  section.footer


</template>
  
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".dot", {
    scale: 9,
    scrollTrigger: 
    { trigger: '.dot',
      pin: true,
      scrub: true,
      markers: true,
      start: "-350% 0%",
      end: "+=3200px",

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

  
</script>
    
<style lang='sass' scoped>
* 
  cursor: default

.root 
  width: 100%
  height: 400vh
  position: absolute
  top: 0%
  display: flex
  flex-direction: column
  background-color: #fff

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
        background-color: #18AE66
        border-radius: 50%
        // transform: translateY(-50px)
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
      // overflow: 
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
    .container 
      width: 500%
      height: 50%
      background-color: black
      opacity: 0.1
      position: absolute
      top: 20%
    .role2
      height: 75vh
      position: absolute
      top: 20%
      cursor: pointer
  .preface
    flex: .7
  .feedback
    flex: .7
  .footer
    flex: .4
    background-color: #D8C5AD
</style>


  
  