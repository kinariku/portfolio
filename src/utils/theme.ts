/**
 * テーマ管理ユーティリティ
 * ダークテーマ・ライトテーマの切り替え機能
 */

export type Theme = 'light' | 'dark'

export class ThemeManager {
  private static instance: ThemeManager
  private currentTheme: Theme = 'light'
  private listeners: Array<(theme: Theme) => void> = []

  constructor() {
    this.initializeTheme()
  }

  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager()
    }
    return ThemeManager.instance
  }

  /**
   * テーマの初期化
   */
  private initializeTheme(): void {
    // ローカルストレージから保存されたテーマを取得
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    
    this.currentTheme = savedTheme || systemTheme
    this.applyTheme(this.currentTheme)
    
    // システムテーマの変更を監視
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('portfolio-theme')) {
        this.setTheme(e.matches ? 'dark' : 'light')
      }
    })
  }

  /**
   * テーマを設定
   */
  setTheme(theme: Theme): void {
    this.currentTheme = theme
    this.applyTheme(theme)
    localStorage.setItem('portfolio-theme', theme)
    this.notifyListeners()
  }

  /**
   * 現在のテーマを取得
   */
  getCurrentTheme(): Theme {
    return this.currentTheme
  }

  /**
   * テーマを切り替え
   */
  toggleTheme(): void {
    this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light')
  }

  /**
   * テーマを適用
   */
  private applyTheme(theme: Theme): void {
    const root = document.documentElement
    const body = document.body
    
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
      body.classList.add('dark')
      body.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
      body.classList.add('light')
      body.classList.remove('dark')
    }
  }

  /**
   * テーマ変更リスナーを追加
   */
  addThemeListener(callback: (theme: Theme) => void): void {
    this.listeners.push(callback)
  }

  /**
   * テーマ変更リスナーを削除
   */
  removeThemeListener(callback: (theme: Theme) => void): void {
    this.listeners = this.listeners.filter(listener => listener !== callback)
  }

  /**
   * リスナーに通知
   */
  private notifyListeners(): void {
    this.listeners.forEach(callback => callback(this.currentTheme))
  }

  /**
   * テーマアイコンを取得
   */
  getThemeIcon(): string {
    return this.currentTheme === 'light' ? '🌙' : '☀️'
  }

  /**
   * テーマラベルを取得
   */
  getThemeLabel(): string {
    return this.currentTheme === 'light' ? 'ダークモード' : 'ライトモード'
  }
}
