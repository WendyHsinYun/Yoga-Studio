<template lang="pug">
.headerBarDiv
  HeaderBar
.middle-area
  router-view
</template>
  
  
<script setup>
import { RouterView } from 'vue-router';
import HeaderBar from './components/headerBar.vue';


</script>

<style lang="sass" scoped>

.headerBarDiv
  width: 100%
  height: 200px
  position: absolute
  top: 0
  z-index: 2

.middle-area
  height: 100%
  width: 100%
  box-sizing: border-box
  .swiper
    height: 100%
    width: 100%
</style>
