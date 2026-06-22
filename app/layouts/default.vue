<template>
  <div class="layout-root">
    <PageBackground />

    <div class="page-shell">
      <TheHeader />
      <main class="flex-1 w-full min-w-0 bg-forbes-bg page-content-offset">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
