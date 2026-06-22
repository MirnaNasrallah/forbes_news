<script setup lang="ts">
import type { Article } from '#types/article'
import { CATEGORY_LABELS } from '#types/article'

defineProps<{
  article: Article
}>()

const { formatDate } = useFormatDate()
</script>

<template>
  <article class="group w-full max-w-[420px]">
    <NuxtLink
      :to="`/articles/${article.slug}`"
      class="flex flex-col w-full min-h-[350px] gap-[14px]"
    >
      <!-- Image: 420 × 260 -->
      <div class="card-image w-full h-[260px] bg-forbes-bg shrink-0">
        <ArticleThumbnail
          :src="article.thumbnail"
          :alt="article.title"
          :category="article.category"
          img-class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          :width="420"
          :height="260"
        />
      </div>

      <!-- Meta block: 420 × 76, gap 7px -->
      <div class="flex flex-col gap-[7px] min-h-[76px]">

        <h3 class="card-title text-body-md font-semibold text-forbes-dark leading-snug">
          {{ article.title }}
        </h3>

        <p class="text-caption text-forbes-dark/60">
          <span>{{ article.author.name }}</span>
          <span class="mx-1">—</span>
          <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
