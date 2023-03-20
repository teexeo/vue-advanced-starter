import { RouteName } from '@/app/examples/minimal/router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...RouteName]
})

export default router
