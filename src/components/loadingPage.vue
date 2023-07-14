<template lang="pug">
v-container.d-flex.flex-column.vC(style="height: 100vh; width: 100vw; background-color: none ;")
  v-row.row1.h-10(
    justify="center" 
    align="center")
    .progressNum.pl-5 {{ progress }} %
  v-row.row2( 
    cols="6" 
    justify="center"
    align="center")
    .r-col.mx-auto(style=" background-color: none; width: 45vh; aspect-ratio: 1 ;  ")
      .circular.mx-auto( style="border: 1rem solid #2DD98A; width: 100%; height: 100% ; border-radius: 50%;" )
        v-img.ml-3.mt-5.spinning(
          src="src/assets/images/loading.webp"
          center
          style="{ width: '80%'}")
  v-row.row3(justify="center" )
    .remind
      .warmup
        .letter-holder
          div(v-for='(letter, index) in letters' 
          :key='index' 
          :class="'letter l-' + (index + 1)" 
          :style='`animation-delay: ${(index + 0.48) * 0.04}s`') {{ letter }}

</template>

<style lang="sass" scoped>


.vC
  position: absolute
  top: 0
  left: 0
  .row1
    background-color: none
    margin-top: 10%
    .progressNum
      color: #2DD98A
      font-size: 32px
      font-family: 'Playfair Display'
  .row2
    height: 40vh 
    background-color: none
    .spinning 
      animation: spin .8s ease-in-out infinite
  .row3
    height: 15vh 
    background-color: none

    .remind
      color: #2DD98A
      font-size: 20px
      font-family: 'Playfair Display'
      letter-spacing: 2px
      position: relative
      white-space: nowrap
      margin-top: 10px
      .warmup
        animation-name: loading
        animation-duration: 1.2s
        animation-iteration-count: infinite
        animation-direction: linear
        .letter-holder
          padding: 16px
          display: flex


@keyframes loading
  0%
    opacity: 0
  100%
    opacity: 1


@keyframes spin 
  from 
    transform: rotate(0deg)
  to 
    transform: rotate(360deg)
  

@media (min-width: 0px) and (max-width: 840px)
  .vC
    .row1
      margin-top: 80px
      .progressNum
        font-size: 28px
    .row2
      margin-top: 30px
      height: 40vh 


@media (min-height: 0px) and (max-height: 450px)
  .vC
    .row1
      margin-top: 80px
      .progressNum
        font-size: 24px
    .row2
      margin-top: 30px
      height: 40vh 
    .row3
      margin-top: 5%
      // height: 40vh 
      .remind
        font-size: 16px

</style>


<script setup>

import { ref, onMounted } from 'vue';

const loading = ref(true);
const progress = ref(0);

onMounted(() => {

  const interval = setInterval(() => {
    progress.value += 5
    if (progress.value >= 100) {
      clearInterval(interval);
      loading.value = false;

    }
  }, 100);

});


const letters = ref(['卡', '姊', '暖', '身', '中', '.', '.', '.', '.', '.', '.'])


</script>