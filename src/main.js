
import { createApp } from 'vue'
import './style.css' 
import App from '@/App.vue'
import router from '@/router/router.js'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')

