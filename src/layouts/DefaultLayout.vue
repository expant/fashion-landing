<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
import HeroItem from "@/sections/HeroItem.vue";
</script>

<template>
  <div class="layout">
    <HeaderItem />
    <main class="main">
      <HeroItem />
    </main>
  </div>
</template>

<style>
html {
  font-size: var(--font-size-desktop);
}

@media (max-width: 1023px) {
  html {
    font-size: var(--font-size-tablet);
  }
}

/* Смартфоны (320px–767px) */
@media (max-width: 767px) {
  html {
    font-size: var(--font-size-mobile);
  }
}
</style>
