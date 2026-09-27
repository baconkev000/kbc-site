<script setup lang="ts">
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'
</script>

<template>
  <div class="shell">
    <a class="skip" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
