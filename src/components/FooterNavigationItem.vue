<script setup>
const props = defineProps({
  items: Array,
  title: String,
});
</script>

<template>
  <div class="footer__nav-col">
    <div class="footer__nav-title">{{ title }}</div>
    <a
      class="footer__nav-item"
      v-for="item in items"
      :key="item.id"
      :href="item.link"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<style scoped>
.footer__nav-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__nav-title,
.footer__nav-item {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.02rem;
}

.footer__nav-item {
  color: var(--color-neutral-400);
  transition: color 0.1s;
}

.footer__nav-title,
.footer__nav-item:hover {
  color: #d9d9d9;
}
</style>
