<script setup lang="ts">
import type { Article } from '#types/article'

defineProps<{
  article: Article
}>()

function formatReadingTime(minutes: number): string {
  return `${minutes} Minutes`
}
</script>

<template>
  <article class="group">
    <NuxtLink :to="`/articles/${article.slug}`" class="flex w-[420px] h-[200px] gap-[14px] items-center">
      <div class="card-image flex-shrink-0 w-[170px] h-[200px] bg-forbes-dark/5">
        <ArticleThumbnail
          :src="article.thumbnail"
          :alt="article.title"
          :category="article.category"
          img-class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          :width="170"
          :height="200"
        />
      </div>

      <div class="w-[236px] h-[164px] min-w-0 flex flex-col justify-center gap-6">
        <h3 class="text-body-md font-bold text-forbes-dark leading-snug line-clamp-2">
          {{ article.title }}
        </h3>
        <p class="text-body-sm text-forbes-dark/60 line-clamp-2 min-h-[42px]">
          {{ article.excerpt }}
        </p>
        <p class="text-caption text-forbes-dark/50">
          {{ formatReadingTime(article.readingTime) }} - {{ article.author.name }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
