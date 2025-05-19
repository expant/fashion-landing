<script setup>
import { onMounted } from "vue";
import BrandIcon from "./icons/BrandIcon.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import CrossIcon from "./icons/CrossIcon.vue";
import { useMenuAnimations } from "../animations/composables/useMenuAnimations";

const brandTitle = "FASHION";
const navItems = [
  { id: 1, title: "CATALOGUE", link: "#" },
  { id: 2, title: "FASHION", link: "#" },
  { id: 3, title: "FAVOURITE", link: "#" },
  { id: 4, title: "LIFESTYLE", link: "#" },
];

const menuAnimations = useMenuAnimations();

onMounted(() => {
  menuAnimations.setMenu();
});
</script>

<template>
  <header class="header">
    <nav class="header__menu-mobile">
      <button class="hide-menu-btn hide-menu" @click="menuAnimations.hideMenu">
        <CrossIcon class="hide-menu-icon" />
      </button>
      <div
        v-for="item in navItems"
        :key="item.id"
        :class="`header__menu-mobile-item menu-mobile-item${item.id}`"
        @mouseover="menuAnimations.scaleUpMenuItem(item.id)"
        @mouseleave="menuAnimations.resetMenuItemScale(item.id)"
      >
        <a :href="item.link" class="header__menu-mobile-link">{{
          item.title
        }}</a>
      </div>
    </nav>

    <div class="header__brand">
      <a href="/">
        <BrandIcon class="header__logo" />
        <span class="header__title">{{ brandTitle }}</span>
      </a>
    </div>

    <div class="header__right-side">
      <nav class="header__menu">
        <div class="header__menu-item" v-for="item in navItems" :key="item.id">
          <a :href="item.link" class="header__menu-link">{{ item.title }}</a>
        </div>
      </nav>

      <button class="header__sign-up">SIGN UP</button>
      <button
        class="header__menu-mobile-btn show-menu"
        @click="menuAnimations.showMenu"
      >
        <MenuIcon class="header__menu-mobile-icon" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header,
.header__menu,
.header__right-side {
  display: flex;
  align-items: center;
}

.header,
.header__right-side {
  justify-content: space-between;
}

.header {
  position: relative;
  margin: 0 auto;
  padding: 1.917rem 4.17rem 2.7rem;
}

.header__logo {
  width: 1.3025rem;
}

.header__title {
  font-size: 1.7rem;
  font-weight: 900;
  margin-left: 0.5417rem;
  letter-spacing: 0.026rem;
}

.header__right-side {
  gap: 2.4rem;
}

.header__menu {
  gap: 2.89rem;
}

.header__menu-item,
.header__sign-up {
  font-weight: 500;
}

.header__menu-item {
  font-size: 0.917rem;
}

.header__sign-up {
  font-size: 1rem;
  padding: 0.56rem 0.85rem;
  background-color: var(--color-neutral-900);
  border-radius: 0.2917rem;
  color: var(--color-neutral-0);
}

.header__menu-mobile {
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-bg-secondary);
  z-index: 400;
}

.header__menu-mobile-item {
  font-size: 3rem;
  z-index: 500;
}

.header__menu-mobile-btn {
  display: none;
}

.header__menu-mobile-icon {
  width: 1.7rem;
}

.hide-menu-btn {
  position: absolute;
  width: 2rem;
  right: 2rem;
  top: 2rem;
}

@media (max-width: 1023px) {
  .header {
    padding: 1rem 3rem 2rem;
  }

  .header__logo {
    width: 1rem;
  }

  .header__title {
    font-size: 1.3rem;
  }

  .header__menu {
    display: none;
  }

  .header__sign-up {
    font-size: 0.8rem;
  }

  .header__menu-mobile {
    display: flex;
  }

  .header__menu-mobile-btn {
    display: block;
  }
}

@media (max-width: 767px) {
  .header {
    padding: 0.6rem 1rem 1rem;
  }

  .header__logo {
    width: 0.6rem;
  }

  .header__title {
    font-size: 0.8rem;
    margin-left: 0.3rem;
  }

  .header__right-side {
    gap: 1rem;
  }

  .header__sign-up {
    font-size: 0.5rem;
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
  }

  .header__menu-mobile-icon {
    width: 1.3rem;
  }

  .header__menu-mobile-item {
    font-size: 1.9rem;
  }

  .hide-menu-btn {
    width: 1.5rem;
    right: 1.5rem;
    top: 1rem;
  }
}

@media (max-width: 400px) {
  .header__logo {
    width: 0.8rem;
  }

  .header__title {
    font-size: 1rem;
    margin-left: 0.4rem;
  }

  .header__right-side {
    gap: 1rem;
  }

  .header__sign-up {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
    border-radius: 0.2rem;
  }

  .header__menu-mobile-icon {
    width: 1.7rem;
  }

  .header__menu-mobile-item {
    font-size: 1.9rem;
  }

  .hide-menu-btn {
    width: 1.5rem;
    right: 1.5rem;
    top: 1rem;
  }
}
</style>
