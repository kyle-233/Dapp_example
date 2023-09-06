import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'config': path.resolve(__dirname, './src/config'),
      'provider': path.resolve(__dirname, './src/providers'),
      'utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react()],
})
