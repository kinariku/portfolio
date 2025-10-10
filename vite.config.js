import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // 相対パスを使用（CloudFlare Pages対応）
  build: {
    target: 'esnext',
    minify: 'terser',
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['gsap']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false
    }
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  esbuild: {
    target: 'esnext'
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  optimizeDeps: {
    include: ['gsap']
  }
})
