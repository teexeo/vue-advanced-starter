import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
      dirs: ['./libs/ui/**', ...RootDirs, "@vueuse/components"],
      resolvers: [ElementPlusResolver()],
      directoryAsNamespace: false,
      // include: [/^(?=.*shared)(?=.*(vue|tsx)).*$/]
    }),
    AutoImport({
      dts: true,
      imports: [
        {
          'virtual:terminal': ['terminal'],
          '@vueuse/core': ['useMouse'],
          vue: ['ref', 'computed'],
          pinia: ['defineStore']
        }
      ],
      include: [/\.[jt]sx?$/, /\.vue\??/],
      resolvers: [ElementPlusResolver()]
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
  }
})
