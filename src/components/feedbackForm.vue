<template lang="pug">
v-form.Vform(
  @submit.prevent='addFeedback'   
  )
  v-text-field(
    hide-details="true"
    density="comfortable"
    v-model='feedback.name' 
    label='您的名字'
    style=" background-color: #f4f4f4; border-radius: 15px; margin-top: 50px; "
    :counter='20'
    @click.stop="showForm")
  v-textarea(
    v-model='feedback.content' 
    hide-details="true"
    density="comfortable"
    label='回饋（50字以內）' 
    style=" word-wrap: break-word; background-color: #f4f4f4; margin-top: 20px; border-radius: 15px"
    :counter='50'
    @click.stop="showForm")
  v-btn(color='primary' 
    type='submit' 
    style="color: whitesmoke; width: 20%; padding: 20px; margin-top: 20px; border-radius: 15px; align-content: center; margin-left: 50%; transform: translateX(-50%);" ) 送出
</template>

<style lang='sass' scoped>
.Vform
  position: absolute 
  width: 45% 
  height: 0px 
  top: 420vh  
  left: 30vw 
  background-color: pink 
  z-index: 10
@media (max-width: 1050px)
  .Vform
    position: absolute 
    top: 530vh
</style>



<script setup>

import { ref } from 'vue';

import axios from 'axios';

const feedback = ref({
    name: '',
    content: '',
});

const addFeedback = () => {
  axios.post(`https://yoga-studio-4422e-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json`, feedback.value)
  .then((res) => {
    console.log(res);
    window.location.reload(true);
    });
  };



</script>