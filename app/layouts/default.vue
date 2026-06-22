<template>
  <div class="relative min-h-screen w-full">
    <PageBackground />

    <div class="relative z-10 min-h-screen flex flex-col bg-forbes-bg">
      <TheHeader />
      <main class="flex-1 bg-forbes-bg page-content-offset">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
