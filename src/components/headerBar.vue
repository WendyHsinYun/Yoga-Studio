<template lang="pug">
.headerBar
    router-link(to="/" class="router-home")
        .logo
    //- .c-container
    //-     .c-nav
    //-         .dot-1(data-text="Namaste")
    //-         .dot-2(data-text="瑜珈課")
    //-         .dot-3(data-text="機械皮拉提斯")
    //-         .dot-4(data-text="空中瑜珈")
    nav
        router-link(to="/classroom" 
        :class="{ 'underlined': isUnderlined }"
        @mouseover="underlined"
        @mouseleave="resetUnderlined") 課程
        
        router-link(to="/contact") 聯絡
</template>
      
      
<script setup>
import { RouterLink } from 'vue-router';
import router from '../router/router';
import Home from '../views/Home.vue';
import Classroom from '../views/Classroom.vue';
import Contact from '../views/Contact.vue';

import { ref } from 'vue';

const isUnderlined = ref(false);

function underlined() {
    isUnderlined.value = true;
}

function resetUnderlined() {
    isUnderlined.value = false;
}
</script>
    
<style lang="sass" scoped>
.headerBar
    width: 100%
    height: 100px
    opacity: 1
    // border: 0.1px solid blackborder: 0.1px solid black
    background: rgba(0, 0, 0 , 0 )
    position: absolute
    display: flex
    justify-content: flex-start
    align-items: center
    .router-home
        width: 40px
        height: 40px
        margin-left: 50px
        
        .logo
            width: 100%
            height: 100%
            background: url('../assets/images/lotus.svg') center/contain no-repeat

    .c-container
        width: 450px
        height: 450px
        top: -350px
        left: 50%
        transform: translateX(-50%)
        position: absolute
        display: flex
        justify-content: center
        align-items: center
        
        .c-nav
            width: 400px
            height: 400px
            border-radius: 50%
            border: 1px solid #565151
            opacity: .5
            position: absolute
            display: flex
            justify-content: center
            align-items: center
            
            .dot-1, .dot-2, .dot-3, .dot-4 
                position: relative
                width: 8px
                height: 8px
                border: 1px solid #565151
                border-radius: 50%
                background-color: #565151
            .dot-1::after, .dot-2::after, .dot-3::after, .dot-4::after
                content: attr(data-text)
                letter-spacing: 1px
                font-family: 'Playfair Display'
                white-space: nowrap
                position: absolute
            .dot-1::after
                top: 35px
                right: -30px 
            .dot-1
                top: 45%
            .dot-2::after
                right: -80px
                top: -5px 
            .dot-2
                right: -45%
            .dot-3::after
                top: -45px
                right: -50px
            .dot-3
                top: -45%
            .dot-4::after
                top: -5px
                right: 55px
            .dot-4 
                right: 45%
    nav
        margin-left: 80%
        width: 300px
        height: 100%
        position: absolute
        display: flex
        justify-content: center
        align-items: center
        
    a
        text-decoration: none
        letter-spacing: 0.2em
        font-size: 18px
        color: #565151
        margin-left: 20%
    .underlined
        position: relative
        transition: transform 0.5s
        &::after
            content: ""
            position: absolute
            bottom: -2px
            left: 0
            width: 0
            height: 2px
            background-color: black
            animation: underlineAnimation 0.5s linear forwards
            
    @keyframes underlineAnimation
        0%
            width: 0
        100%
            width: 100%

</style>
    