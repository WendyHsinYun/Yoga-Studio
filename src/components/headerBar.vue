<template lang="pug">
.headerBar
    router-link(to="/" class="router-home")
        .logo
    nav
        router-link.link(to="/about" @mouseover='paramTrue' @mouseout='paramFalse') 關於    
        .menu
            v-list(density="compact"  v-model:opened='open' style=" background: none; color: #565151")
                v-list-group(value='課程')
                    template(v-slot:activator='{ props }')
                        v-list-item(
                            v-bind='props'
                            title='課程')
                    v-list-item(
                        v-for='(child, i) in yogaClass' 
                        :key='i' 
                        :title='child.title' 
                        :value='child.title'
                        link
                        :to="child.link"
                        )
        router-link.link(to="/contact") 聯絡
</template>
      
      
<script setup>
import { RouterLink } from 'vue-router';
import router from '../router/router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';


import { ref } from 'vue';

const open = ref(['Users'])

const yogaClass = [
  { title: '瑜珈', link: '/classes/yoga', icon: 'mdi-cog-outline' },
  { title: '機械皮拉提斯', link: '/classes/KXPilates', icon: 'mdi-cog-outline' },
  { title: '空中瑜珈', link: '/classes/AerialYoga', icon: 'mdi-cog-outline' },
];

// const closeMenu = () => {
//   open.value = !false; // 设置 open 的值为 false
// };
// const emit = defineEmits(['dotEvent'])

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
            background: url('/lotus.svg') center/contain no-repeat
    nav
        height: 100%
        width: 100%
        margin-left: 50%
        display: flex
        justify-content: start
        align-items: start
        color: #565151
        // background-color: pink
        .menu
            margin-left: 100px
            margin-top: 35px
        .link
            margin-left: 70px
            margin-top: 50px
            position: relative
            transition: transform 0.5s
            // background-color: white
            padding: 0px 0px
            display: flex
            justify-content: center
            align-content: center
            white-space: nowrap
            text-decoration: none
            letter-spacing: 0.2em
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
    
