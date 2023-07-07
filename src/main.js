
import { createApp } from 'vue'
import './style.css' 
import App from '@/App.vue'
import router from '@/router/router.js'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

import { loadFonts } from './plugins/webfontloader'


// import { VueFire, VueFireDatabaseOptionsAPI, VueFireFirestoreOptionsAPI } from 'vuefire'

// loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')

