<script setup>
import SectionWrapper from "@/layouts/SectionWrapper.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import { useCardAnimations } from "@/animations/composables/useCardAnimations.js";
import card1 from "@/assets/images/arrivals/card1.png";
import card2 from "@/assets/images/arrivals/card2.png";
import card3 from "@/assets/images/arrivals/card3.png";

const title = "NEW ARRIVALS";
const cards = [
  {
    id: 1,
    img: card1,
    title: "Hoodies & Sweetshirt",
    text: "Explore Now!",
  },
  {
    id: 2,
    img: card2,
    title: "Coats & Parkas",
    text: "Explore Now!",
  },
  {
    id: 3,
    img: card3,
    title: "Tees & T-Shirt",
    text: "Explore Now!",
  },
];

const cardAnimations = useCardAnimations();
</script>

<template>
  <section-wrapper>
    <section class="new-arrivals">
      <h3 class="new-arrivals__title">
        <img
          class="new-arrivals__title-img"
          src="../assets/images/subtitle-bg-img.png"
          alt="title image on background "
        />
        <span class="new-arrivals__title-text">{{ title }}</span>
      </h3>
      <div class="new-arrivals__cards">
        <div
          v-for="card in cards"
          :key="card.id"
          :class="`new-arrivals__card card${card.id}`"
          @mousemove="(e) => cardAnimations.onMouseMove(e, `card${card.id}`)"
          @mouseleave="() => cardAnimations.onMouseLeave(`card${card.id}`)"
        >
          <img
            class="new-arrivals__card-img"
            :src="card.img"
            alt="new-arrivals girl"
          />
          <div class="new-arrivals__card-down">
            <div class="card-down__text">
              <div class="new-arrivals__card-title">{{ card.title }}</div>
              <div class="new-arrivals__card-text">{{ card.text }}</div>
            </div>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </section>
  </section-wrapper>
</template>

<style scoped>
.new-arrivals {
  margin: 0 4.17rem;
  margin-bottom: 7.297rem;
}

.new-arrivals__title {
  display: inline-block;
  margin-bottom: 4.05rem;
}

.new-arrivals__title,
.new-arrivals__title-text {
  position: relative;
}

.new-arrivals__title-img {
  position: absolute;
  right: -0.2rem;
  bottom: 0.17rem;
  width: 7.75rem;
  z-index: 100;
}

.new-arrivals__title-text {
  font-size: 2rem;
  font-weight: 900;
  z-index: 200;
  letter-spacing: 0.12rem;
}

.new-arrivals__cards,
.new-arrivals__card,
.new-arrivals__card-down {
  display: flex;
}

.new-arrivals__cards,
.new-arrivals__card-down {
  justify-content: space-between;
}

.new-arrivals__cards {
  gap: 3.75rem;
}

.new-arrivals__card {
  flex-direction: column;
  gap: 1.22rem;
  cursor: pointer;
}

.new-arrivals__card-img {
  width: 20.17rem;
}

.new-arrivals__card-down {
  align-items: center;
}

.new-arrivals__card-title,
.new-arrivals__card-text {
  font-weight: 500;
}

.new-arrivals__card-title {
  font-size: 1.3rem;
  letter-spacing: -0.03rem;
}

.new-arrivals__card-text {
  font-size: 1rem;
  color: #7f7f7f;
  letter-spacing: -0.04rem;
}

@media (max-width: 1023px) {
  .new-arrivals {
    margin: 0 3rem;
    margin-bottom: 4rem;
  }

  .new-arrivals__title {
    margin-bottom: 2rem;
  }

  .new-arrivals__title-text {
    font-size: 1.3rem;
  }

  .new-arrivals__cards {
    gap: 1rem;
  }

  .new-arrivals__card {
    gap: 0.6rem;
  }

  .new-arrivals__card-img {
    width: 11rem;
  }

  .new-arrivals__card-title {
    font-size: 0.8rem;
  }

  .new-arrivals__card-text {
    font-size: 0.6rem;
  }
}

@media (max-width: 767px) {
  .new-arrivals {
    margin: 0 1rem;
    margin-bottom: 2rem;
  }

  .new-arrivals__title {
    display: block;
    text-align: center;
    margin-bottom: 2rem;
  }

  .new-arrivals__title-text {
    font-size: 1rem;
  }

  .new-arrivals__title-img {
    right: 3.2rem;
  }

  .new-arrivals__cards {
    flex-direction: column;
  }

  .new-arrivals__card {
    gap: 0.8rem;
  }

  .new-arrivals__card-img {
    width: 100%;
  }

  .new-arrivals__card-title {
    font-size: 1rem;
  }

  .new-arrivals__card-text {
    font-size: 0.7rem;
  }
}

@media (max-width: 400px) {
}
</style>
