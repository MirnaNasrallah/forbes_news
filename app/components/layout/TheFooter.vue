<script setup lang="ts">
const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/forbesmiddleeast/?hl=en', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://ae.linkedin.com/company/forbesmiddleeast', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://youtube.com/user/ForbesMiddleEast?themeRefresh=1', icon: 'youtube' },
  { label: 'X', href: 'https://x.com/Forbes_MENA_', icon: 'twitter' },
  { label: 'Facebook', href: 'https://www.facebook.com/forbes.ME.page/', icon: 'facebook' },
]
</script>

<template>
  <footer class="mt-8 bg-forbes-bg">
    <ContentDivider />

    <div class="home-content py-6">
      <NuxtLink to="/" class="inline-block hover:opacity-70 transition-opacity">
        <ForbesLogo :width="176" :height="44" />
      </NuxtLink>
    </div>

    <ContentDivider />

    <div class="home-content">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-h-[60px] py-4 px-2">
        <div class="flex items-center gap-3">
          <p class="text-caption text-forbes-dark/60">
            © {{ new Date().getFullYear() }} Forbes Middle East. All Rights Reserved.
          </p>
        </div>

        <div class="flex items-center gap-[18px]">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            :aria-label="link.label"
            target="_blank"
            rel="noopener noreferrer"
            class="text-forbes-dark hover:text-forbes-red transition-colors"
          >
            <svg v-if="link.icon === 'instagram'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2" />
              <circle cx="12" cy="12" r="4" stroke-width="2" />
            </svg>
            <svg v-else-if="link.icon === 'linkedin'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <svg v-else-if="link.icon === 'youtube'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
            <svg v-else-if="link.icon === 'twitter'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <svg v-else-if="link.icon === 'facebook'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <ContentDivider />
  </footer>
</template>
