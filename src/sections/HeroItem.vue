<script setup>
</script>

<template>
  <section class="hero">
    <h1 class="hero__title">
      <div class="hero__title-word">
        <div class="rectangle rectangle_white"></div>
        <div class="hero__title-word-text">LET’S</div>
      </div>
      EXPLORE
      <div class="hero__title-word">
        <div class="rectangle rectangle_yellow"></div>
        <div class="hero__title-word-text">UNIQUE</div>
      </div>
      CLOTHES.
    </h1>
    <p class="hero__text">Live for Influential and Innovative fashion!</p>
    <button class="hero__btn">Shop Now</button>
    <img class="hero_img" src="../assets/images/hero_girl.png" alt="hero section girl">
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35.5rem;
  margin: 0 4.17rem;
  padding: 3.75rem 4.958rem;
  background-color: #f4f6f5;
  border-radius: 2.458rem;
}

.hero__title {
  max-width: 19.75rem;
  font-size: 4rem;
  font-weight: 900;
  line-height: 5rem;
}

.hero__text {
  font-weight: 400;
  font-size: 1.3rem;
}

.hero__btn {
  display: inline-block;
  width: auto;
  font-size: 1.25rem;
  font-weight: 500;
  margin-right: auto;
  padding: 0.83rem 1.7rem;
  color: var(--color-neutral-0);
  background-color: var(--color-neutral-900);
  border-radius: 0.417rem;
}

.hero_img {
  position: absolute;
  bottom: 0;
  right: 3.3rem;
  width: 35.292rem;
}

.hero__title-word {
  position: relative;
}

.hero__title-word-text {
  position: relative;
  z-index: 200;
}

.rectangle_white,
.rectangle_yellow {
  position: absolute;
  z-index: 100;
  rotate: -2deg;
}

.rectangle_white {
  left: -1.208rem;
  width: 19.3642rem;
  height: 4.6725rem;
  background: var(--color-neutral-0);
}

.rectangle_yellow {
  left: -1.07rem;
  width: 20.6579rem;
  height: 4.8979rem;
  background: var(--color-bg-secondary);
}
</style>