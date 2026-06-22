<script setup lang="ts">
import { CATEGORY_LABELS, CATEGORIES } from '#types/article'

const route = useRoute()
const { formatDateLong } = useFormatDate()
const { showBackground, toggleBackground } = useBackgroundToggle()

const today = formatDateLong(new Date().toISOString())

function isActiveCategory(cat: string): boolean {
  return route.params.category === cat
}
</script>

<template>
  <header class="bg-forbes-bg top-0 z-50">
    <!-- Top bar -->
    <div class="home-content border-t border-b border-forbes-dark">
      <div class="flex items-center justify-between h-10">
        <div class="flex items-center gap-4">
          <time class="text-caption text-forbes-dark">{{ today }}</time>
          <label
            v-if="route.path === '/'"
            class="flex items-center gap-1.5 text-caption text-forbes-dark cursor-pointer select-none"
            title="Wasn't sure if the cover frame is required in this pare or all pages"
          >
            <input
              type="checkbox"
              class="accent-forbes-red"
              :checked="showBackground"
              @change="toggleBackground"
            >
            Show background
          </label>
        </div>
        <div class="flex items-center gap-3 text-forbes-dark">
          <span class="text-caption hidden sm:inline">The Menu</span>
          <button
            aria-label="Open menu"
            class="text-forbes-dark hover:text-forbes-red transition-colors"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button aria-label="Search" class="text-forbes-dark hover:text-forbes-red transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Logo -->
    <div class="home-content border-b border-forbes-dark">
      <div class="py-5 text-center">
        <NuxtLink to="/" class="inline-block group hover:opacity-80 transition-opacity">
          <ForbesLogo :width="396" :height="99" />
        </NuxtLink>
      </div>
    </div>

    <!-- Navigation -->
    <nav aria-label="Category navigation" class="home-content border-b border-forbes-dark">
      <div class="overflow-x-auto">
        <ul class="flex items-center justify-start lg:justify-center gap-0 h-11 whitespace-nowrap">
          <li v-for="cat in CATEGORIES" :key="cat">
            <NuxtLink
              :to="`/${cat}`"
              class="block px-4 py-2.5 text-caption font-semibold uppercase tracking-wide transition-colors"
              :class="
                isActiveCategory(cat)
                  ? 'text-forbes-red'
                  : 'text-forbes-dark hover:text-forbes-red'
              "
            >
              {{ CATEGORY_LABELS[cat] }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
