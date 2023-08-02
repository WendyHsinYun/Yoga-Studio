<template lang="pug">
.loading-container
  v-row.row1.h-10(
    justify="center" 
    align="center")
    .progress-num.pl-5 {{ progress }} %
  v-row.row2( 
    cols="6" 
    justify="center"
    align="center")
    .r-col.mx-auto(style=" width: 45vh; aspect-ratio: 1 ;  ")
      .circular.mx-auto
        v-img.ml-3.mt-10.spinning(
          :src="loadingImg"
          title='卡姊瑜珈課' 
          alt='卡姊瑜珈教室載入中'
          center
          style="{ width: '70%'}")
          template(v-slot:placeholder='')
            .d-flex.align-center.justify-center.fill-height
              v-progress-circular(color='green-lighten-4' :size="128" :width="12" indeterminate='')
  v-row.row3(justify="center" )
    .remind-container
      .letter-content
        .letter-holder
          div(v-for='(letter, index) in letters' 
          :key='index' 
          :class="'letter l-' + (index + 1)" 
          :style='`animation-delay: ${(index + 0.48) * 0.04}s`') {{ letter }}

</template>

<style lang="sass" scoped>


.loading-container
  position: absolute
  top: 0
  left: 0
  height: 100vh
  width: 100vw
  .row1
    margin-top: 10%
    .progress-num
      color: #2DD98A
      font-size: 32px
      font-family: 'Playfair Display'
  .row2
    height: 40vh
    .circular
      border: 0rem solid #2DD98A
      width: 70%
      height: auto
      margin-top: 10%
      border-radius: 50%
      .spinning 
        animation: spin .8s ease-in-out infinite
  .row3
    height: 15vh

    .remind-container
      color: #2DD98A
      font-size: 20px
      font-family: 'Playfair Display'
      letter-spacing: 2px
      position: relative
      white-space: nowrap
      margin-top: 10px
      .letter-content
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
  .loading-container
    .row1
      margin-top: 120px
      .progress-num
        font-size: 28px
    .row2
      margin-top: 30px
      height: 40vh 
      .circular      
        width: 70%
        height: auto


@media (min-height: 0px) and (max-height: 450px)
  .loading-container
    .row1
      margin-top: 80px
      .progress-num
        font-size: 24px
    .row2
      margin-top: 30px
      height: 40vh 
      .circular      
        width: 70%
        height: auto
    .row3
      margin-top: 5%
      .remind-container
        font-size: 16px

</style>


<script setup>

import { ref, onMounted } from 'vue';

import loadingImg from '/src/assets/images/loading.webp'


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