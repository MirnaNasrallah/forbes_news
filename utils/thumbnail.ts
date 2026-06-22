import type { Category } from '#types/article'
import { CATEGORY_LABELS } from '#types/article'

/** Picsum placeholder image — primary thumbnail source. */
export function getPicsumThumbnail(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`
}

/** placehold.co fallback when picsum is unavailable (use on image error). */
export function getPlaceholderThumbnail(category: Category, width: number, height: number): string {
  const label = CATEGORY_LABELS[category] ?? 'News'
  return `https://placehold.co/${width}x${height}/202124/F4F4F9?text=${encodeURIComponent(label)}`
}

/** Default article thumbnail URL (picsum). */
export function getArticleThumbnail(
  seed: string,
  _category: Category,
  width = 800,
  height = 500,
): string {
  return getPicsumThumbnail(seed, width, height)
}
