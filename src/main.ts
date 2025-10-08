/**
 * メインアプリケーションエントリーポイント
 * フレームワークの初期化とアプリケーション起動
 */

import { App } from './core/App.js'
import { PerformanceManager } from './utils/performance.js'
import { AnimationManager } from './utils/animations.js'
import { ThemeManager } from './utils/theme.js'
import { I18nManager } from './utils/i18n.js'
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
  }

  /**
   * アプリケーション起動
   */
  async start(): Promise<void> {
    try {
      // パフォーマンス最適化の初期化
      this.initializePerformance()
      
      // ルート設定
      this.setupRoutes()
      
      // コンポーネント登録
      await this.registerComponents()
      
      // アプリケーション開始
      this.app.start()
      
      // 初期アニメーション
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
    this.performanceManager.preloadResource('./profile.png', 'image')
  }

  /**
   * ルート設定
   */
  private setupRoutes(): void {
    // ルートは後で各セクションコンポーネントを作成した際に追加
    // 現在は基本的なナビゲーションのみ実装
  }

  /**
   * コンポーネント登録
   */
  private async registerComponents(): Promise<void> {
    // ナビゲーションコンポーネント
    const { NavigationComponent } = await import('./components/Navigation.js')
    this.app.registerComponent('navigation', new NavigationComponent('#navigation'))
    
    // 言語切り替えコンポーネント
    const { LanguageToggleComponent } = await import('./components/LanguageToggle.js')
    this.app.registerComponent('language-toggle', new LanguageToggleComponent('#language-toggle'))
    
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
