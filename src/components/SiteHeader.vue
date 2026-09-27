<script setup lang="ts">
import { useRoute } from 'vue-router'
import { navLinks, site } from '@/data/site'

const route = useRoute()

function current(path: string) {
  return route.path === path ? 'page' : undefined
}
</script>

<template>
  <header class="site-header">
    <div class="wrap header-inner">
      <RouterLink class="brand" to="/" :aria-label="`${site.name} home`">
        <span class="brand-mark" aria-hidden="true"></span>
        <span class="brand-name">{{ site.name }}</span>
      </RouterLink>
      <nav aria-label="Primary">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink :to="link.to" :aria-current="current(link.to)">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
