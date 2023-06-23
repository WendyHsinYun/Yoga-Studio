<template lang="pug">
.root 
  .start 
    .dot-container 
      .dot
      .title 瑜珈課 
      .eng-title Yoga Class
  .container
  .end 
</template>
  
<script setup>

import { onMounted, ref } from "vue";
import gsap from 'gsap'


import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
  gsap.to(".dot", {
    scale: 6,
    scrollTrigger: 
    { trigger: '.dot',
      pin: true,
      scrub: true,
      // 
      start: "-400% 0%",
      end: "+=3500px",}
}),

  ScrollTrigger.create({
    trigger: ".container",
    pin: ".container",
    start: "top top",
    // horizontal: true,
    end: "+=1000px",
    scrub: true,
    // trigger: ".container",
    // horizontal: true,
    // start: "top, top",
    // end: "+=2000px",
    // scrub: true,
    // snap: 1,

  })



})

</script>


<style lang='sass' scoped>
.root 
  width: 100%
  height: 5000px
  background-color: #fff
  display: flex
  flex-direction: column
  position: absolute
  top: 0px
  .start
    width: 100%
    height: 800px
    background-color: #74d2e7
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
  .container
    width: 500%
    height: 100vh
    background-color: #ffc168
    
      
  .end
    width: 100%
    height: 800px
    background-color: #2dde98
    display: flex

</style>
