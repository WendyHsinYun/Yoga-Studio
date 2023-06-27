<template lang="pug">
.headerBarDiv
  HeaderBar
.middle-area
  router-view
</template>
  
  
<script setup>
import { RouterView } from 'vue-router';
import HeaderBar from './components/headerBar.vue';
import Calendar from './views/Calendar.vue';


</script>

<style lang="sass" scoped>
* 
  overflow: hidden
  height: 100%
  width: 100%

.headerBarDiv
  width: 100%
  height: 200px
  position: absolute
  top: 0
  z-index: 2
  position: fixed
.middle-area
  height: 100%
  width: 100%
  box-sizing: border-box
  display: flex
  justify-content: center
  align-items: center
  overflow: hidden
  .swiper
    height: 100%
    width: 100%
    overflow: hidden
</style>
