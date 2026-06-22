<script setup lang="ts">
import type { ArticlePayload } from '#types/article'
import ArticlePageSkeleton from '~/app/components/ui/skeleton/ArticlePageSkeleton.vue'

definePageMeta({ key: (route) => route.fullPath })

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data, pending, error } = await useAsyncData<ArticlePayload>(
  () => `article-${slug.value}`,
  () => $fetch(`/api/articles/${slug.value}`),
  { watch: [slug] },
)

if (error.value) {
  const statusCode = error.value.statusCode ?? 500
  throw createError({
    statusCode,
    statusMessage: statusCode === 404 ? 'Article not found' : 'Failed to load article',
    fatal: true,
  })
}

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const { formatDateLong } = useFormatDate()

usePageSeo(() => ({
  title: data.value?.article.title ?? 'Article',
  description: data.value?.article.excerpt ?? '',
  path: `/articles/${slug.value}`,
  ogImage: data.value?.article.thumbnail,
  ogType: 'article',
  publishedTime: data.value?.article.publishedAt,
  author: data.value?.article.author.name,
  preloadImage: data.value?.article.thumbnail,
}))

useArticleJsonLd(() => data.value?.article)
</script>

<template>
  <ArticlePageSkeleton v-if="pending" />

  <div v-else-if="data" class="home-content pb-10">
    <div class="article-column">
      <RevealOnEnter :delay="0">
        <div class="card-image w-full aspect-[16/7] bg-forbes-dark/10">
          <ArticleThumbnail
            :src="data.article.thumbnail"
            :alt="data.article.title"
            :category="data.article.category"
            img-class="w-full h-full object-contain"
            loading="eager"
            fetchpriority="high"
            :width="1891"
            :height="832"
            fit="contain"
          />
        </div>
      </RevealOnEnter>

      <ContentDivider />

      <RevealOnEnter :delay="60">
        <div class="py-5">
          <p class="text-caption font-semibold uppercase tracking-widest text-forbes-dark mb-1">
            By {{ data.article.author.name }}
          </p>
          <p class="text-caption text-forbes-dark/60 uppercase tracking-wide">
            Published {{ formatDateLong(data.article.publishedAt) }}
          </p>
        </div>
      </RevealOnEnter>

      <ContentDivider />

      <RevealOnEnter :delay="120">
        <h1 class="text-h1 font-bold uppercase leading-tight text-forbes-dark py-5">
          {{ data.article.title }}
        </h1>
      </RevealOnEnter>

      <ContentDivider />

      <RevealOnEnter :delay="180">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="article-body pt-8" v-html="data.article.body" />
      </RevealOnEnter>
    </div>

    <section v-if="data.related.length" class="mt-16">
      <RevealOnEnter :delay="240">
        <SectionTitle title="Similar News" />
      </RevealOnEnter>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 justify-items-center xl:justify-items-start">
        <ArticleCard
          v-for="(article, index) in data.related"
          :key="article.slug"
          :article="article"
          :reveal-delay="index * 60"
        />
      </div>
    </section>
  </div>
</template>
