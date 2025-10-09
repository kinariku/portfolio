/**
 * microCMS クライアント
 */

import { createClient, MicroCMSQueries } from 'microcms-js-sdk'

// microCMS APIの型定義
export interface MicroCMSWork {
  id: string
  title: string
  titleEn: string
  subtitle: string
  subtitleEn: string
  description: string
  descriptionEn: string
  detailedDescription: string[]
  detailedDescriptionEn: string[]
  thumbnail?: {
    url: string
    width: number
    height: number
  }
  images?: {
    url: string
    width: number
    height: number
    alt?: string
    caption?: string
    captionEn?: string
  }[]
  tags: string[]
  duration: string
  durationEn: string
  role: string
  roleEn: string
  technologies: string[]
  features: string[]
  featuresEn: string[]
  challenges: string[]
  challengesEn: string[]
  outcome: string
  outcomeEn: string
  websiteUrl?: string
  githubUrl?: string
  appStoreUrl?: string
  googlePlayUrl?: string
  year: number
  category: 'web' | 'mobile' | 'design' | 'other'
  featured?: boolean
  publishedAt?: string
  createdAt: string
  updatedAt: string
}

// クライアントの初期化（環境変数がない場合はnull）
const client = (import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN && import.meta.env.VITE_MICROCMS_API_KEY)
  ? createClient({
      serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
      apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
    })
  : null

/**
 * すべてのWorksを取得
 */
export async function getWorks(queries?: MicroCMSQueries): Promise<{
  contents: MicroCMSWork[]
  totalCount: number
  offset: number
  limit: number
}> {
  if (!client) {
    throw new Error('microCMS client is not initialized. Please set VITE_MICROCMS_SERVICE_DOMAIN and VITE_MICROCMS_API_KEY in .env file.')
  }
  
  try {
    const response = await client.get({
      endpoint: 'works',
      queries: queries,
    })
    return response
  } catch (error) {
    console.error('Error fetching works:', error)
    throw error
  }
}

/**
 * 特定のWorkを取得
 */
export async function getWorkById(contentId: string): Promise<MicroCMSWork> {
  if (!client) {
    throw new Error('microCMS client is not initialized. Please set VITE_MICROCMS_SERVICE_DOMAIN and VITE_MICROCMS_API_KEY in .env file.')
  }
  
  try {
    const response = await client.get({
      endpoint: 'works',
      contentId: contentId,
    })
    return response
  } catch (error) {
    console.error(`Error fetching work with id ${contentId}:`, error)
    throw error
  }
}

/**
 * Featured Worksを取得
 */
export async function getFeaturedWorks(limit: number = 3): Promise<MicroCMSWork[]> {
  if (!client) {
    throw new Error('microCMS client is not initialized.')
  }
  
  try {
    const response = await client.get({
      endpoint: 'works',
      queries: {
        filters: 'featured[equals]true',
        limit: limit,
        orders: '-publishedAt',
      },
    })
    return response.contents
  } catch (error) {
    console.error('Error fetching featured works:', error)
    throw error
  }
}

/**
 * タグでWorksをフィルター
 */
export async function getWorksByTag(tag: string): Promise<MicroCMSWork[]> {
  if (!client) {
    throw new Error('microCMS client is not initialized.')
  }
  
  try {
    const response = await client.get({
      endpoint: 'works',
      queries: {
        filters: `tags[contains]${tag}`,
        orders: '-year',
      },
    })
    return response.contents
  } catch (error) {
    console.error(`Error fetching works with tag ${tag}:`, error)
    throw error
  }
}

/**
 * カテゴリでWorksをフィルター
 */
export async function getWorksByCategory(category: string): Promise<MicroCMSWork[]> {
  if (!client) {
    throw new Error('microCMS client is not initialized.')
  }
  
  try {
    const response = await client.get({
      endpoint: 'works',
      queries: {
        filters: `category[equals]${category}`,
        orders: '-year',
      },
    })
    return response.contents
  } catch (error) {
    console.error(`Error fetching works with category ${category}:`, error)
    throw error
  }
}

/**
 * microCMSのWorkをローカルのWorkDetail型に変換
 */
export function convertMicroCMSWorkToWorkDetail(work: MicroCMSWork) {
  return {
    id: work.id,
    title: {
      ja: work.title,
      en: work.titleEn || work.title,
    },
    subtitle: {
      ja: work.subtitle,
      en: work.subtitleEn || work.subtitle,
    },
    description: {
      ja: work.description,
      en: work.descriptionEn || work.description,
    },
    detailedDescription: {
      ja: work.detailedDescription,
      en: work.detailedDescriptionEn || work.detailedDescription,
    },
    images: work.images?.map(img => ({
      url: img.url,
      alt: img.alt || work.title,
      caption: img.caption ? {
        ja: img.caption,
        en: img.captionEn || img.caption,
      } : undefined,
    })) || [],
    thumbnail: work.thumbnail?.url || '/works/default-thumb.jpg',
    tags: work.tags,
    duration: {
      ja: work.duration,
      en: work.durationEn || work.duration,
    },
    role: {
      ja: work.role,
      en: work.roleEn || work.role,
    },
    technologies: work.technologies,
    features: {
      ja: work.features,
      en: work.featuresEn || work.features,
    },
    challenges: {
      ja: work.challenges,
      en: work.challengesEn || work.challenges,
    },
    outcome: {
      ja: work.outcome,
      en: work.outcomeEn || work.outcome,
    },
    links: {
      website: work.websiteUrl,
      github: work.githubUrl,
      appStore: work.appStoreUrl,
      googlePlay: work.googlePlayUrl,
    },
    year: work.year,
    category: work.category,
  }
}

