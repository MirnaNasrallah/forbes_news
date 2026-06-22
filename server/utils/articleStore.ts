import type {
  Article,
  ArticlePayload,
  Category,
  CategoryPayload,
  HomepagePayload,
  SectionPreview,
} from '#types/article'
import { CATEGORIES, CATEGORY_LABELS } from '#types/article'
import { CATEGORY_IMAGE_COUNTS, CATEGORY_THUMBNAILS } from '#utils/thumbnail'
import { generateArticles } from '../data/generateArticles'
import { seedArticles } from '../data/articles.seed'

// ─── Initialize once at module load (server startup) ─────────────────────────

const _articles: Article[] = generateArticles(seedArticles)

// ─── Helpers ─────────────────────────────────────────────────────────────────

function findArticleByThumbnail(category: Category, filename: string): Article | undefined {
  return getArticlesByCategory(category).find((article) => article.thumbnail.includes(filename))
}

function sortByThumbnailOrder(articles: Article[], category: Category): Article[] {
  const order = CATEGORY_THUMBNAILS[category]
  return [...articles].sort((a, b) => {
    const aIndex = order.indexOf(a.thumbnail)
    const bIndex = order.indexOf(b.thumbnail)
    return (aIndex === -1 ? order.length : aIndex) - (bIndex === -1 ? order.length : bIndex)
  })
}

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

  const latestCandidates = [
    findArticleByThumbnail('business', 'bus-1.png'),
    findArticleByThumbnail('world-news', 'world-2.png'),
    findArticleByThumbnail('sports', 'egy-v2-nl'),
    findArticleByThumbnail('business', 'bus-2.png'),
    findArticleByThumbnail('business', 'bus-3.png'),
    findArticleByThumbnail('health', 'health-1.png'),
  ].filter((article): article is Article => !!article && article.slug !== hero.slug)

  const latest =
    latestCandidates.length === 6
      ? latestCandidates
      : [..._articles]
          .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
          .filter((a) => a.slug !== hero.slug)
          .slice(0, 6)

  const sectionLimits: Partial<Record<Category, number>> = {
    'world-news': CATEGORY_IMAGE_COUNTS['world-news'],
    technology: 4,
    podcast: CATEGORY_IMAGE_COUNTS.podcast,
  }
  const sectionCategories: Category[] = ['world-news', 'technology', 'podcast']
  const sections: SectionPreview[] = sectionCategories.map((cat) => ({
    category: cat,
    label: CATEGORY_LABELS[cat],
    articles: sortByThumbnailOrder(getArticlesByCategory(cat), cat).slice(
      0,
      sectionLimits[cat] ?? 5,
    ),
  }))

  return { hero, ticker, latest, sections }
}

export function getCategoryPayload(category: Category): CategoryPayload {
  const sorted = sortByThumbnailOrder(getArticlesByCategory(category), category)
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

  const related = sortByThumbnailOrder(
    getArticlesByCategory(article.category).filter((a) => a.slug !== slug),
    article.category,
  ).slice(0, 3)

  return { article, related }
}

// ─── Validate a slug is a known category ─────────────────────────────────────

export function isValidCategory(slug: string): slug is Category {
  return (CATEGORIES as string[]).includes(slug)
}
