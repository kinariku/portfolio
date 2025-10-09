/**
 * テーマ切り替えコンポーネント
 * ダークテーマ・ライトテーマの切り替えボタン
 */

import { BaseComponent } from '../core/Component.ts'
import { ThemeManager } from '../utils/theme.ts'
import { AnimationManager } from '../utils/animations.ts'

export class ThemeToggleComponent extends BaseComponent {
  private themeManager: ThemeManager
  private animationManager: AnimationManager

  constructor(selector: string) {
    super(selector)
    this.themeManager = ThemeManager.getInstance()
    this.animationManager = AnimationManager.getInstance()
  }

  protected render(): void {
    this.element.innerHTML = `
      <button 
        class="theme-toggle" 
        id="theme-toggle"
        aria-label="テーマを切り替え"
        title="${this.themeManager.getThemeLabel()}"
      >
        <span class="theme-icon">${this.themeManager.getThemeIcon()}</span>
        <span class="theme-label">${this.themeManager.getThemeLabel()}</span>
      </button>
    `
  }

  protected onMount(): void {
    this.setupEventListeners()
    this.setupThemeListener()
    this.setupAnimations()
  }

  private setupEventListeners(): void {
    const toggle = this.querySelector('#theme-toggle')
    if (toggle) {
      this.addEventListener(toggle, 'click', this.handleToggle.bind(this))
    }
  }

  private setupThemeListener(): void {
    this.themeManager.addThemeListener(this.handleThemeChange.bind(this))
  }

  private setupAnimations(): void {
    const toggle = this.querySelector('#theme-toggle')
    if (toggle) {
      this.animationManager.hoverEffect(toggle as HTMLElement)
    }
  }

  private handleToggle(): void {
    this.themeManager.toggleTheme()
    
    // アニメーション効果
    const toggle = this.querySelector('#theme-toggle')
    if (toggle) {
      this.animationManager.scaleIn(toggle as HTMLElement, 0.95)
    }
  }

  private handleThemeChange(theme: string): void {
    const icon = this.querySelector('.theme-icon')
    const label = this.querySelector('.theme-label')
    const toggle = this.querySelector('#theme-toggle')
    
    if (icon) {
      icon.textContent = this.themeManager.getThemeIcon()
    }
    
    if (label) {
      label.textContent = this.themeManager.getThemeLabel()
    }
    
    if (toggle) {
      toggle.setAttribute('title', this.themeManager.getThemeLabel())
    }
  }
}
