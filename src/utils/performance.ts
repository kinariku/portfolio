/**
 * パフォーマンス最適化ユーティリティ
 * 高速で堅牢なサイト構築
 */

export class PerformanceManager {
  private static instance: PerformanceManager
  private lazyImages: Set<HTMLImageElement> = new Set()
  private intersectionObserver: IntersectionObserver

  constructor() {
    this.intersectionObserver = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { rootMargin: '50px' }
    )
  }

  static getInstance(): PerformanceManager {
    if (!PerformanceManager.instance) {
      PerformanceManager.instance = new PerformanceManager()
    }
    return PerformanceManager.instance
  }

  /**
   * 画像の遅延読み込み
   */
  setupLazyLoading(): void {
    const images = document.querySelectorAll('img[data-src]')
    images.forEach(img => {
      this.lazyImages.add(img as HTMLImageElement)
      this.intersectionObserver.observe(img)
    })
  }

  /**
   * 交差オブザーバー処理
   */
  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        this.loadImage(img)
        this.intersectionObserver.unobserve(img)
        this.lazyImages.delete(img)
      }
    })
  }

  /**
   * 画像読み込み
   */
  private loadImage(img: HTMLImageElement): void {
    const src = img.dataset.src
    if (src) {
      img.src = src
      img.classList.add('loaded')
      
      // 読み込み完了時のアニメーション
      img.addEventListener('load', () => {
        img.style.opacity = '1'
      })
    }
  }

  /**
   * リソースの事前読み込み
   */
  preloadResource(href: string, as: string = 'image'): void {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    document.head.appendChild(link)
  }

  /**
   * クリティカルCSSのインライン化
   */
  inlineCriticalCSS(css: string): void {
    const style = document.createElement('style')
    style.textContent = css
    document.head.insertBefore(style, document.head.firstChild)
  }

  /**
   * バンドル最適化
   */
  optimizeBundles(): void {
    // 動的インポートでコード分割
    const loadComponent = async (componentName: string) => {
      try {
        const module = await import(`../components/${componentName}` /* @vite-ignore */)
        return module.default
      } catch (error) {
        console.error(`Failed to load component: ${componentName}`, error)
      }
    }

    // 必要な時だけコンポーネントを読み込み
    window.loadComponent = loadComponent
  }

  /**
   * メモリ使用量監視
   */
  monitorMemory(): void {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        })
      }, 30000) // 30秒ごと
    }
  }

  /**
   * ネットワーク状態監視
   */
  monitorNetwork(): void {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      console.log('Network info:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink + ' Mbps',
        rtt: connection.rtt + ' ms'
      })

      // ネットワーク状態に応じた最適化
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        this.enableLowBandwidthMode()
      }
    }
  }

  /**
   * 低帯域幅モード
   */
  private enableLowBandwidthMode(): void {
    // 低解像度画像の使用
    const images = document.querySelectorAll('img[data-src-low]')
    images.forEach(img => {
      const lowResSrc = img.getAttribute('data-src-low')
      if (lowResSrc) {
        img.setAttribute('data-src', lowResSrc)
      }
    })

    // アニメーションの無効化
    document.documentElement.style.setProperty('--animation-duration', '0s')
  }

  /**
   * パフォーマンスメトリクス収集
   */
  collectMetrics(): void {
    // Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => this.reportMetric('CLS', metric.value))
        getFID((metric) => this.reportMetric('FID', metric.value))
        getFCP((metric) => this.reportMetric('FCP', metric.value))
        getLCP((metric) => this.reportMetric('LCP', metric.value))
        getTTFB((metric) => this.reportMetric('TTFB', metric.value))
      })
    }

    // カスタムメトリクス
    window.addEventListener('load', () => {
      const loadTime = performance.now()
      this.reportMetric('LoadTime', loadTime)
    })
  }

  /**
   * メトリクスレポート
   */
  private reportMetric(name: string, value: number): void {
    console.log(`Performance Metric - ${name}:`, value)
    
    // 本番環境では分析サービスに送信
    if (process.env.NODE_ENV === 'production') {
      // Google Analytics 4 やその他の分析サービスに送信
      // gtag('event', 'web_vitals', { [name]: value })
    }
  }

  /**
   * クリーンアップ
   */
  cleanup(): void {
    this.intersectionObserver.disconnect()
    this.lazyImages.clear()
  }
}
