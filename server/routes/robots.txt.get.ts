export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = String(config.public.siteUrl).replace(/\/$/, '')

  setHeader(event, 'Content-Type', 'text/plain')
  return `User-Agent: *
Disallow:

Sitemap: ${siteUrl}/sitemap.xml
`
})
