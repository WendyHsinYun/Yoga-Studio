<template lang="pug">
v-row(
  justify="center" 
  align="center"
  style="height: 20vh; background-color: none; margin-top: 10%" 
    )
  .progressNum.pl-5 {{ progress }} %
v-row( cols="6" style="height: 30vh ; background-color: none;"
  justify="center"
  align="center")
  .r-col.mx-auto(style=" background-color: none; height: 100%; aspect-ratio: 1/1 ;  ")
    .circular.mx-auto( style="border: 1rem solid #2DD98A; width: 100%; height: 100% ; border-radius: 50%; "
    )
      v-img.ml-3.mt-5.spinning(
        src="src/assets/images/loading.webp"
        center
        style="{ width: '80%'}")
v-row(justify="center"  
  style="height: 15vh; background-color: none; margin-top: 50px;" 
  )
  .remind
    .warmup
      .letter-holder
        div(v-for='(letter, index) in letters' 
        :key='index' 
        :class="'letter l-' + (index + 1)" 
        :style='`animation-delay: ${(index + 0.48) * 0.04}s`') {{ letter }}

</template>

<style lang="sass" scoped>


@keyframes spin 
  from 
    transform: rotate(0deg)
  to 
    transform: rotate(360deg)

.spinning 
  animation: spin .8s ease-in-out infinite


.progressNum
  color: #2DD98A
  font-size: 32px
  font-family: 'Playfair Display'

.remind
  color: #2DD98A
  font-size: 20px
  font-family: 'Playfair Display'
  letter-spacing: 2px
  position: relative //相對於偽元素而言
  white-space: nowrap
  .letter-holder
    padding: 16px
    display: flex

  .warmup .letter
    animation-name: loading
    animation-duration: 1.2s
    animation-iteration-count: infinite
    animation-direction: linear

@keyframes loading
  0%
    opacity: 0
  100%
    opacity: 1

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