<script setup>
import SectionWrapper from "@/layouts/SectionWrapper.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import card1 from "@/assets/images/youngs-favourite/card1.png";
import card2 from "@/assets/images/youngs-favourite/card2.png";

const title = "Young’s Favourite";
const cards = [
  {
    id: 1,
    img: card1,
    title: "Trending on instagram",
    text: "Explore Now!",
  },
  {
    id: 2,
    img: card2,
    title: "All Under $40",
    text: "Explore Now!",
  },
];
</script>

<template>
  <section-wrapper>
    <section class="favourite">
      <h3 class="favourite__title">
        <img
          class="favourite__title-img"
          src="../assets/images/youngs-favourite/title-bg.png"
          alt="title image on background "
        />
        <span class="favourite__title-text">{{ title }}</span>
      </h3>
      <div class="favourite__cards">
        <div class="favourite__card" v-for="card in cards" :key="card.id">
          <img
            class="favourite__card-img"
            :src="card.img"
            alt="favourite girl"
          />
          <div class="favourite__card-down">
            <div class="card-down__text">
              <div class="favourite__card-title">{{ card.title }}</div>
              <div class="favourite__card-text">{{ card.text }}</div>
            </div>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </section>
  </section-wrapper>
</template>

<style scoped>
.favourite {
  margin: 7.5rem 4.17rem 5.45rem;
}

.favourite__title {
  display: inline-block;
  margin-bottom: 4.4rem;
}

.favourite__title,
.favourite__title-text {
  position: relative;
}

.favourite__title-img {
  position: absolute;
  right: 0.25rem;
  bottom: -0.07rem;
  width: 7.92rem;
  z-index: 100;
}

.favourite__title-text {
  font-size: 2rem;
  font-weight: 900;
  z-index: 200;
  letter-spacing: 0.12rem;
}

.favourite__cards,
.favourite__card,
.favourite__card-down {
  display: flex;
}

.favourite__cards,
.favourite__card-down {
  justify-content: space-between;
}

.favourite__cards {
  gap: 3.75rem;
}

.favourite__card {
  flex-direction: column;
  gap: 1.22rem;
}

.favourite__card-img {
  width: 34rem;
}

.favourite__card-down {
  align-items: center;
}

.favourite__card-title,
.favourite__card-text {
  font-weight: 500;
}

.favourite__card-title {
  font-size: 1.3rem;
  letter-spacing: -0.03rem;
}

.favourite__card-text {
  font-size: 1rem;
  color: #7f7f7f;
  letter-spacing: -0.04rem;
}

@media (max-width: 1023px) {
  .favourite {
    margin: 3rem;
    margin-bottom: 4rem;
  }

  .favourite__title {
    margin-bottom: 2rem;
  }

  .favourite__title-text {
    font-size: 1.3rem;
  }

  .favourite__cards {
    justify-content: center;
    gap: 1rem;
  }

  .favourite__card {
    gap: 0.6rem;
  }

  .favourite__card-img {
    width: 18rem;
  }

  .favourite__card-title {
    font-size: 0.8rem;
  }

  .favourite__card-text {
    font-size: 0.6rem;
  }
}

@media (max-width: 767px) {
  .favourite {
    margin: 1rem;
    margin-bottom: 2rem;
  }

  .favourite__title {
    display: block;
    text-align: center;
    margin-bottom: 2rem;
  }

  .favourite__title-text {
    font-size: 1rem;
  }

  .favourite__title-img {
    right: 2rem;
  }

  .favourite__cards {
    flex-direction: column;
    gap: 2.3rem;
  }

  .favourite__card {
    gap: 0.8rem;
  }

  .favourite__card-img {
    width: 100%;
  }

  .favourite__card-title {
    font-size: 1rem;
  }

  .favourite__card-text {
    font-size: 0.7rem;
  }
}
</style>
