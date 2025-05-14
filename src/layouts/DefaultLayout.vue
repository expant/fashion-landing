<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
</script>

<template>
  <div class="layout">
    <HeaderItem />
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
