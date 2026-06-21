import type {
  Article,
  ArticlePayload,
  Category,
  CategoryPayload,
  HomepagePayload,
  SectionPreview,
} from '#types/article'
import { CATEGORIES, CATEGORY_LABELS } from '#types/article'
import { generateArticles } from '../data/generateArticles'
import { seedArticles } from '../data/articles.seed'

// ─── Initialize once at module load (server startup) ─────────────────────────

const _articles: Article[] = generateArticles(seedArticles)

// ─── Public accessors ─────────────────────────────────────────────────────────

export function getAllArticles(): Article[] {
  return _articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return _articles.find((a) => a.slug === slug)
}

export function getArticlesByCategory(category: Category): Article[] {
  return _articles
    .filter((a) => a.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getHomepagePayload(): HomepagePayload {
  const hero =
    _articles.find((a) => a.featured && a.category === 'culture') ??
    _articles.find((a) => a.featured) ??
    _articles[0]!

  // Ticker strip: one curated article per category (Figma copy)
  const tickerSlugs: Partial<Record<Category, string>> = {
    'world-news': 'social-movements-reshaping-world',
    technology: 'ai-robotics-latest-developments',
    health: 'tailoring-treatments-genetic-profiles',
    sports: 'celebrating-diversity-sports',
  }
  const ticker = (['world-news', 'technology', 'health', 'sports'] as Category[]).map((cat) => {
    const slug = tickerSlugs[cat]
    const found = slug ? getArticleBySlug(slug) : undefined
    return found ?? getArticlesByCategory(cat)[0] ?? hero
  })

  // Six most recently published articles (any category, excluding the hero)
  const latest = [..._articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter((a) => a.slug !== hero.slug)
    .slice(0, 6)

  // Section previews for homepage (World News, Technology, Podcasts)
  const sectionCategories: Category[] = ['world-news', 'technology', 'podcast']
  const sections: SectionPreview[] = sectionCategories.map((cat) => ({
    category: cat,
    label: CATEGORY_LABELS[cat],
    articles: getArticlesByCategory(cat).slice(0, 5),
  }))

  return { hero, ticker, latest, sections }
}

export function getCategoryPayload(category: Category): CategoryPayload {
  const sorted = getArticlesByCategory(category)
  const [featured, ...rest] = sorted

  return {
    category,
    label: CATEGORY_LABELS[category],
    featured: featured ?? _articles[0]!,
    articles: rest,
    total: sorted.length,
  }
}

export function getArticlePayload(slug: string): ArticlePayload | null {
  const article = getArticleBySlug(slug)
  if (!article) return null

  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== slug)
    .slice(0, 3)

  return { article, related }
}

// ─── Validate a slug is a known category ─────────────────────────────────────

export function isValidCategory(slug: string): slug is Category {
  return (CATEGORIES as string[]).includes(slug)
}
