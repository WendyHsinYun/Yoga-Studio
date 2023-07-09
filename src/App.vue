<template lang="pug">
.headerBarDiv 
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

<style lang="sass" scoped>
* 
  user-select: none
.headerBarDiv
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



</style>
