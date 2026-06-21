<script setup lang="ts">
import type { Article } from '#types/article'

defineProps<{
  article: Article
}>()

const { formatDate } = useFormatDate()
</script>

<template>
  <article class="group relative overflow-hidden card-image aspect-[4/3] bg-forbes-dark/10">
    <NuxtLink :to="`/articles/${article.slug}`" class="block h-full">
      <NuxtImg
        :src="article.thumbnail"
        :alt="article.title"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />

      <!-- White overlay panel -->
      <div class="absolute inset-y-0 left-0 w-1/2 min-w-[240px] max-w-[360px] bg-white/95 p-5 flex flex-col justify-between">
        <div>
          <span class="inline-block bg-forbes-dark text-white text-caption font-semibold px-3 py-1 rounded-full mb-4">
            <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
          </span>
          <h3 class="text-h4 font-bold text-forbes-dark leading-snug group-hover:text-forbes-red transition-colors line-clamp-4">
            {{ article.title }}
          </h3>
        </div>
        <p class="text-caption text-forbes-dark/60 mt-4">
          by. {{ article.author.name }} / {{ article.author.title }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
