const SITE_NAME = 'Forbes Middle East'
const DEFAULT_DESCRIPTION =
  'Forbes Middle East delivers authoritative business, technology, culture, and world news coverage across the Middle East and beyond.'
const DEFAULT_OG_IMAGE = '/images/main.png'

export function useSiteUrl(): string {
  const config = useRuntimeConfig()
  return (config.public.siteUrl as string).replace(/\/$/, '')
}

export function absoluteUrl(path: string, siteUrl?: string): string {
  const base = siteUrl ?? useSiteUrl()
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}

export interface PageSeoOptions {
  title: string
  description?: string
  path: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  publishedTime?: string
  author?: string
  preloadImage?: string
}

export function usePageSeo(getOptions: () => PageSeoOptions) {
  const siteUrl = useSiteUrl()

  useSeoMeta({
    title: () => getOptions().title,
    description: () => getOptions().description || DEFAULT_DESCRIPTION,
    robots: () => (getOptions().noindex ? 'noindex, follow' : 'index, follow'),
    ogTitle: () => getOptions().title,
    ogDescription: () => getOptions().description || DEFAULT_DESCRIPTION,
    ogUrl: () => absoluteUrl(getOptions().path, siteUrl),
    ogImage: () => absoluteUrl(getOptions().ogImage || DEFAULT_OG_IMAGE, siteUrl),
    ogType: () => getOptions().ogType || 'website',
    ogSiteName: SITE_NAME,
    twitterCard: 'summary_large_image',
    twitterTitle: () => getOptions().title,
    twitterDescription: () => getOptions().description || DEFAULT_DESCRIPTION,
    twitterImage: () => absoluteUrl(getOptions().ogImage || DEFAULT_OG_IMAGE, siteUrl),
    articlePublishedTime: () => getOptions().publishedTime,
    articleAuthor: () => getOptions().author,
  })

  useHead({
    link: computed(() => {
      const options = getOptions()
      const links: Array<Record<string, string>> = [
        { rel: 'canonical', href: absoluteUrl(options.path, siteUrl) },
      ]

      if (options.preloadImage) {
        links.unshift({
          rel: 'preload',
          as: 'image',
          href: options.preloadImage,
          fetchpriority: 'high',
        })
      }

      return links
    }),
  })
}

export function useArticleJsonLd(getArticle: () => {
  title: string
  excerpt: string
  thumbnail: string
  publishedAt: string
  author: { name: string }
  slug: string
} | undefined) {
  const siteUrl = useSiteUrl()

  useHead({
    script: computed(() => {
      const article = getArticle()
      if (!article) return []

      return [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: article.title,
            description: article.excerpt,
            image: [absoluteUrl(article.thumbnail, siteUrl)],
            datePublished: article.publishedAt,
            author: {
              '@type': 'Person',
              name: article.author.name,
            },
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
              logo: {
                '@type': 'ImageObject',
                url: absoluteUrl('/images/favicon.ico', siteUrl),
              },
            },
            mainEntityOfPage: absoluteUrl(`/articles/${article.slug}`, siteUrl),
          }),
        },
      ]
    }),
  })
}

export function useHomeJsonLd() {
  const siteUrl = useSiteUrl()

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: siteUrl,
        }),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: siteUrl,
          logo: absoluteUrl('/images/favicon.ico', siteUrl),
        }),
      },
    ],
  })
}
