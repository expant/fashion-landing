<script setup>
import StarIcon from "@/components/icons/StarIcon.vue";
import girlImg from "@/assets/images/banner-girl.png";
</script>

<template>
  <section class="banner">
    <StarIcon class="banner__star star1" />
    <StarIcon class="banner__star star2" />
    <StarIcon class="banner__star star3" />
    <StarIcon class="banner__star star4" />

    <img class="banner__img" :src="girlImg" alt="girl on the banner" />
    <div class="banner__text">
      <h3 class="banner__title">
        <div class="banner__title-word">
          <div class="rectangle rectangle_white"></div>
          <div class="banner__title-word-text">PAYDAY</div>
        </div>
        SALE NOW
      </h3>
      <p class="banner__description">
        Spend minimal $100 get 30% off voucher code for your next purchase
      </p>
      <div class="banner__date">1 June - 10 June 2021</div>
      <div class="banner__terms">*Terms & Conditions apply</div>
      <button class="banner__btn">SHOP NOW</button>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  display: grid;
  grid-template-columns: 41.17rem 38.8725rem;
  height: 40.35rem;
  background: linear-gradient(
    to top,
    #e0c340 0%,
    #dfc23e 4%,
    #e1c441 7%,
    #e3c743 10%,
    #e4c542 13%,
    #e6c744 16%,
    #e7c845 20%,
    #e5c643 24%,
    #e6c945 31%,
    #e3c743 37%,
    #e9ca48 43%,
    #edce49 50%,
    #f0d44c 57%,
    #f4d84f 63%,
    #f6da52 67%,
    #f7db53 74%,
    #f9dd55 79%,
    #f9df56 86%,
    #fae157 93%,
    #f9df56 100%
  );
}

.banner__star {
  position: absolute;
  width: 3.1725rem;
  fill: var(--color-neutral-0);
  opacity: 0.5;
  rotate: -26.95deg;
}

.star1 {
  top: 6.9rem;
  left: 6rem;
}

.star2 {
  top: 4.1rem;
  left: 32.25rem;
}

.star3 {
  top: 21rem;
  left: 8.15rem;
}

.star4 {
  top: 27.2rem;
  left: 34.35rem;
}

.banner__img {
  width: 100%;
}

.banner__text {
  max-width: 30.6rem;
  padding-top: 5.9rem;
  padding-left: 3.72rem;
}

.banner__title {
  font-size: 4.65rem;
  font-weight: 900;
  line-height: 5.72rem;
}

.banner__title-word,
.banner__title-word-text {
  position: relative;
}

.banner__title-word-text {
  z-index: 200;
}

.rectangle_white {
  position: absolute;
  top: -0.15rem;
  left: -0.9rem;
  width: 22.6rem;
  height: 5.4rem;
  background: var(--color-neutral-0);
  z-index: 100;
  rotate: -2deg;
}

.banner__description,
.banner__date,
.banner__terms {
  font-size: 1.5rem;
}

.banner__description,
.banner__terms {
  letter-spacing: -0.03rem;
}

.banner__description {
  font-weight: 500;
  line-height: 2.17rem;
  margin: 1.4rem 0 1.05rem;
}

.banner__date {
  font-weight: 700;
  letter-spacing: 0.03rem;
}

.banner__terms {
  font-weight: 400;
  margin-top: -0.2rem;
}

.banner__btn {
  display: inline-block;
  font-size: 1.1625rem;
  font-weight: 600;
  letter-spacing: 0.03rem;
  margin-top: 1.48rem;
  padding: 1.1rem 2.22rem;
  color: var(--color-neutral-0);
  background-color: var(--color-neutral-900);
  border-radius: 0.34rem;
}

@media (max-width: 1023px) {
  .banner {
    display: block;
    height: auto;
  }

  .banner__title {
    font-size: 4rem;
    line-height: 4.5rem;
  }

  .banner__description,
  .banner__date,
  .banner__terms {
    font-size: 1.3rem;
  }

  .banner__text {
    padding: 2rem 3rem;
  }

  .banner__img {
    display: none;
  }

  .banner__star {
    display: none;
  }

  .rectangle_white {
    top: 0.1rem;
    left: -0.8rem;
    width: 19rem;
    height: 4.2rem;
  }
}

@media (max-width: 767px) {
  .banner {
    height: auto;
  }

  .banner__title {
    font-size: 3rem;
    line-height: 3.2rem;
  }

  .banner__text {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }

  .banner__description,
  .banner__date,
  .banner__terms {
    font-size: 0.7rem;
  }

  .banner__description {
    line-height: 1rem;
    margin: 1rem 0;
  }

  .banner__btn {
    font-size: 0.7rem;
    padding: 0.5rem 1.5rem;
  }

  .rectangle_white {
    top: 0.1rem;
    left: 2rem;
    width: 14rem;
    height: 3.2rem;
    rotate: 0deg;
  }
}

@media (max-width: 400px) {
}
</style>
