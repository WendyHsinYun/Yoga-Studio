
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue' // 引入 Home 名字
import About from '@/views/About.vue' 
import Contact from '@/views/Contact.vue' 
import Yoga from '@/views/classes/Yoga.vue' 
import KXPilates from '@/views/classes/KXPilates.vue' 
import AerialYoga from '@/views/classes/AerialYoga.vue' 

const routes = [ 
    {path:'/', name: 'Home', component: Home}, 
    {path:'/About', name: 'About', component: About}, 
    {path:'/Contact', name: 'Contact', component: Contact},
    {path:'/classes/yoga', name: 'Yoga', component: Yoga},
    {path:'/classes/KXPilates', name: 'KXPilates', component: KXPilates},
    {path:'/classes/AerialYoga', name: 'AerialYoga', component: AerialYoga}
] 


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return {left : 0 , top : 0};
    }
  });

export default router 
