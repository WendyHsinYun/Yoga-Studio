<template lang="pug">
.headerBar
    router-link.router-home(to="/") 
        .logo
        .home Home
    nav
        router-link.link(to="/about") 關於
        .menu
            v-menu
                template(v-slot:activator='{ props }')
                    v-btn.selection( 
                        v-bind='props' 
                        variant="text" 
                        style="letter-spacing: 0.3em; ") 課程
                v-list(style="color: #565151")
                    v-list-item(
                        v-for='(child, i) in yogaClass' :key='i' 
                        :value='child.title' 
                        link  
                        :to="child.link"
                        @click = 'window.location.reload(true);')
                        v-list-item-title {{ child.title }}
        router-link.link(to="/contact") 聯絡
</template>
      
      
<script setup>

import { RouterLink } from 'vue-router';
import router from '../router/router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';

import { ref } from 'vue';

const yogaClass = [
  { title: '瑜珈', link: '/classes/yoga'},
  { title: '機械皮拉提斯', link: '/classes/KXPilates'},
  { title: '空中瑜珈', link: '/classes/AerialYoga'},
];


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
        width: 50px
        height: 40px
        margin-left: 5%
        position: absolute
        text-decoration: none
        .logo
            width: 100%
            height: 100%
            background: url('/lotus.svg') center/contain no-repeat
        .home
            width: 100%
            letter-spacing: 3px
            font-size: 16px
            color: #565151
            font-family: "Playfair Display"
            font-weight: 700
            text-align: center
    .router-home:hover
        opacity: .5
            
    nav
        height: 100%
        width: 100%
        margin-left: 70%
        display: flex
        justify-content: start
        color: #565151

        .link
            margin-left: 15%
            margin-top: 50px
            position: relative
            transition: transform 0.5s
            display: flex
            justify-content: center
            align-content: center
            white-space: nowrap
            text-decoration: none
            letter-spacing: 0.3em
            font-size: 16px
            color: #565151
            &::after
                content: ""
                position: absolute
                bottom: -3px
                left: 0
                width: 0
                height: 1px
                background-color: #565151
                transition: width 0.5s, transform 0.5s

        .link:hover::after
            width: 100%
        .link:not(:hover)::after
            transform: scaleX(0)

        .menu
            margin-top: 44px
            margin-left: 18%
            .selection
                font-size: 16px    
            
@media (max-width: 1600px)
    .headerBar
        nav
            margin-left: 60%
            .link, .menu
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
@media (min-width: 500px) and (max-width: 700px)
    .headerBar  
        .router-home
            .home
                font-size: 12px
        nav
            margin-left: 35%
            .link, .menu
                margin-right: -30px
                font-size: 16px
@media (min-width: 340px) and (max-width: 500px)
    .headerBar
        .router-home
            .logo
                width: 90%
                height: 90%
            .home
                font-size: 11px
                transform: translateX(-2px)
        nav
            margin-left: 20%
            .link, .menu
                margin-right: -30px
                font-size: 16px

@media (min-width: 0px) and (max-width: 340px)
    .headerBar
        .router-home
            .logo
                width: 90%
                height: 90%
            .home
                font-size: 11px
                transform: translateX(-2px)
        nav
            margin-left: 30%
            .link
                margin-right: -35px
                font-size: 14px
            .menu
                margin-right: -20px
                .selection
                    font-size: 14px
</style>
    
