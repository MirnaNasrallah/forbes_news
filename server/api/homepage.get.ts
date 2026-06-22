import type { HomepagePayload } from '#types/article'
import { getHomepagePayload } from '../utils/articleStore'

export default defineEventHandler((): HomepagePayload => {
  try {
    return getHomepagePayload()
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load homepage payload',
      cause: error,
    })
  }
})
