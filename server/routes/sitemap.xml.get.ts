import { CATEGORIES } from '#types/article'
import { getAllArticles } from '../utils/articleStore'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = String(config.public.siteUrl).replace(/\/$/, '')
  const now = new Date().toISOString()

  const urls = [
  { loc: siteUrl, lastmod: now },
  ...CATEGORIES.map((category) => ({
    loc: `${siteUrl}/${category}`,
    lastmod: now,
  })),
  ...getAllArticles().map((article) => ({
    loc: `${siteUrl}/articles/${article.slug}`,
    lastmod: article.publishedAt,
  })),
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return body
})
