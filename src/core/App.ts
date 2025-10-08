/**
 * Core Application Framework
 * シンプルで洗練された、堅牢で高速なフレームワーク
 */

export interface Component {
  element: HTMLElement
  mount(): void
  unmount(): void
  update?(data?: any): void
}

export interface Route {
  path: string
  component: () => Promise<Component>
  title?: string
}

export class App {
  private components: Map<string, Component> = new Map()
  private routes: Route[] = []
  private currentRoute: string = ''
  private observer: IntersectionObserver

  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { threshold: 0.1, rootMargin: '-50px' }
    )
  }

  /**
   * ルートを登録
   */
  addRoute(route: Route): void {
    this.routes.push(route)
  }

  /**
   * コンポーネントを登録
   */
  registerComponent(id: string, component: Component): void {
    this.components.set(id, component)
    component.mount()
  }

  /**
   * ルーティングを開始
   */
  start(): void {
    this.setupNavigation()
    this.setupLazyLoading()
    this.handleRouteChange()
    
    // パフォーマンス監視
    this.setupPerformanceMonitoring()
  }

  /**
   * ナビゲーション設定
   */
  private setupNavigation(): void {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      
      if (link) {
        e.preventDefault()
        const href = link.getAttribute('href')!
        this.navigateTo(href.substring(1))
      }
    })

    // ブラウザの戻る/進むボタン対応
    window.addEventListener('popstate', () => {
      this.handleRouteChange()
    })
  }

  /**
   * 遅延読み込み設定
   */
  private setupLazyLoading(): void {
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => this.observer.observe(img))
  }

  /**
   * ルート変更処理
   */
  private navigateTo(section: string): void {
    const target = document.getElementById(section)
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      this.currentRoute = section
      this.updateActiveNavigation()
    }
  }

  /**
   * ルート変更のハンドリング
   */
  private handleRouteChange(): void {
    const sections = document.querySelectorAll('section[id]')
    let currentSection = ''

    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section.id
      }
    })

    if (currentSection && currentSection !== this.currentRoute) {
      this.currentRoute = currentSection
      this.updateActiveNavigation()
      document.title = this.getPageTitle(currentSection)
    }
  }

  /**
   * アクティブナビゲーション更新
   */
  private updateActiveNavigation(): void {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${this.currentRoute}`) {
        link.classList.add('active')
      }
    })
  }

  /**
   * ページタイトル取得
   */
  private getPageTitle(section: string): string {
    const route = this.routes.find(r => r.path === section)
    return route?.title || 'Kinari Kuramoto - Portfolio'
  }

  /**
   * 交差オブザーバー処理
   */
  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        img.src = img.dataset.src!
        img.classList.add('loaded')
        this.observer.unobserve(img)
      }
    })
  }

  /**
   * パフォーマンス監視
   */
  private setupPerformanceMonitoring(): void {
    // Core Web Vitals監視
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }
  }

  /**
   * アプリケーション終了
   */
  destroy(): void {
    this.components.forEach(component => component.unmount())
    this.observer.disconnect()
  }
}
