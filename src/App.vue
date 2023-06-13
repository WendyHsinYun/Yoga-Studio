<template lang="pug">
.background-grey
  .headerBar
    router-link(to="/" class="router-home")
      .logo
    nav
      router-link(to="/classroom" class="router-classroom") 課程
      router-link(to="/contact" class="router-contact") 聯絡
</template>
  
  
<script setup>
import headerBar from './components/headerBar.vue';
// import router from './router/router';
</script>

<style lang="sass" scoped>
.background-grey
  width: 100%
  height: 100%
  z-index: 1
  padding: 0
  position: absolute
  background: rgba(255, 255, 255, 0.7)
  .headerBar
    width: 100%
    height: 100px
    opacity: 1
    border: 0.1px solid black
    background: rgba(0, 0, 0 , 0 )
    position: relative
    display: flex
    justify-content: flex-start
    align-items: center
    .router-home
      width: 30px
      height: 30px
      margin-left: 50px
      .logo
        width: 100%
        height: 100%
        background: url('./assets/images/lotus.svg') center/contain no-repeat
    nav
      width: 300px
      height: 100%
      border: 0.1px solid black   

</style>
