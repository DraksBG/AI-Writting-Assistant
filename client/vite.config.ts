import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer({
    png: { 
      quality: 70,
      compressionLevel: 8
    },
    jpeg: { quality: 75 },
    webp: { quality: 80 },
    avif: { quality: 80 },
  }),],
  server: {
    proxy: {
      '/api/v1/analytics_events': {
        target: 'https://auth.privy.io',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
