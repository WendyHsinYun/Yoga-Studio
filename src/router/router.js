
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue' // 引入 Home 名字
import Classroom from '@/views/Classroom.vue' 
import Contact from '@/views/Contact.vue' 


const routes = [ // 將 routes 獨立出來有自己的變數，再使用 createRouter 操作，讓他更好被更改。
    {path:'/', name: 'Home', component: Home}, // 以 root URL 作為路徑，Home 作為名稱，然後告訴 router 當到達"Home" 這個路徑時要渲染 "Home" 組件 
    {path:'/Contact', name: 'Contact', component: Contact},
    {path:'/classroom', name: 'Classroom', component: Classroom}
] 


const router = createRouter({
    history: createWebHistory(),

    routes 

})

export default router 