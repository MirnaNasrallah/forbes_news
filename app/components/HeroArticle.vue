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
      <!-- Live article image (not the page background) -->
      <div class="card-image relative w-full aspect-[16/7] bg-forbes-dark/10">
        <ArticleThumbnail
          :src="article.thumbnail"
          :alt="article.title"
          :category="article.category"
          img-class="w-full h-full object-cover"
          loading="eager"
          :width="1320"
          :height="578"
        />

        <div class="absolute top-4 left-4 flex items-center gap-1.5 bg-forbes-red text-white text-caption font-semibold uppercase tracking-wide px-2.5 py-1">
          <span class="w-1.5 h-1.5 rounded-full bg-white" />
          Live Updates
        </div>
      </div>

      <!-- Meta row: pills left, date + time right -->
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
          <span class="mx-1.5">—</span>
          <span>{{ formatReadingTime(article.readingTime) }}</span>
        </p>
      </div>

      <!-- Title -->
      <h2 class="live-title mt-4">
        {{ article.title }}
      </h2>

      <!-- Read Article -->
      <div class="flex justify-end mt-4">
        <ActionLink label="Read Article" as="span" />
      </div>
    </NuxtLink>
  </article>
</template>
