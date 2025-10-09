/**
 * Works データ定義
 */

export interface WorkImage {
  url: string
  alt: string
  caption?: {
    ja: string
    en: string
  }
}

export interface WorkDetail {
  id: string
  title: {
    ja: string
    en: string
  }
  subtitle: {
    ja: string
    en: string
  }
  description: {
    ja: string
    en: string
  }
  detailedDescription: {
    ja: string[]
    en: string[]
  }
  images: WorkImage[]
  thumbnail: string
  tags: string[]
  duration: {
    ja: string
    en: string
  }
  role: {
    ja: string
    en: string
  }
  technologies: string[]
  features: {
    ja: string[]
    en: string[]
  }
  challenges: {
    ja: string[]
    en: string[]
  }
  outcome: {
    ja: string
    en: string
  }
  links?: {
    website?: string
    github?: string
    appStore?: string
    googlePlay?: string
  }
  year: number
  category: 'web' | 'mobile' | 'design' | 'other'
}

export const worksData: WorkDetail[] = [
  // クライアントワーク
  {
    id: 'rere',
    title: {
      ja: 'ReRe - 次世代コミュニケーションアプリの開発',
      en: 'ReRe - Developing Next-Generation Communication App'
    },
    subtitle: {
      ja: 'クライアントプロジェクト',
      en: 'Client Project'
    },
    description: {
      ja: 'ReReプロジェクトの開発',
      en: 'ReRe project development'
    },
    detailedDescription: {
      ja: [
        'ReReプロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of ReRe project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/rere-thumb.jpg',
    tags: ['Client Work', 'Mobile'],
    duration: {
      ja: '3ヶ月',
      en: '3 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React Native', 'TypeScript'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2024,
    category: 'mobile'
  },
  {
    id: 'chocotto-hoiku',
    title: {
      ja: 'ちょこっと保育 - 働くママを支える保育サービスアプリ',
      en: 'Chocotto Hoiku - Childcare Service App Supporting Working Mothers'
    },
    subtitle: {
      ja: '保育サービスアプリ',
      en: 'Childcare Service App'
    },
    description: {
      ja: 'ちょこっと保育アプリの開発',
      en: 'Chocotto Hoiku app development'
    },
    detailedDescription: {
      ja: [
        'ちょこっと保育プロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of Chocotto Hoiku project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/chocotto-thumb.jpg',
    tags: ['Client Work', 'Mobile', 'Childcare'],
    duration: {
      ja: '4ヶ月',
      en: '4 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2024,
    category: 'mobile'
  },
  {
    id: 'seiri-kanri',
    title: {
      ja: '生理管理アプリ - 女性の健康をサポートするデジタルヘルスケア',
      en: 'Period Tracking App - Digital Healthcare Supporting Women\'s Health'
    },
    subtitle: {
      ja: '女性の健康管理',
      en: 'Women\'s Health Management'
    },
    description: {
      ja: '生理管理アプリの開発',
      en: 'Period tracking app development'
    },
    detailedDescription: {
      ja: [
        '生理管理アプリの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of period tracking app will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/seiri-thumb.jpg',
    tags: ['Client Work', 'Mobile', 'Healthcare'],
    duration: {
      ja: '3ヶ月',
      en: '3 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React Native', 'TypeScript'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2023,
    category: 'mobile'
  },
  {
    id: 'ctd',
    title: {
      ja: 'CTD - 企業向けデジタルソリューションの構築',
      en: 'CTD - Building Corporate Digital Solutions'
    },
    subtitle: {
      ja: 'クライアントプロジェクト',
      en: 'Client Project'
    },
    description: {
      ja: 'CTDプロジェクトの開発',
      en: 'CTD project development'
    },
    detailedDescription: {
      ja: [
        'CTDプロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of CTD project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/ctd-thumb.jpg',
    tags: ['Client Work', 'Web'],
    duration: {
      ja: '2ヶ月',
      en: '2 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React', 'TypeScript'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2023,
    category: 'web'
  },
  {
    id: 'landest-nittetsu',
    title: {
      ja: 'ランデスト日鉄 - 不動産プラットフォームの革新',
      en: 'Landest Nittetsu - Innovating Real Estate Platform'
    },
    subtitle: {
      ja: '不動産プラットフォーム',
      en: 'Real Estate Platform'
    },
    description: {
      ja: 'ランデスト日鉄プロジェクトの開発',
      en: 'Landest Nittetsu project development'
    },
    detailedDescription: {
      ja: [
        'ランデスト日鉄プロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of Landest Nittetsu project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/landest-thumb.jpg',
    tags: ['Client Work', 'Web', 'Real Estate'],
    duration: {
      ja: '5ヶ月',
      en: '5 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React', 'Next.js', 'TypeScript'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2023,
    category: 'web'
  },
  {
    id: 'saunakama',
    title: {
      ja: 'サウナカマ - サウナ愛好家のコミュニティアプリ',
      en: 'Saunakama - Community App for Sauna Enthusiasts'
    },
    subtitle: {
      ja: 'サウナコミュニティアプリ',
      en: 'Sauna Community App'
    },
    description: {
      ja: 'サウナカマアプリの開発',
      en: 'Saunakama app development'
    },
    detailedDescription: {
      ja: [
        'サウナカマプロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of Saunakama project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/saunakama-thumb.jpg',
    tags: ['Client Work', 'Mobile', 'Community'],
    duration: {
      ja: '3ヶ月',
      en: '3 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2024,
    category: 'mobile'
  },
  {
    id: 'miimai',
    title: {
      ja: 'ミイマイ - 新しい出会いを創造するマッチングアプリ',
      en: 'Miimai - Matching App Creating New Connections'
    },
    subtitle: {
      ja: 'クライアントプロジェクト',
      en: 'Client Project'
    },
    description: {
      ja: 'ミイマイプロジェクトの開発',
      en: 'Miimai project development'
    },
    detailedDescription: {
      ja: [
        'ミイマイプロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of Miimai project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/miimai-thumb.jpg',
    tags: ['Client Work', 'Mobile'],
    duration: {
      ja: '2ヶ月',
      en: '2 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React Native', 'TypeScript'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2024,
    category: 'mobile'
  },
  {
    id: 'tanpopo-gakken',
    title: {
      ja: 'たんぽぽ学研 - 教育の未来を変えるデジタルプラットフォーム',
      en: 'Tanpopo Gakken - Digital Platform Transforming Education'
    },
    subtitle: {
      ja: '教育プラットフォーム',
      en: 'Education Platform'
    },
    description: {
      ja: 'たんぽぽ学研プロジェクトの開発',
      en: 'Tanpopo Gakken project development'
    },
    detailedDescription: {
      ja: [
        'たんぽぽ学研プロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of Tanpopo Gakken project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/tanpopo-thumb.jpg',
    tags: ['Client Work', 'Mobile', 'Education'],
    duration: {
      ja: '4ヶ月',
      en: '4 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React Native', 'TypeScript'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2023,
    category: 'mobile'
  },
  {
    id: 'adalo',
    title: {
      ja: 'Adalo - ノーコードで実現するアプリ開発の可能性',
      en: 'Adalo - Exploring App Development Possibilities with No-Code'
    },
    subtitle: {
      ja: 'ノーコード開発プロジェクト',
      en: 'No-code Development Project'
    },
    description: {
      ja: 'Adaloを使用したプロジェクト開発',
      en: 'Project development using Adalo'
    },
    detailedDescription: {
      ja: [
        'Adaloプロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of Adalo project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/adalo-thumb.jpg',
    tags: ['Client Work', 'No-code', 'Mobile'],
    duration: {
      ja: '2ヶ月',
      en: '2 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['Adalo'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2023,
    category: 'mobile'
  },
  {
    id: 'avenon',
    title: {
      ja: 'Avenon株式会社 - 企業のデジタル変革を支援するソリューション',
      en: 'Avenon Corporation - Solutions Supporting Corporate Digital Transformation'
    },
    subtitle: {
      ja: '企業プロジェクト',
      en: 'Corporate Project'
    },
    description: {
      ja: 'Avenon株式会社のプロジェクト開発',
      en: 'Avenon Corporation project development'
    },
    detailedDescription: {
      ja: [
        'Avenon株式会社プロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of Avenon Corporation project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/avenon-thumb.jpg',
    tags: ['Client Work', 'Web'],
    duration: {
      ja: '3ヶ月',
      en: '3 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React', 'TypeScript'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2024,
    category: 'web'
  },
  {
    id: 'airamp-japan',
    title: {
      ja: 'airamp Japan - グローバル展開を支援するWebプラットフォーム',
      en: 'airamp Japan - Web Platform Supporting Global Expansion'
    },
    subtitle: {
      ja: 'クライアントプロジェクト',
      en: 'Client Project'
    },
    description: {
      ja: 'airamp Japanプロジェクトの開発',
      en: 'airamp Japan project development'
    },
    detailedDescription: {
      ja: [
        'airamp Japanプロジェクトの詳細説明がここに入ります。',
      ],
      en: [
        'Detailed description of airamp Japan project will be here.',
      ]
    },
    images: [],
    thumbnail: '/works/airamp-thumb.jpg',
    tags: ['Client Work', 'Web'],
    duration: {
      ja: '4ヶ月',
      en: '4 months'
    },
    role: {
      ja: 'アプリエンジニア & UI/UXデザイナー',
      en: 'App Engineer & UI/UX Designer'
    },
    technologies: ['React', 'Next.js', 'TypeScript'],
    features: {
      ja: [],
      en: []
    },
    challenges: {
      ja: [],
      en: []
    },
    outcome: {
      ja: '成功裏にリリース',
      en: 'Successfully released'
    },
    year: 2024,
    category: 'web'
  },

  // サンプルプロジェクト（削除または後で更新可能）
  {
    id: 'ecommerce-platform',
    title: {
      ja: 'Eコマースプラットフォーム',
      en: 'E-Commerce Platform'
    },
    subtitle: {
      ja: '次世代のオンラインショッピング体験',
      en: 'Next-generation online shopping experience'
    },
    description: {
      ja: 'モダンなECサイトの構築。React + Next.jsで高速なショッピング体験を実現。',
      en: 'Building a modern e-commerce site. Achieving a fast shopping experience with React + Next.js.'
    },
    detailedDescription: {
      ja: [
        '大手小売企業向けに開発した次世代Eコマースプラットフォーム。ユーザー体験を最優先に、直感的な操作性と高速なページ遷移を実現しました。',
        'サーバーサイドレンダリングとインクリメンタル静的再生成を活用し、SEOとパフォーマンスの両立を達成。',
        'マイクロフロントエンド アーキテクチャを採用し、チーム間の独立した開発を可能にしました。'
      ],
      en: [
        'Next-generation e-commerce platform developed for a major retail company. Prioritizing user experience, we achieved intuitive operation and fast page transitions.',
        'Achieved both SEO and performance by leveraging server-side rendering and incremental static regeneration.',
        'Adopted micro-frontend architecture to enable independent development between teams.'
      ]
    },
    images: [
      {
        url: '/works/ecommerce-01.jpg',
        alt: 'Ecommerce homepage',
        caption: {
          ja: 'トップページ - ヒーローセクションと注目商品',
          en: 'Homepage - Hero section and featured products'
        }
      },
      {
        url: '/works/ecommerce-02.jpg',
        alt: 'Product detail page',
        caption: {
          ja: '商品詳細ページ - インタラクティブな画像ギャラリー',
          en: 'Product detail page - Interactive image gallery'
        }
      },
      {
        url: '/works/ecommerce-03.jpg',
        alt: 'Shopping cart',
        caption: {
          ja: 'ショッピングカート - リアルタイム計算',
          en: 'Shopping cart - Real-time calculation'
        }
      }
    ],
    thumbnail: '/works/ecommerce-thumb.jpg',
    tags: ['Web', 'E-Commerce', 'Frontend'],
    duration: {
      ja: '6ヶ月',
      en: '6 months'
    },
    role: {
      ja: 'フロントエンドリード & UI/UXデザイナー',
      en: 'Frontend Lead & UI/UX Designer'
    },
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Stripe',
      'Vercel'
    ],
    features: {
      ja: [
        'リアルタイム在庫管理',
        'パーソナライズされた商品推薦',
        'ワンクリックチェックアウト',
        'マルチ決済対応（クレジットカード、電子マネー、後払い）',
        'レスポンシブデザイン対応',
        'PWA対応でオフライン閲覧可能'
      ],
      en: [
        'Real-time inventory management',
        'Personalized product recommendations',
        'One-click checkout',
        'Multiple payment methods (credit card, e-money, deferred payment)',
        'Responsive design',
        'PWA support for offline browsing'
      ]
    },
    challenges: {
      ja: [
        '大規模な商品データベース（10万点以上）の高速検索実装',
        'ピークタイム時の同時アクセス処理（10,000+ concurrent users）',
        'レガシーシステムとの統合',
        'A/Bテストによる継続的なUX改善'
      ],
      en: [
        'High-speed search implementation for large product database (100,000+ items)',
        'Concurrent access handling during peak times (10,000+ concurrent users)',
        'Integration with legacy systems',
        'Continuous UX improvement through A/B testing'
      ]
    },
    outcome: {
      ja: 'ローンチ後3ヶ月でコンバージョン率が45%向上、ページ読み込み速度が60%改善しました。',
      en: 'Conversion rate improved by 45% and page load speed improved by 60% within 3 months after launch.'
    },
    links: {
      website: 'https://example.com',
      github: 'https://github.com/example/ecommerce'
    },
    year: 2024,
    category: 'web'
  },
  {
    id: 'task-management-app',
    title: {
      ja: 'タスク管理アプリ',
      en: 'Task Management App'
    },
    subtitle: {
      ja: 'チームの生産性を最大化するツール',
      en: 'Tool to maximize team productivity'
    },
    description: {
      ja: 'チーム向けタスク管理アプリ。直感的なUIと豊富な機能で生産性を向上。',
      en: 'Task management app for teams. Improving productivity with intuitive UI and rich features.'
    },
    detailedDescription: {
      ja: [
        'リモートワークが増える中、チームのコラボレーションを円滑にするタスク管理アプリを開発。',
        'ドラッグ&ドロップでタスクを直感的に管理でき、リアルタイム同期により全メンバーが常に最新の状態を共有。',
        'ガントチャート、カンバンボード、リストビューなど、チームに合わせた表示方法を選択可能。'
      ],
      en: [
        'Developed a task management app to facilitate team collaboration as remote work increases.',
        'Tasks can be managed intuitively with drag & drop, and real-time sync ensures all members share the latest status.',
        'Choose display methods that suit your team, such as Gantt charts, Kanban boards, and list views.'
      ]
    },
    images: [
      {
        url: '/works/task-01.jpg',
        alt: 'Task dashboard',
        caption: {
          ja: 'ダッシュボード - プロジェクト全体の進捗を一目で確認',
          en: 'Dashboard - View overall project progress at a glance'
        }
      },
      {
        url: '/works/task-02.jpg',
        alt: 'Kanban board',
        caption: {
          ja: 'カンバンボード - ドラッグ&ドロップでタスク管理',
          en: 'Kanban board - Task management with drag & drop'
        }
      }
    ],
    thumbnail: '/works/task-thumb.jpg',
    tags: ['Mobile', 'Productivity', 'SaaS'],
    duration: {
      ja: '4ヶ月',
      en: '4 months'
    },
    role: {
      ja: 'フルスタック開発 & UI/UXデザイナー',
      en: 'Full-stack Development & UI/UX Designer'
    },
    technologies: [
      'React Native',
      'TypeScript',
      'Firebase',
      'Redux',
      'Figma'
    ],
    features: {
      ja: [
        'リアルタイムコラボレーション',
        'タスクの優先度設定と締切管理',
        'プロジェクト別タスク整理',
        'ファイル添付とコメント機能',
        'プッシュ通知',
        'ダークモード対応'
      ],
      en: [
        'Real-time collaboration',
        'Task priority and deadline management',
        'Task organization by project',
        'File attachment and comment features',
        'Push notifications',
        'Dark mode support'
      ]
    },
    challenges: {
      ja: [
        'オフライン時のデータ同期とコンフリクト解決',
        'リアルタイム通信の最適化',
        '大量のタスクデータの効率的な表示',
        'クロスプラットフォーム対応（iOS/Android）'
      ],
      en: [
        'Data sync and conflict resolution during offline',
        'Real-time communication optimization',
        'Efficient display of large amounts of task data',
        'Cross-platform support (iOS/Android)'
      ]
    },
    outcome: {
      ja: 'App StoreとGoogle Playで平均評価4.8を獲得、10,000+ダウンロードを達成しました。',
      en: 'Achieved an average rating of 4.8 on App Store and Google Play, with 10,000+ downloads.'
    },
    links: {
      appStore: 'https://apps.apple.com/example',
      googlePlay: 'https://play.google.com/example',
      github: 'https://github.com/example/task-app'
    },
    year: 2023,
    category: 'mobile'
  },
  {
    id: 'portfolio-website',
    title: {
      ja: 'ポートフォリオウェブサイト',
      en: 'Portfolio Website'
    },
    subtitle: {
      ja: 'クリエイターの個性を引き出すデザイン',
      en: 'Design that brings out the individuality of creators'
    },
    description: {
      ja: 'クリエイター向けポートフォリオサイト。作品を美しく魅せるデザイン。',
      en: 'Portfolio site for creators. Design that beautifully showcases work.'
    },
    detailedDescription: {
      ja: [
        'フォトグラファー向けのポートフォリオウェブサイト。作品を最も美しく見せることにフォーカスし、ミニマルで洗練されたデザインを実現。',
        'ページ遷移やスクロールアニメーションにこだわり、訪問者に印象的な体験を提供。',
        'CMSと連携し、クライアント自身で簡単に作品を追加・更新できる仕組みを構築。'
      ],
      en: [
        'Portfolio website for photographers. Focused on showcasing work in the most beautiful way, achieving a minimal and sophisticated design.',
        'Paid attention to page transitions and scroll animations to provide visitors with an impressive experience.',
        'Built a system that allows clients to easily add and update their work themselves by integrating with CMS.'
      ]
    },
    images: [
      {
        url: '/works/portfolio-01.jpg',
        alt: 'Portfolio homepage',
        caption: {
          ja: 'トップページ - フルスクリーンイメージギャラリー',
          en: 'Homepage - Full-screen image gallery'
        }
      }
    ],
    thumbnail: '/works/portfolio-thumb.jpg',
    tags: ['Web', 'Design', 'Portfolio'],
    duration: {
      ja: '3ヶ月',
      en: '3 months'
    },
    role: {
      ja: 'UI/UXデザイナー & フロントエンド開発',
      en: 'UI/UX Designer & Frontend Development'
    },
    technologies: [
      'Vue.js',
      'Nuxt.js',
      'GSAP',
      'Contentful',
      'Tailwind CSS'
    ],
    features: {
      ja: [
        'フルスクリーンイメージギャラリー',
        'スムーズなページ遷移アニメーション',
        'レスポンシブ対応',
        'CMSによる簡単な作品管理',
        'お問い合わせフォーム',
        'SEO最適化'
      ],
      en: [
        'Full-screen image gallery',
        'Smooth page transition animations',
        'Responsive design',
        'Easy work management with CMS',
        'Contact form',
        'SEO optimization'
      ]
    },
    challenges: {
      ja: [
        '高解像度画像の最適化と高速読み込み',
        'アニメーションのパフォーマンス最適化',
        '多様なデバイスでの一貫した表示',
        'CMSとのスムーズな統合'
      ],
      en: [
        'High-resolution image optimization and fast loading',
        'Animation performance optimization',
        'Consistent display across various devices',
        'Smooth integration with CMS'
      ]
    },
    outcome: {
      ja: 'クライアントの新規案件獲得率が30%向上し、ウェブサイト経由の問い合わせが3倍に増加しました。',
      en: 'Client\'s new project acquisition rate improved by 30%, and inquiries via the website tripled.'
    },
    links: {
      website: 'https://example-portfolio.com'
    },
    year: 2023,
    category: 'web'
  }
]

export function getWorkById(id: string): WorkDetail | undefined {
  return worksData.find(work => work.id === id)
}

export function getWorksByCategory(category: WorkDetail['category']): WorkDetail[] {
  return worksData.filter(work => work.category === category)
}

export function getRelatedWorks(currentWorkId: string, limit: number = 3): WorkDetail[] {
  const currentWork = getWorkById(currentWorkId)
  if (!currentWork) return []
  
  return worksData
    .filter(work => 
      work.id !== currentWorkId && 
      (work.category === currentWork.category || 
       work.tags.some(tag => currentWork.tags.includes(tag)))
    )
    .slice(0, limit)
}

/**
 * 時系列順（新しい順）でWorksを取得
 */
export function getWorksByChronological(ascending: boolean = false): WorkDetail[] {
  const sorted = [...worksData].sort((a, b) => {
    if (a.year !== b.year) {
      return ascending ? a.year - b.year : b.year - a.year
    }
    // 同じ年の場合はIDで安定ソート
    return a.id.localeCompare(b.id)
  })
  return sorted
}

/**
 * タグでWorksをフィルター
 */
export function getWorksByTag(tag: string): WorkDetail[] {
  return worksData.filter(work => work.tags.includes(tag))
}

/**
 * クライアントワークのみを取得
 */
export function getClientWorks(): WorkDetail[] {
  return worksData.filter(work => work.tags.includes('Client Work'))
}

/**
 * すべてのユニークなタグを取得
 */
export function getAllTags(): string[] {
  const tags = new Set<string>()
  worksData.forEach(work => {
    work.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

