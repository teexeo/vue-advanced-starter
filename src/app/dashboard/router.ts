import type { RouterOptions } from 'vue-router'

export const DashboardRouter: RouterOptions['routes'] = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./views/index.vue')
  }
]
