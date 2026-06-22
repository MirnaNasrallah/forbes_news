import type { ArticlePayload } from '#types/article'
import { getArticlePayload } from '../../utils/articleStore'

export default defineEventHandler((event): ArticlePayload => {
  const slug = getRouterParam(event, 'slug') ?? ''
  const payload = getArticlePayload(slug)
  if (!payload) {
    throw createError({ statusCode: 404, statusMessage: `Article not found: ${slug}` })
  }

  return payload
})
