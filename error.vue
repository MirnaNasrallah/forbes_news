<script setup>
import { computed } from 'vue'
import { CATEGORIES, CATEGORY_LABELS } from '#types/article'

const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
})

const statusCode = computed(() => props.error.statusCode ?? 500)
const isNotFound = computed(() => statusCode.value === 404)
const title = computed(() => (isNotFound.value ? 'Page Not Found' : 'Something Went Wrong'))
const message = computed(() => {
  if (isNotFound.value) {
    return 'The page you requested does not exist or has been moved.'
  }

  return props.error.statusMessage || props.error.message || 'Please try again in a few moments.'
})

if (import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    setResponseStatus(event, statusCode.value)
  }
}

const route = useRoute()

function goHome() {
  clearError({ redirect: '/' })
}

usePageSeo(() => ({
  title: isNotFound.value ? 'Page Not Found' : 'Something Went Wrong',
  description: message.value,
  path: route.path,
  noindex: true,
}))
</script>

<template>
  <div class="min-h-screen bg-forbes-bg text-forbes-dark">
    <TheHeader />

    <RevealOnEnter :delay="0">
    <main class="home-content page-content-offset pb-12 md:pb-16">
      <p class="category-label mb-3">{{ statusCode }}</p>
      <h1 class="text-h1 font-bold uppercase tracking-wide mb-5">{{ title }}</h1>
      <p class="text-body-md text-forbes-dark/75 max-w-[720px] mb-8">{{ message }}</p>

      <div class="flex flex-wrap items-center gap-3 mb-10">
        <button
          type="button"
          class="inline-flex items-center justify-center px-4 py-2 border border-forbes-dark rounded-md text-caption font-semibold uppercase tracking-wide hover:border-forbes-red hover:text-forbes-red transition-colors"
          @click="goHome"
        >
          Back To Homepage
        </button>
        <NuxtLink
          to="/world-news"
          class="inline-flex items-center justify-center px-4 py-2 border border-forbes-dark rounded-md text-caption font-semibold uppercase tracking-wide hover:border-forbes-red hover:text-forbes-red transition-colors"
          @click="clearError()"
        >
          Browse News
        </NuxtLink>
      </div>

      <div class="border-t border-forbes-dark pt-6">
        <h2 class="text-h5 font-semibold uppercase tracking-wide mb-4">Categories</h2>
        <div class="flex flex-wrap gap-2">
          <NuxtLink
            v-for="category in CATEGORIES"
            :key="category"
            :to="`/${category}`"
            class="text-caption font-semibold uppercase px-3 py-2 border border-forbes-dark rounded-md hover:border-forbes-red hover:text-forbes-red transition-colors"
            @click="clearError()"
          >
            {{ CATEGORY_LABELS[category] }}
          </NuxtLink>
        </div>
      </div>
    </main>
    </RevealOnEnter>
  </div>
</template>
