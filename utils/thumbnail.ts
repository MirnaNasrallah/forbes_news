import type { Category } from '#types/article'
import { CATEGORIES } from '#types/article'

/** Public folder names (podcast category uses `podcasts` folder). */
const CATEGORY_THUMBNAIL_DIRS: Record<Category, string> = {
  'world-news': 'world-news',
  politics: 'politics',
  business: 'business',
  technology: 'technology',
  health: 'health',
  sports: 'sports',
  culture: 'culture',
  podcast: 'podcasts',
}

/**
 * Figma design assets in /public/images/thumbnails/{category}/.
 * Article count per category page matches this list length.
 */
export const CATEGORY_THUMBNAILS: Record<Category, readonly string[]> = {
  'world-news': [
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/world-news-1/800/500',
    '/images/thumbnails/world-news/world-1.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/world-news-2/800/500',
    '/images/thumbnails/world-news/world-2.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/world-news-3/800/500',
    '/images/thumbnails/world-news/world-3.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/world-news-4/800/500',
    '/images/thumbnails/world-news/world-4.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/world-news-5/800/500',
    '/images/thumbnails/world-news/world-5.webp',
  ],
  politics: [
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/politics-1/800/500',
    '/images/thumbnails/politics/pol-1.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/politics-2/800/500',
    '/images/thumbnails/politics/pol-2.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/politics-3/800/500',
    '/images/thumbnails/politics/pol-3.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/politics-4/800/500',
    '/images/thumbnails/politics/pol-4.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/politics-5/800/500',
    '/images/thumbnails/politics/pol-5.webp',
  ],
  business: [
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/business-1/800/500',
    '/images/thumbnails/business/bus-1.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/business-2/800/500',
    '/images/thumbnails/business/bus-2.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/business-3/800/500',
    '/images/thumbnails/business/bus-3.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/business-4/800/500',
    '/images/thumbnails/business/bus-4.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/business-5/800/500',
    '/images/thumbnails/business/bus-5.webp',
  ],
  technology: [
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/technology-1/800/500',
    '/images/thumbnails/technology/tech-1.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/technology-2/800/500',
    '/images/thumbnails/technology/tech-2.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/technology-3/800/500',
    '/images/thumbnails/technology/tech-3.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/technology-4/800/500',
    '/images/thumbnails/technology/tech-4.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/technology-5/800/500',
    '/images/thumbnails/technology/tech-5.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/technology-6/800/500',
    '/images/thumbnails/technology/tech-6.webp',
  ],
  health: [
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/health-1/800/500',
    '/images/thumbnails/health/health-1.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/health-2/800/500',
    '/images/thumbnails/health/health-2.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/health-3/800/500',
    '/images/thumbnails/health/health-3.webp',
  ],
  sports: [
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/sports-1/800/500',
    '/images/thumbnails/sports/42f0914b244750a8996e6a9f7e8aaeaa2939c9a3.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/sports-2/800/500',
    '/images/thumbnails/sports/5aa6b4094bc07534cd61f9a742cb6d9b9cd81b2b.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/sports-3/800/500',
    '/images/thumbnails/sports/b26f250a58325ad91e505a3a35867b848cf0d736.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/sports-4/800/500',
    '/images/thumbnails/sports/b682bb9d39f676b8ad3b28f85745ce8562cac12c.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/sports-5/800/500',
    '/images/thumbnails/sports/egy-v2-nl.webp',
  ],
  culture: [
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/culture-1/800/500',
    '/images/thumbnails/culture/cul-1.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/culture-2/800/500',
    '/images/thumbnails/culture/cul-2.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/culture-3/800/500',
    '/images/thumbnails/culture/cul-3.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/culture-4/800/500',
    '/images/thumbnails/culture/cul-4.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/culture-5/800/500',
    '/images/thumbnails/culture/cul-5.webp',
  ],
  podcast: [
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/podcast-1/800/500',
    '/images/thumbnails/podcasts/pod-1.jpg',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/podcast-2/800/500',
    '/images/thumbnails/podcasts/pod-2.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/podcast-3/800/500',
    '/images/thumbnails/podcasts/pod-3.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/podcast-4/800/500',
    '/images/thumbnails/podcasts/pod-4.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/podcast-5/800/500',
    '/images/thumbnails/podcasts/pod-5.webp',
    // TODO: return to the picsum after the website goes back up
    // 'https://picsum.photos/seed/podcast-6/800/500',
    '/images/thumbnails/podcasts/pod-6.webp',
  ],
}

export const CATEGORY_IMAGE_COUNTS = Object.fromEntries(
  CATEGORIES.map((category) => [category, CATEGORY_THUMBNAILS[category].length]),
) as Record<Category, number>

/** Homepage live hero image (Figma). */
// TODO: return to the picsum after the website goes back up
// 'https://picsum.photos/seed/home-hero/1320/580',
export const HERO_LIVE_IMAGE = '/images/main.webp'

export const THUMBNAIL_LOAD_TIMEOUT_MS = 3000

function hashString(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

export function getCategoryThumbnailByIndex(category: Category, index: number): string {
  const images = CATEGORY_THUMBNAILS[category]
  return images[index % images.length]!
}

export function getCategoryThumbnailBySeed(seed: string, category: Category, offset = 0): string {
  const images = CATEGORY_THUMBNAILS[category]
  const index = (hashString(seed) + offset) % images.length
  return images[index]!
}

/** Ordered fallback chain for ArticleThumbnail (local assets only). */
export function getThumbnailSourceChain(
  src: string,
  seed: string,
  category: Category,
): string[] {
  const images = [...CATEGORY_THUMBNAILS[category]]
  const primary = src || getCategoryThumbnailBySeed(seed, category)
  const startIndex = images.indexOf(primary)

  if (startIndex === -1) {
    return [primary, ...images.filter((image) => image !== primary)]
  }

  return [...new Set([...images.slice(startIndex), ...images.slice(0, startIndex)])]
}

export function isLocalThumbnail(url: string): boolean {
  return url.startsWith('/images/')
}

export function getThumbnailDir(category: Category): string {
  return CATEGORY_THUMBNAIL_DIRS[category]
}
