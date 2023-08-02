<template lang="pug">
.swiper-container
  swiper(
  :modules='modules' 
  :speed="7000" 
  :autoplay="{delay: 0, disableOnInteraction: false,}"
  :slidesPerView="4"
  :centeredSlides='false'
  :spaceBetween='80' 
  :loop="true")
    swiper-slide(
      v-for='(obj, id) in feedback' 
      :key='obj.id') 
      div
        h4 {{ obj.name }}
        h5 {{ obj.content }}

</template>

<script setup>

import { ref, onMounted } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/virtual';

import { Pagination, Navigation } from 'swiper';

import axios from 'axios';

// swiper 

const components = {
  Swiper,
  SwiperSlide,
};

const modules = [ Autoplay ];

// axios get 

const feedback = ref([]);

onMounted(() => {
  getFeedback();
});

const getFeedback = () => {
  axios.get(`https://yoga-studio-4422e-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json`)
    .then((res) => {
      formatData(res.data);
    });
};

const formatData = (feedbacks) => {
  feedback.value = Object.values(feedbacks).map((feedback, index) => ({
    ...feedback,
    id: index + 1,
    content: feedback.content
  }));
  // console.log(feedback.value);
};


</script>

<style lang="sass" scoped>
.swiper-container
  width: 100%
  height: 300px
  display: flex
  position: relative
  top: -15%
  justify-content: center
  align-items: center
  .swiper
    width: 100%
    height: auto
    .swiper-slide
      div
        width: 100%
        padding: 20px
        border: 1px solid #515151 
        border-radius: 30px
        background-color: #F9F9FB
        color: #616161
        letter-spacing: 1.5px
        h4
          line-height: 32px
          letter-spacing: 2px
        h5
          line-height: 24px


@media (min-width: 450px) and (max-width: 830px)
  .swiper-container
    width: 200%

@media (min-width: 0px) and (max-width: 450px)
  .swiper-container
    width: 300%
    left: -50%
</style>