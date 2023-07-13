<template lang="pug">
.mouseClass(
  :class="mouseClass" 
  :style="{ left: divLeft, top: divTop }" ) 
</template>

<script setup>

import { ref, onMounted, onUnmounted, computed } from 'vue';


// mouse effect 
const isMouseUp = ref(false);
const isMouseDown = ref(false);
const isMouseClick = ref(false)

const divLeft = ref('0px');
const divTop = ref('0px');

let mouseStyle;


onMounted(() => {
  const mouseStyle = (e) => {
    const pageHeight = window.innerHeight * 6; // 600vh = 6倍的窗口高度
    isMouseUp.value = e.clientY > pageHeight / 2;
    isMouseDown.value = e.clientY < pageHeight / 2;
    // isMouseUp.value = e.clientY > window.innerHeight / 2;
    // isMouseDown.value = e.clientY < window.innerHeight / 2;
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
  } else if (isMouseUp.value) {
    return 'mouseUp';
  } else if (isMouseDown.value) {
    return 'mouseDown';
  } 
  return '';
});

</script>

<style lang="sass" scoped>

.mouseUp
  position: fixed
  width: 50px
  height: 50px
  background-image: url('./src/assets/images/mouse_right.svg')
  transform: rotate(90deg)
  background-repeat: no-repeat
  background-position: center
  pointer-events: none 
  z-index: 9999 

.mouseDown
  position: fixed
  width: 50px
  height: 50px
  background-image: url('./src/assets/images/mouse_right.svg')
  transform: rotate(-90deg)
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
  

</style>
