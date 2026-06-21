<script setup lang="ts">
import type { Article } from '#types/article'
import { CATEGORY_LABELS } from '#types/article'

defineProps<{
  article: Article
}>()

const { formatDate } = useFormatDate()
</script>

<template>
  <article class="group">
    <NuxtLink :to="`/articles/${article.slug}`" class="flex gap-3 items-start">
      <div class="card-image flex-shrink-0 w-20 h-14 bg-forbes-dark/5">
        <NuxtImg
          :src="article.thumbnail"
          :alt="article.title"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div class="flex-1 min-w-0 flex flex-col gap-1">
        <span class="category-label">
          {{ CATEGORY_LABELS[article.category] }}
        </span>
        <h4 class="text-body-sm font-semibold text-forbes-dark leading-snug group-hover:text-forbes-red transition-colors line-clamp-3">
          {{ article.title }}
        </h4>
        <time class="text-caption text-forbes-dark/50" :datetime="article.publishedAt">
          {{ formatDate(article.publishedAt) }}
        </time>
      </div>
    </NuxtLink>
  </article>
</template>
