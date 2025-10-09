/**
 * メインアプリケーションエントリーポイント
 * フレームワークの初期化とアプリケーション起動
 */

import { App } from './core/App.ts'
import { PerformanceManager } from './utils/performance.ts'
import { AnimationManager } from './utils/animations.ts'
import { ThemeManager } from './utils/theme.ts'
import { I18nManager } from './utils/i18n.ts'
import { WorkDetailPage } from './pages/WorkDetail.ts'
import './styles/design-system.css'

// アプリケーション初期化
class PortfolioApp {
  private app: App
  private performanceManager: PerformanceManager
  private animationManager: AnimationManager
  private themeManager: ThemeManager
  private i18nManager: I18nManager

  constructor() {
    this.app = new App()
    this.performanceManager = PerformanceManager.getInstance()
    this.animationManager = AnimationManager.getInstance()
    this.themeManager = ThemeManager.getInstance()
    this.i18nManager = I18nManager.getInstance()
    
    // ルーティング初期化
    this.initializeRouting()
  }

  /**
   * アプリケーション起動
   */
  async start(): Promise<void> {
    try {
      console.log('🚀 Starting Portfolio App initialization...')
      
      // パフォーマンス最適化の初期化
      console.log('⚡ Initializing performance optimizations...')
      this.initializePerformance()
      
      // ルート設定
      console.log('🛣️ Setting up routes...')
      this.setupRoutes()
      
      // コンポーネント登録
      console.log('🧩 Registering components...')
      await this.registerComponents()
      
      // アプリケーション開始
      console.log('🎬 Starting app...')
      this.app.start()
      
      // 初期アニメーション
      console.log('🎨 Initializing animations...')
      this.initializeAnimations()
      
      console.log('🚀 Portfolio App initialized successfully')
    } catch (error) {
      console.error('❌ Failed to initialize Portfolio App:', error)
    }
  }

  /**
   * パフォーマンス最適化の初期化
   */
  private initializePerformance(): void {
    // 遅延読み込み設定
    this.performanceManager.setupLazyLoading()
    
    // リソースの事前読み込み
    this.preloadCriticalResources()
    
    // パフォーマンス監視
    this.performanceManager.monitorMemory()
    this.performanceManager.monitorNetwork()
    this.performanceManager.collectMetrics()
    
    // バンドル最適化
    this.performanceManager.optimizeBundles()
  }

  /**
   * クリティカルリソースの事前読み込み
   */
  private preloadCriticalResources(): void {
    // フォントの事前読み込み
    this.performanceManager.preloadResource(
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap',
      'style'
    )
    
    // プロフィール画像の事前読み込み
    this.performanceManager.preloadResource('/assets/images/profile.png', 'image')
  }

  /**
   * ルーティング初期化
   */
  private initializeRouting(): void {
    // ハッシュ変更時のイベントリスナー
    window.addEventListener('hashchange', () => this.handleRouteChange())
    window.addEventListener('load', () => this.handleRouteChange())
  }

