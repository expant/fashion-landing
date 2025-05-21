<script setup>
import SectionWrapper from "@/layouts/SectionWrapper.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<template>
  <section-wrapper>
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
      <!-- <button class="hero__btn">Shop Now</button> -->
      <base-button class="hero__btn">Shop Now</base-button>
      <img
        class="hero_img"
        src="../assets/images/hero_girl.png"
        alt="hero section girl"
      />
    </section>
  </section-wrapper>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.34rem;
  height: 35.5rem;
  margin: 0 4.17rem;
  padding: 2.85rem 4.958rem;
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
  letter-spacing: -0.051rem;
}

.hero__btn {
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0.45rem;
  margin-right: auto;
  padding: 0.75rem 1.5rem;
  color: var(--color-neutral-0);
  background-color: var(--color-neutral-900);
  border-radius: 0.417rem;
}

.hero_img {
  position: absolute;
  bottom: 0;
  right: 4.2rem;
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
  top: 0.3rem;
  left: -1.12rem;
  width: 19.3642rem;
  height: 4.6725rem;
  background: var(--color-neutral-0);
}

.rectangle_yellow {
  top: -0.35rem;
  left: -1.02rem;
  width: 20.6579rem;
  height: 4.8979rem;
  background: var(--color-bg-secondary);
}

@media (max-width: 1023px) {
  .hero {
    height: auto;
    margin: 0 3rem;
    gap: 0.8rem;
    border-radius: 1rem;
  }

  .hero_img {
    display: none;
  }
}

@media (max-width: 767px) {
  .hero {
    margin: 0 1rem;
    padding: 1.85rem 2.5rem;
  }

  .hero__title {
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  .rectangle_white {
    top: 0.1rem;
    left: -0.6rem;
    width: 6rem;
    height: 1.4rem;
  }

  .rectangle_yellow {
    top: -0.1rem;
    left: -0.4rem;
    width: 6.5rem;
    height: 1.8rem;
  }

  .hero__text {
    font-size: 0.8rem;
  }

  .hero__btn {
    font-size: 0.6rem;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 400px) {
  .hero {
    padding: 1rem 2rem;
  }

  .hero__title {
    font-size: 1.8rem;
    line-height: 2.3rem;
  }

  .rectangle_white {
    top: 0.1rem;
    left: -0.6rem;
    width: 6rem;
    height: 2rem;
  }

  .rectangle_yellow {
    top: 0.2rem;
    left: -0.4rem;
    width: 8rem;
    height: 2rem;
  }

  .hero__text {
    font-size: 1rem;
  }

  .hero__btn {
    font-size: 0.8rem;
  }
}
</style>
