<template lang="pug">
.headerBar
    router-link(to="/" class="router-home")
        .logo
    nav
        router-link(to="/about" @mouseover='paramTrue' @mouseout='paramFalse') 關於    
        router-link(to="/classes/yoga") 課程
        router-link(to="/contact") 聯絡
</template>
      
      
<script setup>
import { RouterLink } from 'vue-router';
import router from '../router/router';
import Home from '@/views/Home.vue';
import Calendar from '@/views/Calendar.vue';
import Contact from '@/views/Contact.vue';
import Yoga from '@/views/classes/Yoga.vue' 
import KXPilates from '@/views/classes/KXPilates.vue' 
import AerialYoga from '@/views/classes/AerialYoga.vue' 


import { ref } from 'vue';

const emit = defineEmits(['dotEvent'])

const param = ref(false);

function paramTrue() {
    param.value = true;
    emit('dotEvent', param.value);
}

function paramFalse() {
    param.value = false;
    emit('dotEvent', param.value);
}

</script>
    
<style lang="sass" scoped>
.headerBar
    width: 100%
    height: 100px
    opacity: 1
    background: rgba(0, 0, 0 , 0 )
    position: absolute
    display: flex
    justify-content: space-between
    align-items: center
    .router-home
        width: 40px
        height: 40px
        margin-left: 5%
        position: absolute
        .logo
            width: 100%
            height: 100%
            background: url('../assets/images/lotus.svg') center/contain no-repeat
    nav
        width: 100%
        height: 100%
        margin-left: 60%
        display: flex
        justify-content: center
        align-items: center
        a
            text-decoration: none
            letter-spacing: 0.2em
            font-size: 16px
            color: #565151
            margin-left: 17%
            position: relative
            transition: transform 0.5s
            &::after
                content: ""
                position: absolute
                bottom: -3px
                left: 0
                width: 0
                height: 1px
                background-color: #565151
                transition: width 0.5s, transform 0.5s
        a:hover::after
            width: 100%
        a:not(:hover)::after
            transform: scaleX(0)
            
            
@media (max-width: 1600px)
    .headerBar
        nav
            margin-left: 60%
            a
                margin-right: -20px
       
@media (max-width: 1200px)
    .headerBar
        nav
            margin-left: 50%
            a
                margin-right: -40px
@media (max-width: 900px)
    .headerBar
        nav
            margin-left: 45%
            a
                margin-right: -50px
                font-size: 16px
@media (max-width: 700px)
    .headerBar
        nav
            margin-left: 20%
            a
                margin-right: -30px
                font-size: 14px
@media (max-width: 400px)
    .headerBar
        nav
            margin-left: 0%
            a
                margin-right: -30px
                font-size: 14px
</style>
    
