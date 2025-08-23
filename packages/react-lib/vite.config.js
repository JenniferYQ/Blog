import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite配置
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react()],
})