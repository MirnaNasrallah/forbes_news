<script setup lang="ts">
import type { Article } from '#types/article'
import { CATEGORY_LABELS } from '#types/article'

defineProps<{
  article: Article
}>()
</script>

<template>
  <NuxtLink
    :to="`/articles/${article.slug}`"
    class="flex items-center w-[268px] h-[84px] gap-[10px] group shrink-0"
  >
    <div class="card-image flex-shrink-0 w-[84px] h-[84px] bg-forbes-dark/5">
      <ArticleThumbnail
        :src="article.thumbnail"
        :alt="article.title"
        :category="article.category"
        img-class="w-full h-full object-cover"
        loading="lazy"
        fetchpriority="low"
        :width="84"
        :height="84"
      />
    </div>

    <div class="flex flex-col justify-center min-w-0 flex-1 h-full gap-1">
      <p class="text-[14px] font-semibold leading-[14.4px] uppercase text-forbes-dark">
        {{ CATEGORY_LABELS[article.category] }}
      </p>
      <p class="text-[14px] font-normal leading-[14.4px] text-forbes-dark line-clamp-2">
        {{ article.title }}
      </p>
    </div>
  </NuxtLink>
</template>
