import { createRouter, createWebHistory } from 'vue-router'
import Default from '@/layouts/default/Default.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    component: Default,
    children: [{ path: '', name: 'Home', component: Home }],
  },
]
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })
export default router
