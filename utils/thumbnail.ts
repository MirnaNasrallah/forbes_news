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
    '/images/thumbnails/world-news/world-1.png',
    '/images/thumbnails/world-news/world-2.png',
    '/images/thumbnails/world-news/world-3.png',
    '/images/thumbnails/world-news/world-4.png',
    '/images/thumbnails/world-news/world-5.png',
  ],
  politics: [
    '/images/thumbnails/politics/pol-1.png',
    '/images/thumbnails/politics/pol-2.png',
    '/images/thumbnails/politics/pol-3.png',
    '/images/thumbnails/politics/pol-4.png',
    '/images/thumbnails/politics/pol-5.png',
  ],
  business: [
    '/images/thumbnails/business/bus-1.png',
    '/images/thumbnails/business/bus-2.png',
    '/images/thumbnails/business/bus-3.png',
    '/images/thumbnails/business/bus-4.png',
    '/images/thumbnails/business/bus-5.png',
  ],
  technology: [
    '/images/thumbnails/technology/tech-1.png',
    '/images/thumbnails/technology/tech-2.png',
    '/images/thumbnails/technology/tech-3.png',
    '/images/thumbnails/technology/tech-4.png',
    '/images/thumbnails/technology/tech-5.png',
    '/images/thumbnails/technology/tech-6.png',
  ],
  health: [
    '/images/thumbnails/health/health-1.png',
    '/images/thumbnails/health/health-2.png',
    '/images/thumbnails/health/health-3.png',
  ],
  sports: [
    '/images/thumbnails/sports/42f0914b244750a8996e6a9f7e8aaeaa2939c9a3.png',
    '/images/thumbnails/sports/5aa6b4094bc07534cd61f9a742cb6d9b9cd81b2b.png',
    '/images/thumbnails/sports/b26f250a58325ad91e505a3a35867b848cf0d736.png',
    '/images/thumbnails/sports/b682bb9d39f676b8ad3b28f85745ce8562cac12c.png',
    '/images/thumbnails/sports/egy-v2-nl.webp',
  ],
  culture: [
    '/images/thumbnails/culture/cul-1.png',
    '/images/thumbnails/culture/cul-2.png',
    '/images/thumbnails/culture/cul-3.png',
    '/images/thumbnails/culture/cul-4.png',
    '/images/thumbnails/culture/cul-5.png',
  ],
  podcast: [
    '/images/thumbnails/podcasts/pod-1.jpg',
    '/images/thumbnails/podcasts/pod-2.png',
    '/images/thumbnails/podcasts/pod-3.png',
    '/images/thumbnails/podcasts/pod-4.png',
    '/images/thumbnails/podcasts/pod-5.png',
    '/images/thumbnails/podcasts/pod-6.png',
  ],
}

export const CATEGORY_IMAGE_COUNTS = Object.fromEntries(
  CATEGORIES.map((category) => [category, CATEGORY_THUMBNAILS[category].length]),
) as Record<Category, number>

/** Homepage live hero image (Figma). */
export const HERO_LIVE_IMAGE = '/images/main.jpg'

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

// ─── Original remote placeholder plan (kept for reference) ───────────────────
// Most lorem/picsum-style CDNs were unreliable, so we ship Figma assets locally.
//
// function getPicsumThumbnail(seed: string, width: number, height: number): string {
//   return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`
// }
//
// function getUnsplashThumbnail(
//   seed: string,
//   category: Category,
//   width: number,
//   height: number,
//   offset = 0,
// ): string {
//   return `https://images.unsplash.com/photo-...?w=${width}&h=${height}&fit=crop&q=80&auto=format`
// }
//
// function getPlaceholderThumbnail(category: Category, width: number, height: number): string {
//   return `https://placehold.co/${width}x${height}/202124/F4F4F9?text=${encodeURIComponent(label)}`
// }

/** Default article thumbnail — local Figma asset for category/index. */
export function getArticleThumbnail(
  seed: string,
  category: Category,
  _width = 800,
  _height = 500,
  offset = 0,
): string {
  return getCategoryThumbnailBySeed(seed, category, offset)
  // return getUnsplashThumbnail(seed, category, width, height)
}

/** Ordered fallback chain for ArticleThumbnail (local assets only). */
export function getThumbnailSourceChain(
  src: string,
  seed: string,
  category: Category,
  _width: number,
  _height: number,
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
