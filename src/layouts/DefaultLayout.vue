<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from "@/components/FooterItem.vue";

import HeroItem from "@/sections/HeroItem.vue";
import BrandsItem from "@/sections/BrandsItem.vue";
import BannerItem from "@/sections/BannerItem.vue";
import VouchersItem from "@/sections/VouchersItem.vue";
import FavouriteItem from "@/sections/FavouriteItem.vue";
import CommunityItem from "@/sections/CommunityItem.vue";
import NewArrivalsItem from "@/sections/NewArrivalsItem.vue";
</script>

<template>
  <div class="layout">
    <HeaderItem />
    <main class="main">
      <HeroItem />
      <BrandsItem />
      <NewArrivalsItem />
      <BannerItem />
      <FavouriteItem />
      <VouchersItem />
      <CommunityItem />
    </main>
    <FooterItem />
  </div>
</template>

<style>
/* html {
  font-size: 24px;
}

@media (max-width: 1690px) {
  html {
    font-size: var(--font-size-desktop);
  }
} */

html {
  font-size: var(--font-size-desktop);
}

@media (max-width: 1023px) {
  html {
    font-size: var(--font-size-tablet);
  }
}

@media (max-width: 767px) {
  html {
    font-size: var(--font-size-mobile);
  }
}

.layout {
  width: 100vw;
}
</style>
