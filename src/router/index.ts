import { DashboardRouter } from '@/app/dashboard'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...DashboardRouter]
})

export default router
