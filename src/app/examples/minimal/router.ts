import type { RouterOptions } from 'vue-router'

export const RouteName: RouterOptions['routes'] = [
  {
    path: '/',
    name: 'example',
    component: () => import('./layouts/default.vue'),
    children: [
      {
        path: '/',
        name: 'example-children',
        component: () => import('./example.vue')
      }
    ]
  }
]
