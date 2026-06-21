import type { HomepagePayload } from '#types/article'
import { getHomepagePayload } from '../utils/articleStore'

export default defineEventHandler((): HomepagePayload => {
  return getHomepagePayload()
})
