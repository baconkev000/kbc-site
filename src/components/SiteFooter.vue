<script setup lang="ts">
import { navLinks, site } from '@/data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-inner">
        <div>
          <div class="footer-name">{{ site.name }}</div>
          <p class="footer-meta">{{ site.tagline }} · {{ site.location }}</p>
        </div>
        <nav class="footer-links" aria-label="Footer">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        </nav>
      </div>
      <p class="fine">© {{ site.year }} {{ site.name }}. This website is for the software business only.</p>
    </div>
  </footer>
</template>
