/**
 * Works一覧ページのロジック
 */

import { worksData, getWorksByChronological, getWorksByTag, getAllTags, WorkDetail } from './data/works.ts'
import { getWorks, convertMicroCMSWorkToWorkDetail, MicroCMSWork } from './utils/microcms.ts'
import { NavigationComponent } from './components/Navigation.ts'
import { LanguageToggleComponent } from './components/LanguageToggle.ts'
import { I18nManager } from './utils/i18n.ts'
import { AnimationManager } from './utils/animations.ts'

class WorksListPage {
  private i18nManager: I18nManager
  private animationManager: AnimationManager
  private currentFilter: string = 'all'
  private currentSort: string = 'newest'
  private allWorks: any[] = []
  private useMicroCMS: boolean = false

  constructor() {
    this.i18nManager = I18nManager.getInstance()
    this.animationManager = AnimationManager.getInstance()
    
    // microCMSの設定があるかチェック
    this.useMicroCMS = !!(
      import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN && 
      import.meta.env.VITE_MICROCMS_API_KEY
    )
    
    // フォールバック: ローカルデータを使用
    if (!this.useMicroCMS) {
      console.log('microCMS not configured, using local data')
      this.allWorks = worksData
    }
  }

  async initialize(): Promise<void> {
    // ナビゲーションコンポーネントを初期化
    const navigation = new NavigationComponent('#navigation')
    navigation.mount()

    // 言語切り替えコンポーネントを初期化
    const languageToggle = new LanguageToggleComponent('#language-toggle')
    languageToggle.mount()

    // I18nマネージャーを初期化
    this.i18nManager.initialize()
    this.i18nManager.addListener(() => this.updatePageTranslations())

    // 初期翻訳を適用
    this.updatePageTranslations()

    // microCMSからデータを取得
    if (this.useMicroCMS) {
      await this.loadWorksFromMicroCMS()
    }

    // フィルターボタンを生成
    this.renderFilterButtons()

    // Worksを表示
    this.renderWorks()

    // イベントリスナーを設定
    this.setupEventListeners()

    // アニメーションを初期化
    this.initializeAnimations()
  }

  private async loadWorksFromMicroCMS(): Promise<void> {
    try {
      const response = await getWorks({
        orders: '-year',
        limit: 100,
      })
      
      this.allWorks = response.contents.map((work: MicroCMSWork) => 
        convertMicroCMSWorkToWorkDetail(work)
      )
      
      console.log(`Loaded ${this.allWorks.length} works from microCMS`)
    } catch (error) {
      console.error('Failed to load works from microCMS, using local data:', error)
      this.allWorks = worksData
      this.useMicroCMS = false
    }
  }

  private renderFilterButtons(): void {
    const filterContainer = document.getElementById('tag-filters')
    if (!filterContainer) return

    const tags = getAllTags()
    const buttons: string[] = ['<button class="filter-btn active" data-tag="all">All</button>']

    tags.forEach(tag => {
      buttons.push(`<button class="filter-btn" data-tag="${tag}">${tag}</button>`)
    })

    filterContainer.innerHTML = buttons.join('')

    // フィルターボタンのイベントリスナー
    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement
        const tag = target.dataset.tag || 'all'
        this.handleFilterChange(tag)
      })
    })
  }

  private handleFilterChange(tag: string): void {
    this.currentFilter = tag

    // アクティブ状態を更新
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active')
      if ((btn as HTMLElement).dataset.tag === tag) {
        btn.classList.add('active')
      }
    })

    // Worksを再描画
    this.renderWorks()
  }

  private handleSortChange(sort: string): void {
    this.currentSort = sort
    this.renderWorks()
  }

  private renderWorks(): void {
    const worksGrid = document.getElementById('works-grid')
    const noResults = document.getElementById('no-results')
    if (!worksGrid || !noResults) return

    // フィルター適用
    let filteredWorks = this.currentFilter === 'all' 
      ? this.allWorks 
      : getWorksByTag(this.currentFilter)

    // ソート適用
    if (this.currentSort === 'oldest') {
      filteredWorks = getWorksByChronological(true).filter(work => 
        this.currentFilter === 'all' || work.tags.includes(this.currentFilter)
      )
    } else {
      filteredWorks = getWorksByChronological(false).filter(work => 
        this.currentFilter === 'all' || work.tags.includes(this.currentFilter)
      )
    }

    // 結果がない場合
    if (filteredWorks.length === 0) {
      worksGrid.style.display = 'none'
      noResults.style.display = 'block'
      return
    }

    worksGrid.style.display = 'grid'
    noResults.style.display = 'none'

    // Worksカードを生成
    const lang = this.i18nManager.getLanguage()
    worksGrid.innerHTML = filteredWorks.map(work => `
      <a href="index.html#work/${work.id}" class="work-card">
        <div class="work-image">
          <div class="work-placeholder">${work.title[lang]}</div>
        </div>
        <div class="work-content">
          <h3 class="work-title">${work.title[lang]}</h3>
          <p class="work-description">${work.description[lang]}</p>
          <div class="work-tags">
            ${work.tags.slice(0, 3).map(tag => `<span class="work-tag">${tag}</span>`).join('')}
          </div>
          <div class="work-meta">
            <span class="work-year">${work.year}</span>
            <span class="work-category">${work.category}</span>
          </div>
        </div>
      </a>
    `).join('')

    // アニメーションを適用
    this.animateCards()
  }

  private animateCards(): void {
    const cards = document.querySelectorAll('.work-card')
    cards.forEach((card, index) => {
      setTimeout(() => {
        this.animationManager.fadeIn(card as HTMLElement, 0.4, 0)
      }, index * 50)
    })
  }

  private setupEventListeners(): void {
    // ソート変更
    const sortSelect = document.getElementById('sort-select') as HTMLSelectElement
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.handleSortChange((e.target as HTMLSelectElement).value)
      })
    }

    // Back linkのスムーズスクロール
    const backLink = document.querySelector('.back-link')
    if (backLink) {
      backLink.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.href = 'index.html#works'
      })
    }
  }

  private initializeAnimations(): void {
    // ページヒーローのアニメーション
    const pageHero = document.querySelector('.page-hero')
    if (pageHero) {
      this.animationManager.fadeIn(pageHero as HTMLElement, 0.6, 0)
    }

    // コントロールのアニメーション
    const controls = document.querySelector('.works-controls')
    if (controls) {
      this.animationManager.fadeIn(controls as HTMLElement, 0.6, 0.2)
    }
  }

  private updatePageTranslations(): void {
    const elements = document.querySelectorAll('[data-i18n]')
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n')
      if (key) {
        const translation = this.i18nManager.translate(key)
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          (element as HTMLInputElement).placeholder = translation
        } else if (element.tagName === 'OPTION') {
          element.textContent = translation
        } else {
          element.textContent = translation
        }
      }
    })

    // Worksを再描画（言語が変わった場合）
    this.renderWorks()
  }
}

// ページ初期化
const app = new WorksListPage()
app.initialize()

