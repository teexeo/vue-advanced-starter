import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Terminal from 'vite-plugin-terminal'
import { RootDirs } from './config/dirs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Terminal({
      output: ['terminal', 'console']
    }),
    Components({
      dts: true,
      dirs: [...RootDirs],
      resolvers: [ElementPlusResolver(), NaiveUiResolver()],
      directoryAsNamespace: false
    }),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        'vitest',
        {
          'virtual:terminal': ['terminal'],
          '@vueuse/core': ['useMouse'],
          pinia: ['defineStore', 'setActivePinia', 'createPinia'],
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ],
      include: [/\.[jt]sx?$/, /\.vue\??/],
      resolvers: [ElementPlusResolver(), NaiveUiResolver()]
    })
  ],
  build: {
    chunkSizeWarningLimit: 300
  },
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    deps: {
      inline: ['element-plus']
    }
  }
})
