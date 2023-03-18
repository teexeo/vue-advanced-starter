import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dts: true,
      dirs: ['./src/components'],
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      dts: true,
      imports: ['vue'],
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
