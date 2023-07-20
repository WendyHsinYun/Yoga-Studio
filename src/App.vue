<template lang="pug">
.header-container 
  HeaderBar 
.middle-area 
  router-view
</template>
  
  
<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import HeaderBar from './components/headerBar.vue';

import Contact from './views/Contact.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Yoga from './views/classes/Yoga.vue';
import KXPilates from './views/classes/KXPilates.vue';
import AerialYoga from './views/classes/AerialYoga.vue';
</script>

<style lang="sass">
* 
  user-select: none
.header-container
  width: 100%
  height: 100px
  position: absolute
  top: 0
  z-index: 2
  position: fixed
.middle-area
  height: 100%
  width: 100%
  box-sizing: border-box
  position: absolute
  top: 0px

.swiper-button-next, .swiper-button-prev, .swiper-button-disabled, .swiper-button-disabled::after  
  --swiper-navigation-size: 400px
  --swiper-navigation-top-offset: 40%
  --swiper-navigation-sides-offset: 20px
  --swiper-navigation-color: none
  opacity: 0

</style>
