import type { CategoryPayload } from '#types/article'
import { getCategoryPayload, isValidCategory } from '../../utils/articleStore'

export default defineEventHandler((event): CategoryPayload => {
  const slug = getRouterParam(event, 'slug') ?? ''

  if (!isValidCategory(slug)) {
    throw createError({ statusCode: 404, message: `Unknown category: ${slug}` })
  }

  return getCategoryPayload(slug)
})
