import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { store, key } from './store'
import { store } from '@/store'

// createApp(App).use(store, key).use(router).mount('#app')
createApp(App).use(store).use(router).mount('#app')
