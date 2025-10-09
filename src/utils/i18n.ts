/**
 * 多言語対応システム (i18n)
 * 日本語と英語の切り替えをサポート
 */

export type Language = 'ja' | 'en'

export interface Translations {
  [key: string]: {
    ja: string
    en: string
  }
}

export const translations: Translations = {
  // Navigation
  'nav.home': {
    ja: 'Home',
    en: 'Home'
  },
  'nav.about': {
    ja: 'About',
    en: 'About'
  },
  'nav.works': {
    ja: 'Works',
    en: 'Works'
  },
  'nav.blog': {
    ja: 'Blog',
    en: 'Blog'
  },
  'nav.contact': {
    ja: 'Contact',
    en: 'Contact'
  },

  // Hero Section
  'hero.greeting': {
    ja: 'こんにちは、',
    en: 'Hello, I\'m'
  },
  'hero.name': {
    ja: 'Kinari Kuramoto',
    en: 'Kinari Kuramoto'
  },
  'hero.subtitle': {
    ja: 'アプリエンジニア & UI/UXデザイナー',
    en: 'App Engineer & UI/UX Designer'
  },
  'hero.description': {
    ja: 'アイデアを形にする。\nシンプルで洗練されたデジタル体験を創造します。',
    en: 'Bringing ideas to life.\nCreating simple and sophisticated digital experiences.'
  },
  'hero.cta.works': {
    ja: '作品を見る',
    en: 'View Works'
  },
  'hero.cta.contact': {
    ja: 'お問い合わせ',
    en: 'Contact Me'
  },
  'hero.scroll': {
    ja: 'スクロール',
    en: 'Scroll'
  },

  // About Section
  'about.number': {
    ja: '01',
    en: '01'
  },
  'about.title': {
    ja: 'About',
    en: 'About'
  },
  'about.lead': {
    ja: 'フリーランスのエンジニアとして働きながら個人開発をしています。',
    en: 'Working as a freelance engineer while developing personal projects.'
  },
  'about.description1': {
    ja: 'デザインとコードの両方を扱い、アイデアを形にすることが好きです。ユーザー体験を第一に考え、シンプルで美しく、使いやすいプロダクトを目指しています。',
    en: 'I work with both design and code, and I love bringing ideas to life. I prioritize user experience and aim to create simple, beautiful, and user-friendly products.'
  },
  'about.description2': {
    ja: '日々の実験や試行錯誤を通じて、新しいツールやサービスを試し、小さなアイデアを形にしながら、より良いものづくりを追求しています。',
    en: 'Through daily experimentation and trial and error, I try new tools and services, shape small ideas, and pursue better craftsmanship.'
  },
  'about.location': {
    ja: 'オーストラリア・ブリスベン',
    en: 'Brisbane, Australia'
  },
  'about.stats.experience': {
    ja: '年の経験',
    en: 'Years Experience'
  },
  'about.stats.projects': {
    ja: '完了プロジェクト',
    en: 'Projects Completed'
  },
  'about.stats.clients': {
    ja: '満足いただいたクライアント',
    en: 'Happy Clients'
  },
  'about.career.university': {
    ja: '2018',
    en: '2018'
  },
  'about.career.universityName': {
    ja: '法政大学入学',
    en: 'Entered Hosei University'
  },
  'about.career.freelance': {
    ja: '2019',
    en: '2019'
  },
  'about.career.freelanceStart': {
    ja: 'フリーランス活動開始',
    en: 'Started freelancing'
  },
  'about.career.graduation': {
    ja: '2022',
    en: '2022'
  },
  'about.career.graduationName': {
    ja: '法政大学卒業',
    en: 'Graduated from Hosei University'
  },
  'about.career.australia': {
    ja: '2025',
    en: '2025'
  },
  'about.career.australiaMove': {
    ja: 'オーストラリアに移住',
    en: 'Moved to Australia'
  },

  // Skills Section
  'skills.number': {
    ja: '02',
    en: '02'
  },
  'skills.title': {
    ja: 'Skills',
    en: 'Skills'
  },
  'skills.development': {
    ja: '開発',
    en: 'Development'
  },
  'skills.design': {
    ja: 'デザイン',
    en: 'Design'
  },
  'skills.tools': {
    ja: 'ツール',
    en: 'Tools'
  },
  'skills.level.expert': {
    ja: 'エキスパート',
    en: 'Expert'
  },
  'skills.level.advanced': {
    ja: '上級',
    en: 'Advanced'
  },
  'skills.level.intermediate': {
    ja: '中級',
    en: 'Intermediate'
  },

  // Works Section
  'works.number': {
    ja: '03',
    en: '03'
  },
  'works.title': {
    ja: 'Works',
    en: 'Works'
  },
  'works.featured': {
    ja: 'Featured Projects',
    en: 'Featured Projects'
  },
  'works.viewAll': {
    ja: 'すべての作品を見る',
    en: 'View All Works'
  },
  'works.allWorks': {
    ja: 'All Works',
    en: 'All Works'
  },
  'works.allWorksDescription': {
    ja: 'これまでに携わったプロジェクトの一覧です。',
    en: 'A list of all projects I have worked on.'
  },
  'works.backToHome': {
    ja: 'ホームに戻る',
    en: 'Back to Home'
  },
  'works.filterBy': {
    ja: 'フィルター:',
    en: 'Filter by:'
  },
  'works.sortBy': {
    ja: '並び替え:',
    en: 'Sort by:'
  },
  'works.sortNewest': {
    ja: '新しい順',
    en: 'Newest First'
  },
  'works.sortOldest': {
    ja: '古い順',
    en: 'Oldest First'
  },
  'works.noResults': {
    ja: '条件に一致する作品が見つかりませんでした。',
    en: 'No works found matching your criteria.'
  },

  // Blog Section
  'blog.number': {
    ja: '04',
    en: '04'
  },
  'blog.title': {
    ja: 'Blog',
    en: 'Blog'
  },
  'blog.description': {
    ja: 'それぞれの場所で、異なるテーマについて綴っています。',
    en: 'Writing about different themes in different places.'
  },
  'blog.personal.title': {
    ja: '個人ブログ',
    en: 'Personal Blog'
  },
  'blog.personal.description': {
    ja: '技術的な実験や試行錯誤、開発の記録を残しています。',
    en: 'Technical experiments, trial and error, and development records.'
  },
  'blog.note.title': {
    ja: 'note',
    en: 'note'
  },
  'blog.note.description': {
    ja: 'デザインや考え方、日々の気づきをエッセイ形式で。',
    en: 'Design, thoughts, and daily insights in essay format.'
  },
  'blog.sizume.title': {
    ja: 'しずかなインターネット',
    en: 'しずかなインターネット'
  },
  'blog.sizume.description': {
    ja: 'ゆっくりと、静かに。思索や内省的な文章を。',
    en: 'Slowly and quietly. Contemplative and introspective writings.'
  },
  'blog.visit': {
    ja: '訪れる →',
    en: 'Visit →'
  },

  // Contact Section
  'contact.number': {
    ja: '05',
    en: '05'
  },
  'contact.title': {
    ja: 'Contact',
    en: 'Contact'
  },
  'contact.heading': {
    ja: 'Let\'s work together',
    en: 'Let\'s work together'
  },
  'contact.description': {
    ja: 'プロジェクトのご相談、お仕事のご依頼など、\nお気軽にお問い合わせください。',
    en: 'Feel free to contact me for project consultations,\nwork requests, or any inquiries.'
  },
  'contact.email.label': {
    ja: 'Email',
    en: 'Email'
  },
  'contact.twitter.label': {
    ja: 'X (Twitter)',
    en: 'X (Twitter)'
  },
  'contact.github.label': {
    ja: 'GitHub',
    en: 'GitHub'
  },
  'contact.note.label': {
    ja: 'note',
    en: 'note'
  },

  // Footer
  'footer.copyright': {
    ja: '© 2025 Kinari Kuramoto. All rights reserved.',
    en: '© 2025 Kinari Kuramoto. All rights reserved.'
  },
  'footer.tagline': {
    ja: 'Built with passion and attention to detail.',
    en: 'Built with passion and attention to detail.'
  },

  // Work Detail Page
  'work.back': {
    ja: '作品一覧に戻る',
    en: 'Back to Works'
  },
  'work.role': {
    ja: '役割',
    en: 'Role'
  },
  'work.duration': {
    ja: '期間',
    en: 'Duration'
  },
  'work.tech': {
    ja: '技術スタック',
    en: 'Technologies'
  },
  'work.overview': {
    ja: '概要',
    en: 'Overview'
  },
  'work.features': {
    ja: '主な機能',
    en: 'Key Features'
  },
  'work.challenges': {
    ja: '課題と解決',
    en: 'Challenges'
  },
  'work.outcome': {
    ja: '成果',
    en: 'Outcome'
  },
  'work.visit': {
    ja: 'ウェブサイトを見る',
    en: 'Visit Website'
  },
  'work.related': {
    ja: '関連する作品',
    en: 'Related Works'
  }
}

