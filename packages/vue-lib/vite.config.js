import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Vite配置
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [vue()],
})