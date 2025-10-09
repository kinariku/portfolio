/**
 * 言語切り替えコンポーネント
 * 日本語と英語の切り替えボタン
 */

import { BaseComponent } from '../core/Component.ts'
import { I18nManager, Language } from '../utils/i18n.ts'

export class LanguageToggleComponent extends BaseComponent {
  private i18n: I18nManager

  constructor(selector: string) {
    super(selector)
    this.i18n = I18nManager.getInstance()
  }

  protected render(): void {
    const currentLang = this.i18n.getCurrentLanguage()
    
    this.element.innerHTML = `
      <div class="language-toggle">
        <button 
          class="lang-btn ${currentLang === 'ja' ? 'active' : ''}" 
          data-lang="ja"
          aria-label="日本語に切り替え"
        >
          <span class="lang-text">JA</span>
        </button>
        <button 
          class="lang-btn ${currentLang === 'en' ? 'active' : ''}" 
          data-lang="en"
          aria-label="Switch to English"
        >
          <span class="lang-text">EN</span>
        </button>
      </div>
    `
  }

  protected onMount(): void {
    this.setupEventListeners()
    this.i18n.addListener(this.handleLanguageChange.bind(this))
  }

  private setupEventListeners(): void {
    const buttons = this.querySelectorAll('.lang-btn')
    buttons.forEach(button => {
      this.addEventListener(button, 'click', this.handleClick.bind(this))
    })
  }

  private handleClick(e: Event): void {
    const button = e.currentTarget as HTMLButtonElement
    const lang = button.getAttribute('data-lang') as Language
    
    if (lang) {
      this.i18n.setLanguage(lang)
    }
  }

  private handleLanguageChange(lang: Language): void {
    const buttons = this.querySelectorAll('.lang-btn')
    buttons.forEach(button => {
      const btnLang = button.getAttribute('data-lang')
      button.classList.toggle('active', btnLang === lang)
    })
  }
}
