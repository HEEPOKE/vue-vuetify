import App from './App.vue'
import { createApp } from 'vue'
import { initializeApp } from '@/plugins'

const app = createApp(App)

initializeApp(app)

app.mount('#app')
