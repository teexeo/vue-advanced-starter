import type { RouterOptions } from 'vue-router'

export const RouteName: RouterOptions['routes'] = [
  {
    path: '/example',
    name: 'example',
    component: () => import('./layouts/default.vue'),
    children: [
      {
        path: '/',
        name: 'example-children',
        component: () => import('./views/index.vue')
      }
    ]
  }
]
