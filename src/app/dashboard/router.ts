import type { RouterOptions } from 'vue-router'

export const DashboardRouter: RouterOptions['routes'] = [
  {
    path: '/',
    name: 'index',
    component: () => import('./layouts/default.vue'),
    children: [
      {
        path: '/',
        component: () => import('./views/index.vue')
      }
    ]
  }
]
