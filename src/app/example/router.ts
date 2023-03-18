import type { RouterOptions } from 'vue-router'

export const RouteName: RouterOptions['routes'] = [
  {
    path: '/example',
    name: 'example',
    component: () => import('./layouts/default.vue'),
    children: []
  }
]
