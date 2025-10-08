import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['gsap'],
          utils: ['./src/utils/']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
