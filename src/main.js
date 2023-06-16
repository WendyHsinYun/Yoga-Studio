import { createApp } from 'vue'
import './style.css' // 針對 index.html
import App from '@/App.vue'
import router from '@/router/router.js'

createApp(App) 
.use(router)
.mount('#app')

// 將App.vue的內容顯示到id = 'app' 的tag裡面

