import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SysMA/', // Define o caminho base correto para o GitHub Pages
})