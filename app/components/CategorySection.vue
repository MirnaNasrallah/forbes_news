<script setup lang="ts">
import type { Article, Category } from '#types/article'
import { CATEGORY_LABELS } from '#types/article'

const props = defineProps<{
  category: Category
  articles: Article[]
}>()

const featured = computed(() => props.articles[0])
const secondary = computed(() => props.articles.slice(1, 5))
</script>

<template>
  <section v-if="featured" class="mb-14">
    <SectionTitle :title="`${CATEGORY_LABELS[category]} News`" :to="`/${category}`" />

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <!-- Featured -->
      <div class="lg:col-span-3">
        <article class="group">
          <NuxtLink :to="`/articles/${featured.slug}`" class="block">
            <div class="card-image aspect-video bg-forbes-dark/5 mb-4">
              <NuxtImg
                :src="featured.thumbnail"
                :alt="featured.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <span class="category-label">{{ CATEGORY_LABELS[featured.category] }}</span>
            <h3 class="text-h5 font-semibold text-forbes-dark leading-snug mt-1 group-hover:text-forbes-red transition-colors line-clamp-3">
              {{ featured.title }}
            </h3>
            <p class="text-body-sm text-forbes-dark/60 mt-2 line-clamp-2">{{ featured.excerpt }}</p>
          </NuxtLink>
        </article>
      </div>

      <!-- Sidebar stack -->
      <div class="lg:col-span-2 flex flex-col divide-y divide-forbes-dark/10">
        <ArticleCardSmall
          v-for="article in secondary"
          :key="article.slug"
          :article="article"
          class="py-3 first:pt-0 last:pb-0"
        />
      </div>
    </div>
  </section>
</template>