  /**
   * ルート変更ハンドラ
   */
  private handleRouteChange(): void {
    const hash = window.location.hash.slice(1) // # を削除
    const appContainer = document.getElementById('app')
    const mainContent = document.getElementById('main-content')
    
    if (!appContainer || !mainContent) return

    // Work詳細ページへのルーティング
    if (hash.startsWith('work/')) {
      const workId = hash.replace('work/', '')
      
      // メインコンテンツを非表示
      mainContent.style.display = 'none'
      
      // 既存の詳細ページを削除
      const existingDetail = document.getElementById('work-detail-container')
      if (existingDetail) {
        existingDetail.remove()
      }
      
      // 詳細ページコンテナを作成
      const detailContainer = document.createElement('div')
      detailContainer.id = 'work-detail-container'
      appContainer.appendChild(detailContainer)
      
      // 詳細ページをレンダリング
      const workDetailPage = new WorkDetailPage('#work-detail-container', workId)
      workDetailPage.mount()
      
      // ページトップにスクロール
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // 翻訳を適用
      this.updatePageTranslations()
    } else {
      // メインコンテンツを表示
      mainContent.style.display = 'block'
      
      // 詳細ページコンテナを削除
      const existingDetail = document.getElementById('work-detail-container')
      if (existingDetail) {
        existingDetail.remove()
      }
      
      // ハッシュに基づいてスクロール
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  /**
   * ルート設定
   */
  private setupRoutes(): void {
    // ルーティングは initializeRouting() で処理
  }

  /**
   * コンポーネント登録
   */
  private async registerComponents(): Promise<void> {
    try {
      console.log('🚀 Starting component registration...')
      
      // ナビゲーションコンポーネント
      console.log('📦 Loading NavigationComponent...')
      const { NavigationComponent } = await import('./components/Navigation.ts')
      console.log('✅ NavigationComponent loaded')
      
      const navElement = document.querySelector('#navigation')
      console.log('🎯 Navigation element found:', navElement)
      
      this.app.registerComponent('navigation', new NavigationComponent('#navigation'))
      console.log('✅ NavigationComponent registered')
      
      // 言語切り替えコンポーネント
      console.log('📦 Loading LanguageToggleComponent...')
      const { LanguageToggleComponent } = await import('./components/LanguageToggle.ts')
      console.log('✅ LanguageToggleComponent loaded')
      
      const langElement = document.querySelector('#language-toggle')
      console.log('🎯 Language toggle element found:', langElement)
      
      this.app.registerComponent('language-toggle', new LanguageToggleComponent('#language-toggle'))
      console.log('✅ LanguageToggleComponent registered')
      
    } catch (error) {
      console.error('❌ Component registration failed:', error)
    }
    
    // i18nの初期化
    this.i18nManager.initialize()
    
    // 言語変更時のハンドラー
    this.i18nManager.addListener(() => {
      this.updatePageTranslations()
    })
    
    // 初回の翻訳適用
    this.updatePageTranslations()
  }

  /**
   * 初期アニメーション
   */
  private initializeAnimations(): void {
    // ページロード時のアニメーション
    const heroSection = document.querySelector('#hero')
    if (heroSection) {
      this.animationManager.fadeIn(heroSection as HTMLElement, 0.8)
    }
    
    // スクロールトリガーアニメーションの設定
    this.setupScrollAnimations()
  }

  /**
   * スクロールアニメーション設定
   */
  private setupScrollAnimations(): void {
    // 各セクションのアニメーション
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section, index) => {
      const delay = index * 0.05
      this.animationManager.scrollTrigger(
        section as HTMLElement,
        this.animationManager.fadeIn(section as HTMLElement, 0.4, delay)
      )
    })
    
    // カード要素のホバーエフェクト（存在する場合のみ）
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      this.animationManager.hoverEffect(card as HTMLElement)
    })
  }

  /**
   * ページ内の翻訳を更新
   */
  private updatePageTranslations(): void {
    // data-i18n属性を持つ要素を全て取得
    const elements = document.querySelectorAll('[data-i18n]')
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n')
      if (key) {
        const translation = this.i18nManager.translate(key)
        const textElement = element.querySelector('.nav-text, .hero-greeting, .hero-subtitle, .section-title, .btn, .contact-label, .footer-text')
        if (textElement) {
          textElement.textContent = translation
        } else {
          element.textContent = translation
        }
      }
    })
  }

  /**
   * アプリケーション終了
   */
  destroy(): void {
    this.app.destroy()
    this.performanceManager.cleanup()
    this.animationManager.cleanup()
  }
}

// DOM読み込み完了後にアプリケーション起動
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const portfolioApp = new PortfolioApp()
    portfolioApp.start()
    
    // グローバルに公開（デバッグ用）
    ;(window as any).portfolioApp = portfolioApp
  })
} else {
  // 既にDOMが読み込まれている場合
  const portfolioApp = new PortfolioApp()
  portfolioApp.start()
  ;(window as any).portfolioApp = portfolioApp
}

// ページ離脱時のクリーンアップ
window.addEventListener('beforeunload', () => {
  const app = (window as any).portfolioApp
  if (app) {
    app.destroy()
  }
})
