<script setup>
import BrandIcon from "./icons/BrandIcon.vue";

const brandTitle = "FASHION";
const navItems = [
  { id: 1, title: "CATALOGUE", link: "#" },
  { id: 2, title: "FASHION", link: "#" },
  { id: 3, title: "FAVOURITE", link: "#" },
  { id: 4, title: "LIFESTYLE", link: "#" },
];

</script>

<template>
  <header class="header">

    <div class="header__brand">
      <a href="/">
        <BrandIcon class="header__logo" />
        <span class="header__title">{{ brandTitle }}</span>
      </a>
    </div>

    <div class="header__right-side">
      <nav class="header__nav">
        <div 
          class="header__nav-item"
          v-for="item in navItems"
          :key="item.id"
        >
          <a :href="item.link" class="header__nav-link">{{ item.title }}</a>
        </div>
      </nav>
  
      <!-- TODO: Анимирировать hover у кнопки -->
      <button class="header__sign-up">SIGN UP</button>
    </div>

  </header>
</template>

<style scoped>
.header,
.header__nav,
.header__right-side {
  display: flex;
  align-items: center;
}

.header,
.header__right-side {
  justify-content: space-between;
}

.header {
  margin: 0 auto;
  padding: 1.917rem 4.17rem 2.3rem;
}

.header__logo {
  width: 1.3025rem;
}

.header__title {
  font-size: 1.7rem;
  font-weight: 900;
  margin-left: 0.5417rem;
}

.header__right-side {
  gap: 2.25rem;
}

.header__nav {
  gap: 2.708rem;
}

.header__nav-item,
.header__sign-up {
  font-weight: 500;
}

.header__nav-item {
  font-size: 0.917rem;
}

.header__sign-up {
  font-size: 1rem;
  padding: 0.917rem;
  background-color: var(--color-neutral-900);
  border-radius: 0.2917rem;
  color: var(--color-neutral-0);
}
</style>
