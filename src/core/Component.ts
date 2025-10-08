/**
 * ベースコンポーネントクラス
 * 再利用可能で堅牢なコンポーネントシステム
 */

import { Component as IComponent } from './App.js'

export abstract class BaseComponent implements IComponent {
  public element: HTMLElement
  protected props: Record<string, any> = {}
  protected state: Record<string, any> = {}
  private eventListeners: Array<{ element: EventTarget; event: string; handler: EventListener }> = []

  constructor(selector: string | HTMLElement, props: Record<string, any> = {}) {
    this.props = props
    this.element = typeof selector === 'string' 
      ? document.querySelector(selector) as HTMLElement
      : selector

    if (!this.element) {
      throw new Error(`Element not found: ${selector}`)
    }
  }

  /**
   * コンポーネントマウント
   */
  mount(): void {
    this.render()
    this.setupEventListeners()
    this.onMount()
  }

  /**
   * コンポーネントアンマウント
   */
  unmount(): void {
    this.removeEventListeners()
    this.onUnmount()
  }

  /**
   * コンポーネント更新
   */
  update(data?: any): void {
    if (data) {
      this.state = { ...this.state, ...data }
    }
    this.render()
    this.onUpdate()
  }

  /**
   * イベントリスナー追加
   */
  protected addEventListener(
    element: EventTarget, 
    event: string, 
    handler: EventListener
  ): void {
    element.addEventListener(event, handler)
    this.eventListeners.push({ element, event, handler })
  }

  /**
   * イベントリスナー削除
   */
  private removeEventListeners(): void {
    this.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler)
    })
    this.eventListeners = []
  }

  /**
   * 子要素クエリ
   */
  protected querySelector(selector: string): HTMLElement | null {
    return this.element.querySelector(selector)
  }

  /**
   * 子要素クエリ（複数）
   */
  protected querySelectorAll(selector: string): NodeListOf<HTMLElement> {
    return this.element.querySelectorAll(selector)
  }

  /**
   * クラス追加
   */
  protected addClass(className: string): void {
    this.element.classList.add(className)
  }

  /**
   * クラス削除
   */
  protected removeClass(className: string): void {
    this.element.classList.remove(className)
  }

  /**
   * クラス切り替え
   */
  protected toggleClass(className: string): void {
    this.element.classList.toggle(className)
  }

  /**
   * 抽象メソッド - レンダリング
   */
  protected abstract render(): void

  /**
   * フック - マウント時
   */
  protected onMount(): void {}

  /**
   * フック - アンマウント時
   */
  protected onUnmount(): void {}

  /**
   * フック - 更新時
   */
  protected onUpdate(): void {}
}
