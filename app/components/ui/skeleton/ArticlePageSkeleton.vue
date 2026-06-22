<template>
  <div class="home-content pb-10">
    <div class="article-column space-y-5">
      <SkeletonBox class="w-full aspect-[16/7]" />
      <div class="border-t border-forbes-dark" />
      <div class="space-y-2 py-2">
        <SkeletonBox class="w-32 h-3" />
        <SkeletonBox class="w-52 h-3" />
      </div>
      <div class="border-t border-forbes-dark" />
      <SkeletonBox class="w-full h-10" />
      <SkeletonBox class="w-4/5 h-10" />
      <div class="border-t border-forbes-dark" />
      <div class="space-y-3 pt-4">
        <SkeletonBox
          v-for="index in 6"
          :key="index"
          class="w-full h-5"
        />
      </div>
    </div>
  </div>
</template>
