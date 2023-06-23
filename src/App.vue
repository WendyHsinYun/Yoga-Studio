<template lang="pug">
.headerBarDiv
  HeaderBar
.middle-area
  router-view

div(:class="mouseClass" :style="{ left: divLeft, top: divTop }" @dotEvent="setClickValue") 
//- div(@dotEvent="setClickValue") 
</template>
  
  
<script setup>
import { RouterView } from 'vue-router';
import HeaderBar from './components/headerBar.vue';
import Calandar from './views/Calandar.vue';

import { ref, onMounted, onUnmounted, computed } from 'vue';


const isMouseRight = ref(false);
const isMouseLeft = ref(false);
const isMouseMiddle = ref(false);
const isMouseClick = ref(false)


const divLeft = ref('0px');
const divTop = ref('0px');

let mouseStyle;


  
function setClickValue(value) {
    isMouseClick.value = value;
  }

onMounted(() => {
  const mouseStyle = (e) => {
    isMouseRight.value = e.clientX > window.innerWidth / 3*2;
    isMouseLeft.value = e.clientX < window.innerWidth / 3;
    isMouseMiddle.value = e.clientX > window.innerWidth / 3 && e.clientX < (window.innerWidth / 3) * 2;
    divLeft.value = e.clientX + 'px';
    divTop.value = e.clientY + 'px';
  };
  document.addEventListener('mousemove', mouseStyle);


});

onUnmounted(() => {
  document.removeEventListener('mousemove', mouseStyle);
});

const mouseClass = computed(() => {
  if (isMouseClick.value) {
    return 'mouseClick';
  } else if (isMouseRight.value) {
    return 'mouseRight';
  } else if (isMouseLeft.value) {
    return 'mouseLeft';
  } else if (isMouseMiddle.value) {
    return 'mouseMiddle';
  }
  return '';
});


</script>

<style lang="sass" scoped>
* 
  overflow: hidden
.mouseRight
  position: fixed
  width: 50px
  height: 50px
  background-image: url('./src/assets/images/mouse_right.svg')
  background-repeat: no-repeat
  background-position: center
  pointer-events: none 
  z-index: 9999 

.mouseLeft
  position: fixed
  width: 50px
  height: 50px
  background-image: url('./src/assets/images/mouse_right.svg')
  transform: scaleX(-1)
  background-repeat: no-repeat
  background-position: center
  pointer-events: none 
  z-index: 9999 
.mouseMiddle
  position: fixed
  width: 50px
  height: 50px
  background-image: url('./src/assets/images/mouse_center.svg')
  background-repeat: no-repeat
  background-position: center
  pointer-events: none 
  z-index: 9999 

.mouseClick
  position: fixed
  width: 50px
  height: 50px
  right: 50%
  top: 30%
  background-image: url('./src/assets/images/mouse_click.svg')
  background-repeat: no-repeat
  background-position: center
  pointer-events: none 
  z-index: 9999 

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
  display: flex
  justify-content: center
  align-items: center
  .swiper
    height: 100%
    width: 100%
    overflow: hidden
</style>
