<template>
  <div class="home-content pb-8" aria-busy="true" aria-label="Loading content">
    <div class="mb-10">
      <SkeletonBox class="h-[43px] w-72 mb-4" />
      <div class="border-t border-forbes-dark" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 justify-items-center xl:justify-items-start">
      <ArticleCardSkeleton
        v-for="index in 6"
        :key="index"
      />
    </div>
  </div>
</template>
