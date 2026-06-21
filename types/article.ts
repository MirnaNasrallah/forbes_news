export type Category =
  | 'world-news'
  | 'politics'
  | 'business'
  | 'technology'
  | 'health'
  | 'sports'
  | 'culture'
  | 'podcast'

export const CATEGORY_LABELS: Record<Category, string> = {
  'world-news': 'World News',
  politics: 'Politics',
  business: 'Business',
  technology: 'Technology',
  health: 'Health',
  sports: 'Sports',
  culture: 'Culture',
  podcast: 'Podcast',
}

export const CATEGORIES: Category[] = [
  'world-news',
  'politics',
  'business',
  'technology',
  'health',
  'sports',
  'culture',
  'podcast',
]

export interface Author {
  name: string
  slug: string
  title: string
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string
  category: Category
  tags: string[]
  author: Author
  publishedAt: string
  thumbnail: string
  readingTime: number
  featured?: boolean
}

export interface SectionPreview {
  category: Category
  label: string
  articles: Article[]
}

export interface HomepagePayload {
  hero: Article
  ticker: Article[]
  latest: Article[]
  sections: SectionPreview[]
}

export interface CategoryPayload {
  category: Category
  label: string
  featured: Article
  articles: Article[]
  total: number
}

export interface ArticlePayload {
  article: Article
  related: Article[]
}
