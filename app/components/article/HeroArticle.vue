<script setup lang="ts">
import type { Article } from '#types/article'
import { CATEGORY_LABELS } from '#types/article'

defineProps<{
  article: Article
}>()

const { formatDate } = useFormatDate()

function formatReadingTime(minutes: number): string {
  return `${String(minutes).padStart(2, '0')} Minute`
}
</script>

<template>
  <article class="group mb-10">
    <NuxtLink :to="`/articles/${article.slug}`" class="block">
      <div class="card-image relative w-full bg-forbes-dark/10">
        <ArticleThumbnail
          :src="article.thumbnail"
          :alt="article.title"
          :category="article.category"
          img-class="w-full h-auto max-h-[580px] object-contain mx-auto block transition-transform duration-300 group-hover:scale-105"
          loading="eager"
          fetchpriority="high"
          :width="1891"
          :height="832"
          fit="contain"
        />

        <div class="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-[4px] border border-forbes-dark bg-white dark:bg-forbes-surface/95 py-1.5 px-2 text-caption font-semibold uppercase tracking-wide text-forbes-dark shadow-sm">
          <span class="h-1.5 w-1.5 rounded-[4px] bg-forbes-red" />
          Live Updates
        </div>
      </div>

      <div class="flex items-center justify-between mt-4 gap-4">
        <div class="flex items-center gap-[10px]">
          <span class="meta-pill">
            {{ CATEGORY_LABELS[article.category] }}
          </span>
          <span class="meta-pill">
            {{ article.author.name }}
          </span>
        </div>

        <p class="text-caption text-forbes-dark shrink-0">
          <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
          <span class="mx-1.5">-</span>
          <span>{{ formatReadingTime(article.readingTime) }}</span>
        </p>
      </div>

      <div class="flex items-start justify-between gap-4 mt-4">
        <h2 class="live-title flex-1 min-w-0">
          {{ article.title }}
        </h2>
        <ActionLink label="Read Article" as="span" class="shrink-0 mt-1" />
      </div>
    </NuxtLink>
  </article>
</template>
