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
  <header class="bg-forbes-bg top-0 z-50 pt-4">
    <div class="home-content border-t border-b border-forbes-dark">
      <div class="flex items-center justify-between h-10">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2 text-forbes-dark">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.6 9h16.8M12 3.6c-1.8 2.4-2.8 5.2-2.8 8.4s1 6 2.8 8.4c1.8-2.4 2.8-5.2 2.8-8.4S13.8 6 12 3.6z" />
            </svg>
            <time class="text-caption">{{ today }}</time>
          </div>
          <label
            v-if="route.path === '/'"
            class="flex items-center gap-1.5 text-caption text-forbes-dark cursor-pointer select-none relative"
          >
            <input
              type="checkbox"
              class="accent-forbes-red"
              :checked="showBackground"
              @change="toggleBackground"
            >
            Show background
            <span class="group relative">
              <svg
                class="inline w-4 h-4 ml-1 text-forbes-dark dark:text-forbes-light hover:text-forbes-red dark:hover:text-forbes-red transition-colors cursor-pointer"
                aria-label="Why is this toggle here?"
                tabindex="0"
              >
                <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1" fill="none"/>
                <text x="8" y="12" text-anchor="middle" font-size="10" fill="currentColor">?</text>
              </svg>
              <span
                class="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-forbes-dark dark:bg-forbes-surface text-white dark:text-forbes-dark text-[13px] rounded p-2 shadow-lg z-10 whitespace-nowrap"
                style="min-width:200px;"
              >
                Was not sure if the background was supposed to be shown or not, so I added this toggle
              </span>
            </span>
          </label>
        </div>
        <div class="flex items-center gap-3 text-forbes-dark">
          <ColorModeToggle />
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

    <div class="home-content border-b border-forbes-dark">
      <div class="py-4 text-center">
        <NuxtLink to="/" class="inline-block group hover:opacity-80 transition-opacity">
          <ForbesLogo :width="340" :height="85" />
        </NuxtLink>
      </div>
    </div>

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
