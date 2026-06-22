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
    <NuxtLink :to="`/articles/${article.slug}`" class="block">
      <div class="card-image aspect-[4/3] bg-forbes-dark/5 mb-3">
        <ArticleThumbnail
          :src="article.thumbnail"
          :alt="article.title"
          :category="article.category"
          img-class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <time class="block text-caption text-forbes-dark/60 mt-1" :datetime="article.publishedAt">
        {{ formatDate(article.publishedAt) }}
      </time>
      <h3 class="text-body-sm font-semibold text-forbes-dark leading-snug mt-1 line-clamp-3">
        {{ article.title }}
      </h3>
    </NuxtLink>
  </article>
</template>
