<script setup lang="ts">
import type { Article } from '#types/article'

defineProps<{
  article: Article
}>()

const { formatDate } = useFormatDate()

function formatReadingTime(minutes: number): string {
  return `${minutes} Minutes`
}
</script>

<template>
  <article class="group">
    <NuxtLink :to="`/articles/${article.slug}`" class="flex gap-4 items-start">
      <div class="card-image flex-shrink-0 w-[120px] h-[90px] bg-forbes-dark/5">
        <ArticleThumbnail
          :src="article.thumbnail"
          :alt="article.title"
          :category="article.category"
          img-class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          :width="120"
          :height="90"
        />
      </div>

      <div class="flex-1 min-w-0 flex flex-col gap-2">
        <h3 class="text-body-md font-bold text-forbes-dark leading-snug line-clamp-2">
          {{ article.title }}
        </h3>
        <p class="text-body-sm text-forbes-dark/60 line-clamp-2">
          {{ article.excerpt }}
        </p>
        <p class="text-caption text-forbes-dark/50 mt-auto">
          {{ formatReadingTime(article.readingTime) }} — {{ article.author.name }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
