/**
 * Work詳細ページコンポーネント
 */

import { BaseComponent } from '../core/Component.ts'
import { WorkDetail, getWorkById, getRelatedWorks } from '../data/works.ts'
import { getWorkById as getMicroCMSWorkById, convertMicroCMSWorkToWorkDetail } from '../utils/microcms.ts'
import { I18nManager } from '../utils/i18n.ts'
import { AnimationManager } from '../utils/animations.ts'

export class WorkDetailPage extends BaseComponent {
  private workId: string
  private work: any | undefined
  private i18nManager: I18nManager
  private animationManager: AnimationManager
  private useMicroCMS: boolean = false

  constructor(selector: string, workId: string) {
    super(selector)
    this.workId = workId
    this.i18nManager = I18nManager.getInstance()
    this.animationManager = AnimationManager.getInstance()
    
    // microCMSの設定があるかチェック
    this.useMicroCMS = !!(
      import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN && 
      import.meta.env.VITE_MICROCMS_API_KEY
    )
    
    // ローカルデータから取得（フォールバック）
    if (!this.useMicroCMS) {
      this.work = getWorkById(workId)
    }
  }

  async mount(): Promise<void> {
    // microCMSからデータを取得
    if (this.useMicroCMS) {
      await this.loadWorkFromMicroCMS()
    }
    
    // 親クラスのmountを呼び出し
    super.mount()
  }

  private async loadWorkFromMicroCMS(): Promise<void> {
    try {
      const microCMSWork = await getMicroCMSWorkById(this.workId)
      this.work = convertMicroCMSWorkToWorkDetail(microCMSWork)
      console.log(`Loaded work ${this.workId} from microCMS`)
    } catch (error) {
      console.error(`Failed to load work ${this.workId} from microCMS, using local data:`, error)
      this.work = getWorkById(this.workId)
      this.useMicroCMS = false
    }
  }

  protected render(): void {
    if (!this.work) {
      this.element.innerHTML = `
        <div class="work-not-found">
          <h1>Work not found</h1>
          <a href="#works" class="btn btn-primary">Back to Works</a>
        </div>
      `
      return
    }

    const lang = this.i18nManager.getLanguage()
    const relatedWorks = getRelatedWorks(this.workId)

    this.element.innerHTML = `
      <div class="work-detail">
        <!-- Hero Section -->
        <section class="work-hero">
          <div class="container">
            <a href="#works" class="back-link">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span data-i18n="work.back">Back to Works</span>
            </a>
            
            <div class="work-header">
              <div class="work-meta">
                <span class="work-year">${this.work.year}</span>
                <span class="work-category">${this.work.category}</span>
              </div>
              
              <h1 class="work-title">${this.work.title[lang]}</h1>
              <p class="work-subtitle">${this.work.subtitle[lang]}</p>
              
              <div class="work-info-grid">
                <div class="work-info-item">
                  <h3 class="info-label" data-i18n="work.role">Role</h3>
                  <p class="info-value">${this.work.role[lang]}</p>
                </div>
                <div class="work-info-item">
                  <h3 class="info-label" data-i18n="work.duration">Duration</h3>
                  <p class="info-value">${this.work.duration[lang]}</p>
                </div>
                <div class="work-info-item">
                  <h3 class="info-label" data-i18n="work.tech">Technologies</h3>
                  <div class="tech-tags">
                    ${this.work.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Main Image -->
        <section class="work-main-image">
          <div class="container">
            <img src="${this.work.thumbnail}" alt="${this.work.title[lang]}" class="main-image">
          </div>
        </section>

        <!-- Overview -->
        <section class="work-overview">
          <div class="container">
            <div class="content-grid">
              <div class="content-sidebar">
                <h2 class="section-heading" data-i18n="work.overview">Overview</h2>
              </div>
              <div class="content-main">
                ${this.work.detailedDescription[lang].map(para => `<p class="text-paragraph">${para}</p>`).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- Features -->
        <section class="work-features">
          <div class="container">
            <div class="content-grid">
              <div class="content-sidebar">
                <h2 class="section-heading" data-i18n="work.features">Key Features</h2>
              </div>
              <div class="content-main">
                <ul class="feature-list">
                  ${this.work.features[lang].map(feature => `<li class="feature-item">${feature}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Challenges -->
        <section class="work-challenges">
          <div class="container">
            <div class="content-grid">
              <div class="content-sidebar">
                <h2 class="section-heading" data-i18n="work.challenges">Challenges</h2>
              </div>
              <div class="content-main">
                <ul class="challenge-list">
                  ${this.work.challenges[lang].map(challenge => `<li class="challenge-item">${challenge}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Outcome -->
        <section class="work-outcome">
          <div class="container">
            <div class="content-grid">
              <div class="content-sidebar">
                <h2 class="section-heading" data-i18n="work.outcome">Outcome</h2>
              </div>
              <div class="content-main">
                <p class="outcome-text">${this.work.outcome[lang]}</p>
              </div>
            </div>
          </div>
        </section>

        ${this.work.links ? `
          <section class="work-links">
            <div class="container">
              <div class="links-wrapper">
                ${this.work.links.website ? `
                  <a href="${this.work.links.website}" target="_blank" rel="noopener noreferrer" class="link-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" stroke-width="2"/>
                      <path d="M2 10H18" stroke="currentColor" stroke-width="2"/>
                      <path d="M10 2C11.5 4 12 7 12 10C12 13 11.5 16 10 18C8.5 16 8 13 8 10C8 7 8.5 4 10 2Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span data-i18n="work.visit">Visit Website</span>
                  </a>
                ` : ''}
                ${this.work.links.github ? `
                  <a href="${this.work.links.github}" target="_blank" rel="noopener noreferrer" class="link-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                ` : ''}
              </div>
            </div>
          </section>
        ` : ''}

        <!-- Related Works -->
        ${relatedWorks.length > 0 ? `
          <section class="related-works">
            <div class="container">
              <h2 class="section-title" data-i18n="work.related">Related Works</h2>
              <div class="related-grid">
                ${relatedWorks.map(relatedWork => `
                  <a href="#work/${relatedWork.id}" class="related-card">
                    <div class="related-image">
                      <img src="${relatedWork.thumbnail}" alt="${relatedWork.title[lang]}">
                    </div>
                    <h3 class="related-title">${relatedWork.title[lang]}</h3>
                    <p class="related-description">${relatedWork.description[lang]}</p>
                  </a>
                `).join('')}
              </div>
            </div>
          </section>
        ` : ''}
      </div>
    `
  }

  protected onMount(): void {
    this.setupAnimations()
    this.setupEventListeners()
    this.i18nManager.addListener(this.handleLanguageChange.bind(this))
  }

  protected onUnmount(): void {
    this.i18nManager.removeListener(this.handleLanguageChange.bind(this))
  }

  private setupAnimations(): void {
    // フェードインアニメーション
    const sections = this.querySelectorAll('section')
    sections.forEach((section, index) => {
      this.animationManager.fadeIn(section as HTMLElement, 0.6, index * 0.1)
    })
  }

  private setupEventListeners(): void {
    // スムーズスクロール
    const backLink = this.querySelector('.back-link')
    if (backLink) {
      this.addEventListener(backLink, 'click', (e: Event) => {
        e.preventDefault()
        window.history.back()
      })
    }
  }

  private handleLanguageChange(): void {
    this.render()
    this.setupAnimations()
    this.setupEventListeners()
  }
}

