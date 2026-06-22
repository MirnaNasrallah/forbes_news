import type { Category } from '#types/article'
import { CATEGORY_LABELS } from '#types/article'

/** Curated Unsplash photo IDs — editorial / news style per category. */
const CATEGORY_PHOTOS: Record<Category, string[]> = {
  'world-news': [
    '1504711434969-e33886168f5c',
    '1495020689067-958852a7765e',
    '1586339949912-3e9457bef6d3',
  ],
  politics: [
    '1541873676-a181c7573a10',
    '1529107386315-e1a2cc48a620',
    '1560250097-0b93528c311a',
  ],
  business: [
    '1486406146926-c627a92ad1ab',
    '1611976080085-c1b1fe091b8d',
    '1454165804606-c3d57bc86b40',
  ],
  technology: [
    '1518770660439-4636190af475',
    '1531297484001-80022131f5a1',
    '1550751827-4bd374c3f58b',
  ],
  health: [
    '1576091160399-112ba8d25d1d',
    '1631217868264-e5b90cc5f789',
    '1579684385127-1ef15d508118',
  ],
  sports: [
    '1461896836934-ffe607ba8211',
    '1574629810360-7efbbebb072f',
    '1517649763962-0c62306601b7',
  ],
  culture: [
    '1531243269734-3525739266fa',
    '1560174037-f81f34bbd2f8',
    '1549880181-3a089cf5b1a8',
  ],
  podcast: [
    '1478737270248-4fd7fe40b07c',
    '1590602847861-f95a9c4f6b3c',
    '1589903308904-0d3ebf9f9490',
  ],
}

function hashString(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function pickPhotoId(seed: string, category: Category, offset = 0): string {
  const photos = CATEGORY_PHOTOS[category]
  const index = (hashString(seed) + offset) % photos.length
  return photos[index]!
}

/** Unsplash CDN — primary thumbnail source (reliable editorial photos). */
export function getUnsplashThumbnail(
  seed: string,
  category: Category,
  width: number,
  height: number,
  offset = 0,
): string {
  const photoId = pickPhotoId(seed, category, offset)
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&q=80&auto=format`
}

/** Text placeholder when remote photos fail to load. */
export function getPlaceholderThumbnail(category: Category, width: number, height: number): string {
  const label = CATEGORY_LABELS[category] ?? 'News'
  return `https://dummyimage.com/${width}x${height}/202124/F4F4F9&text=${encodeURIComponent(label)}`
}

/** Default article thumbnail URL. */
export function getArticleThumbnail(
  seed: string,
  category: Category,
  width = 800,
  height = 500,
): string {
  return getUnsplashThumbnail(seed, category, width, height)
}

/** Ordered fallbacks for client-side image error handling. */
export function getThumbnailFallbacks(
  seed: string,
  category: Category,
  width: number,
  height: number,
): string[] {
  return [
    getUnsplashThumbnail(seed, category, width, height, 1),
    getPlaceholderThumbnail(category, width, height),
  ]
}