export class I18nManager {
  private static instance: I18nManager
  private currentLanguage: Language = 'ja'
  private listeners: Set<(lang: Language) => void> = new Set()

  private constructor() {
    // ローカルストレージから言語設定を読み込み
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'ja' || savedLang === 'en')) {
      this.currentLanguage = savedLang
    } else {
      // ブラウザの言語設定を確認
      const browserLang = navigator.language.toLowerCase()
      this.currentLanguage = browserLang.startsWith('ja') ? 'ja' : 'en'
    }
  }

  public static getInstance(): I18nManager {
    if (!I18nManager.instance) {
      I18nManager.instance = new I18nManager()
    }
    return I18nManager.instance
  }

  public getCurrentLanguage(): Language {
    return this.currentLanguage
  }

  public setLanguage(lang: Language): void {
    if (lang !== this.currentLanguage) {
      this.currentLanguage = lang
      localStorage.setItem('language', lang)
      this.notifyListeners()
      this.updateDocumentLanguage()
    }
  }

  public toggleLanguage(): void {
    const newLang: Language = this.currentLanguage === 'ja' ? 'en' : 'ja'
    this.setLanguage(newLang)
  }

  public translate(key: string): string {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translation[this.currentLanguage]
  }

  public t(key: string): string {
    return this.translate(key)
  }

  public addListener(callback: (lang: Language) => void): void {
    this.listeners.add(callback)
  }

  public removeListener(callback: (lang: Language) => void): void {
    this.listeners.delete(callback)
  }

  private notifyListeners(): void {
    this.listeners.forEach(callback => callback(this.currentLanguage))
  }

  private updateDocumentLanguage(): void {
    document.documentElement.lang = this.currentLanguage
  }

  public initialize(): void {
    this.updateDocumentLanguage()
  }
}