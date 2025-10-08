/**
 * アニメーション・ユーティリティ
 * 洗練されたマイクロインタラクション
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export class AnimationManager {
  private static instance: AnimationManager
  private timeline: gsap.core.Timeline

  constructor() {
    this.timeline = gsap.timeline()
  }

  static getInstance(): AnimationManager {
    if (!AnimationManager.instance) {
      AnimationManager.instance = new AnimationManager()
    }
    return AnimationManager.instance
  }

  /**
   * フェードインアニメーション
   */
  fadeIn(element: HTMLElement, duration: number = 0.6, delay: number = 0): gsap.core.Tween {
    return gsap.fromTo(element, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration, 
        delay,
        ease: "power2.out"
      }
    )
  }

  /**
   * スライドインアニメーション
   */
  slideIn(element: HTMLElement, direction: 'left' | 'right' | 'up' | 'down' = 'left'): gsap.core.Tween {
    const directions = {
      left: { x: -100, y: 0 },
      right: { x: 100, y: 0 },
      up: { x: 0, y: -100 },
      down: { x: 0, y: 100 }
    }

    return gsap.fromTo(element,
      { ...directions[direction], opacity: 0 },
      { 
        x: 0, 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "power3.out"
      }
    )
  }

  /**
   * スケールアニメーション
   */
  scaleIn(element: HTMLElement, scale: number = 0.8): gsap.core.Tween {
    return gsap.fromTo(element,
      { scale, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6,
        ease: "back.out(1.7)"
      }
    )
  }

  /**
   * ホバーアニメーション
   */
  hoverEffect(element: HTMLElement): void {
    gsap.set(element, { transformOrigin: "center center" })
    
    element.addEventListener('mouseenter', () => {
      gsap.to(element, { 
        scale: 1.05, 
        duration: 0.3,
        ease: "power2.out"
      })
    })
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, { 
        scale: 1, 
        duration: 0.3,
        ease: "power2.out"
      })
    })
  }

  /**
   * スクロールトリガーアニメーション
   */
  scrollTrigger(element: HTMLElement, animation: gsap.core.Tween): void {
    ScrollTrigger.create({
      trigger: element,
      start: "top 95%",
      end: "bottom 20%",
      animation: animation,
      toggleActions: "play none none reverse"
    })
  }

  /**
   * パララックス効果
   */
  parallax(element: HTMLElement, speed: number = 0.5): void {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  }

  /**
   * テキストタイプアニメーション
   */
  typeText(element: HTMLElement, text: string, speed: number = 50): gsap.core.Tween {
    element.textContent = ''
    const chars = text.split('')
    
    return gsap.to(chars, {
      duration: chars.length * (speed / 1000),
      ease: "none",
      onUpdate: function() {
        const progress = this.progress()
        const visibleChars = Math.floor(progress * chars.length)
        element.textContent = chars.slice(0, visibleChars).join('')
      }
    })
  }

  /**
   * ローディングアニメーション
   */
  loadingSpinner(element: HTMLElement): gsap.core.Timeline {
    const tl = gsap.timeline({ repeat: -1 })
    tl.to(element, { rotation: 360, duration: 1, ease: "none" })
    return tl
  }

  /**
   * ページトランジション
   */
  pageTransition(outElement: HTMLElement, inElement: HTMLElement): gsap.core.Timeline {
    const tl = gsap.timeline()
    
    tl.to(outElement, { 
      opacity: 0, 
      scale: 0.95, 
      duration: 0.3,
      ease: "power2.in"
    })
    .set(inElement, { opacity: 0, scale: 1.05 })
    .to(inElement, { 
      opacity: 1, 
      scale: 1, 
      duration: 0.4,
      ease: "power2.out"
    })
    
    return tl
  }

  /**
   * アニメーションクリーンアップ
   */
  cleanup(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    this.timeline.kill()
  }
}
