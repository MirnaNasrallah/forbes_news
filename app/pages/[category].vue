<script setup lang="ts">
import type { CategoryPayload } from '#types/article'
import { CATEGORIES, CATEGORY_LABELS } from '#types/article'
import CategoryPageSkeleton from '~/components/skeleton/CategoryPageSkeleton.vue'

const route = useRoute()
const slug = computed(() => route.params.category as string)

if (!(CATEGORIES as string[]).includes(slug.value)) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found' })
}

const { data, pending, error } = await useAsyncData<CategoryPayload>(
  `category-${slug.value}`,
  () => $fetch(`/api/categories/${slug.value}`),
)

if (error.value || !data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found' })
}

const allArticles = computed(() =>
  data.value ? [data.value.featured, ...data.value.articles] : [],
)

useSeoMeta({
  title: () => `${data.value ? CATEGORY_LABELS[data.value.category] : ''} News – Forbes Middle East`,
  description: () =>
    `Latest ${data.value ? CATEGORY_LABELS[data.value.category] : ''} news, analysis, and features from Forbes Middle East.`,
})
</script>

<template>
  <CategoryPageSkeleton v-if="pending" />

  <div v-else-if="data" class="home-content py-8">
    <div class="mb-10">
      <h1 class="section-heading pb-4">
        {{ CATEGORY_LABELS[data.category] }} News
      </h1>
      <div class="border-t border-forbes-dark" />
    </div>

    <!-- Article grid: 420px cards, 3 columns -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 justify-items-center xl:justify-items-start">
      <ArticleCard
        v-for="article in allArticles"
        :key="article.slug"
        :article="article"
      />
    </div>
  </div>
</template>
