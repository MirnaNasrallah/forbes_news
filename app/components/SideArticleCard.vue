<script setup lang="ts">
import type { Article } from '#types/article'

defineProps<{
  article: Article
}>()

const { formatDate } = useFormatDate()
</script>

<template>
  <article class="group">
    <NuxtLink :to="`/articles/${article.slug}`" class="flex gap-3 items-start">
      <div class="card-image flex-shrink-0 w-[100px] h-[72px] bg-forbes-dark/5">
        <NuxtImg
          :src="article.thumbnail"
          :alt="article.title"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width="100"
          height="72"
        />
      </div>

      <div class="flex-1 min-w-0 flex flex-col gap-1.5">
        <p class="text-caption text-forbes-dark/60">
          <span>{{ article.author.name }}</span>
          <span class="mx-1">—</span>
          <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
        </p>
        <h4 class="text-body-sm font-semibold text-forbes-dark leading-snug group-hover:text-forbes-red transition-colors line-clamp-3">
          {{ article.title }}
        </h4>
      </div>
    </NuxtLink>
  </article>
</template>
