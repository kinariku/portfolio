/**
 * ナビゲーションコンポーネント
 * 洗練されたナビゲーションメニュー
 */

import { BaseComponent } from '../core/Component.ts'
import { AnimationManager } from '../utils/animations.ts'

export class NavigationComponent extends BaseComponent {
  private animationManager: AnimationManager
  private isMenuOpen: boolean = false

  constructor(selector: string) {
    super(selector)
    this.animationManager = AnimationManager.getInstance()
  }

  protected render(): void {
    this.element.innerHTML = `
      <nav class="navigation" role="navigation" aria-label="メインナビゲーション">
        <div class="nav-container">
          <div class="nav-brand">
            <a href="#hero" class="nav-logo">
              <span class="logo-text">Kinari Kuramoto</span>
            </a>
          </div>
          
          <div class="nav-menu" id="nav-menu">
            <ul class="nav-list">
              <li class="nav-item">
                <a href="#hero" class="nav-link active" data-section="hero" data-i18n="nav.home">
                  <span class="nav-text">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link" data-section="about" data-i18n="nav.about">
                  <span class="nav-text">About</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#works" class="nav-link" data-section="works" data-i18n="nav.works">
                  <span class="nav-text">Works</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#blog" class="nav-link" data-section="blog" data-i18n="nav.blog">
                  <span class="nav-text">Blog</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link" data-section="contact" data-i18n="nav.contact">
                  <span class="nav-text">Contact</span>
                </a>
              </li>
            </ul>
            <div class="nav-indicator"></div>
          </div>
          
          <div id="language-toggle"></div>
          
          <div class="nav-toggle" id="nav-toggle" aria-label="メニューを開く">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </div>
        </div>
      </nav>
    `
  }

  protected onMount(): void {
    this.setupEventListeners()
    this.setupAnimations()
    this.setupScrollSpy()
    this.initializeIndicator()
  }

  private initializeIndicator(): void {
    // 初期表示時にアクティブなリンクにインジケーターを配置
    const activeLink = this.querySelector('.nav-link.active') as HTMLAnchorElement
    if (activeLink) {
      // DOMが完全に描画された後に実行
      requestAnimationFrame(() => {
        this.updateIndicator(activeLink)
      })
    }
  }

  private setupEventListeners(): void {
    // メニュートグル
    const toggle = this.querySelector('#nav-toggle')
    const menu = this.querySelector('#nav-menu')
    
    if (toggle && menu) {
      this.addEventListener(toggle, 'click', this.toggleMenu.bind(this))
    }

    // ナビゲーションリンク
    const navLinks = this.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
      this.addEventListener(link, 'click', this.handleNavClick.bind(this))
    })

    // ウィンドウリサイズ
    this.addEventListener(window, 'resize', this.handleResize.bind(this))
  }

  private setupAnimations(): void {
    // ナビゲーションリンクのホバーアニメーション
    const navLinks = this.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
      this.animationManager.hoverEffect(link as HTMLElement)
    })

    // ハンバーガーメニューのアニメーション
    const toggle = this.querySelector('#nav-toggle')
    if (toggle) {
      this.animationManager.hoverEffect(toggle as HTMLElement)
    }
  }

  private setupScrollSpy(): void {
    // スクロール位置に応じたアクティブ状態の更新
    this.addEventListener(window, 'scroll', this.updateActiveSection.bind(this))
  }

  private toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
    const menu = this.querySelector('#nav-menu')
    const toggle = this.querySelector('#nav-toggle')
    
    if (menu && toggle) {
      menu.classList.toggle('active', this.isMenuOpen)
      toggle.classList.toggle('active', this.isMenuOpen)
      
      // アニメーション
      if (this.isMenuOpen) {
        this.animationManager.slideIn(menu as HTMLElement, 'right')
      }
    }
  }

  private handleNavClick(e: Event): void {
    const link = e.currentTarget as HTMLAnchorElement
    const section = link.getAttribute('data-section')
    
    if (section) {
      // アクティブ状態の更新
      this.updateActiveLink(link)
      
      // メニューを閉じる（モバイル）
      if (this.isMenuOpen) {
        this.toggleMenu()
      }
    }
  }

  private updateActiveLink(activeLink: HTMLAnchorElement): void {
    const navLinks = this.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
      link.classList.remove('active')
    })
    activeLink.classList.add('active')
    this.updateIndicator(activeLink)
  }

  private updateActiveSection(): void {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = this.querySelectorAll('.nav-link')
    
    let currentSection = ''
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section.id
      }
    })

    if (currentSection) {
      navLinks.forEach(link => {
        const section = link.getAttribute('data-section')
        const isActive = section === currentSection
        link.classList.toggle('active', isActive)
        
        if (isActive) {
          this.updateIndicator(link as HTMLAnchorElement)
        }
      })
    }
  }

  private updateIndicator(activeLink: HTMLAnchorElement): void {
    const indicator = this.querySelector('.nav-indicator') as HTMLElement
    if (!indicator) return

    const linkRect = activeLink.getBoundingClientRect()
    const navListRect = activeLink.closest('.nav-list')?.getBoundingClientRect()
    
    if (navListRect) {
      const left = linkRect.left - navListRect.left
      const width = linkRect.width
      
      indicator.style.transform = `translateX(${left}px)`
      indicator.style.width = `${width}px`
      indicator.style.opacity = '1'
    }
  }

  private handleResize(): void {
    // デスクトップサイズではメニューを閉じる
    if (window.innerWidth >= 768) {
      if (this.isMenuOpen) {
        this.toggleMenu()
      }
    }
  }
}
