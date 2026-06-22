<script setup lang="ts">
import type { ArticlePayload } from '#types/article'
import { CATEGORY_LABELS } from '#types/article'
import ArticlePageSkeleton from '~/components/skeleton/ArticlePageSkeleton.vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data, pending, error } = await useAsyncData<ArticlePayload>(
  `article-${slug.value}`,
  () => $fetch(`/api/articles/${slug.value}`),
)

if (error.value || !data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const { formatDateLong } = useFormatDate()

useSeoMeta({
  title: () => data.value?.article.title ?? 'Article',
  description: () => data.value?.article.excerpt ?? '',
})
</script>

<template>
  <ArticlePageSkeleton v-if="pending" />

  <div v-else-if="data">
    <!-- Full-width hero image -->
    <div class="container pt-8">
      <div class="card-image w-full aspect-[16/7] bg-forbes-dark/10">
        <ArticleThumbnail
          :src="data.article.thumbnail"
          :alt="data.article.title"
          :category="data.article.category"
          img-class="w-full h-full object-cover"
          loading="eager"
          :width="1320"
          :height="578"
        />
      </div>
    </div>

    <!-- Article content -->
    <div class="container py-10">
      <div class="max-w-[720px] mx-auto">
        <p class="text-caption font-semibold uppercase tracking-widest text-forbes-dark mb-1">
          By {{ data.article.author.name }}
        </p>
        <p class="text-caption text-forbes-dark/60 uppercase tracking-wide mb-6">
          Published {{ formatDateLong(data.article.publishedAt) }}
        </p>

        <h1 class="text-h1 font-bold uppercase leading-tight text-forbes-dark mb-8">
          {{ data.article.title }}
        </h1>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="article-body" v-html="data.article.body" />
      </div>

      <!-- Similar news -->
      <section v-if="data.related.length" class="mt-16">
        <SectionTitle title="Similar News" />
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 justify-items-center xl:justify-items-start">
          <ArticleCard
            v-for="article in data.related"
            :key="article.slug"
            :article="article"
          />
        </div>
      </section>
    </div>
  </div>
</template>
