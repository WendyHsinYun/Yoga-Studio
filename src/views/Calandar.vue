<template lang="pug">
.root
  section
    .dot-container 
      .dot
  section
  section
  section
  section

</template>
  
<style lang='sass' scoped>
.root 
  width: 100%
  height: 500vh
  position: absolute
  top: 0%
  display: flex
  flex-direction: column
  background-color: #fff
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
      z-index: 6
      .dot 
        width: 70px
        height: 70px
        background-color: #2DD98A
        border-radius: 50%
        position: fixed

</style>



<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".dot", {
    scale: 5,
    scrollTrigger: 
    { trigger: '.dot',
      // toggleActions: "play pause reverse none"
      scrub: true,
      markers: true,
      // start: "-500% 0%",
      end: "+=2000px",
    },
    duration: 3

  })
})


</script>
  