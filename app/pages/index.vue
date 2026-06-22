<script setup lang="ts">
import type { HomepagePayload, SectionPreview } from '#types/article'
import HomepageSkeleton from '~/app/components/ui/skeleton/HomepageSkeleton.vue'

definePageMeta({ layout: 'home' })

const { data, pending, error } = await useAsyncData<HomepagePayload>(
  'homepage',
  () => $fetch('/api/homepage'),
)
const { showBackground } = useBackgroundToggle()

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode ?? 500,
    statusMessage: 'Failed to load homepage',
    fatal: true,
  })
}

function getSection(category: SectionPreview['category']) {
  return data.value?.sections.find((s) => s.category === category)
}

useSeoMeta({
  title: 'Forbes Middle East – Business, Technology, World News',
  description:
    'Forbes Middle East delivers authoritative business, technology, culture, and world news coverage across the Middle East and beyond.',
})
</script>

<template>
  <HomepageSkeleton v-if="pending" />

  <div v-else-if="data">
    <TheHeader />

    <div :class="showBackground ? 'pt-5 pb-6 sm:pt-6 sm:pb-8' : 'py-8'">
      <TickerStrip :articles="data.ticker" />

      <div class="home-content">
      <HeroArticle :article="data.hero" />

      <LatestNewsSection :articles="data.latest" />

      <WorldNewsSection
        v-if="getSection('world-news')"
        :articles="getSection('world-news')!.articles"
      />

      <TechnologySection
        v-if="getSection('technology')"
        :articles="getSection('technology')!.articles"
      />

      <PodcastSection
        v-if="getSection('podcast')"
        :articles="getSection('podcast')!.articles"
      />
      </div>
    </div>

    <TheFooter />
  </div>
</template>
