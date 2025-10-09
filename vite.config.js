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
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  esbuild: {
    target: 'esnext'
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
})
