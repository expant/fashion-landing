<script setup>
import { useMarquee } from "../animations/composables/useMarquee";

const marqueeDuration = 15;
const { marqueeContainer } = useMarquee(marqueeDuration);
</script>

<template>
  <div
    class="brands-marquee"
    ref="marqueeContainer"
    @mouseenter="playMarquee"
    @mouseleave="stopMarquee"
  >
    <section class="brands marquee-inner">
      <div class="brands__item">
        <img
          class="brands__item-hnm"
          src="../assets/images/brands/hnm.png"
          alt="H and M"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-obey"
          src="../assets/images/brands/obey.png"
          alt="Obey"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-shopify"
          src="../assets/images/brands/shopify.png"
          alt="Shopify"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-lacoste"
          src="../assets/images/brands/lacoste.png"
          alt="Lacoste"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-levis"
          src="../assets/images/brands/levis.png"
          alt="Levis"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-amazon"
          src="../assets/images/brands/amazon.png"
          alt="Amazon"
        />
      </div>
    </section>
    <section class="brands marquee-inner">
      <div class="brands__item">
        <img
          class="brands__item-hnm"
          src="../assets/images/brands/hnm.png"
          alt="H and M"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-obey"
          src="../assets/images/brands/obey.png"
          alt="Obey"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-shopify"
          src="../assets/images/brands/shopify.png"
          alt="Shopify"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-lacoste"
          src="../assets/images/brands/lacoste.png"
          alt="Lacoste"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-levis"
          src="../assets/images/brands/levis.png"
          alt="Levis"
        />
      </div>
      <div class="brands__item">
        <img
          class="brands__item-amazon"
          src="../assets/images/brands/amazon.png"
          alt="Amazon"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.brands-marquee {
  display: flex;
  width: 100vw;
  overflow: hidden;
  margin: 2.208rem 0 2.45rem;
  padding: 2rem 0;
  background-color: var(--color-bg-secondary);
}

.brands {
  flex: auto 0 0;
  display: flex;
  min-width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 7.5rem;
}

.brands__item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

/* .brands__item img {
  height: 2.5rem;
  width: auto;
  object-fit: contain;
} */

.brands__item-hnm {
  width: 4.7rem;
}

.brands__item-obey {
  width: 4.5rem;
}

.brands__item-shopify {
  width: 6.4rem;
}

.brands__item-lacoste {
  width: 8.85rem;
}

.brands__item-levis {
  width: 4rem;
}

.brands__item-amazon {
  width: 8.5rem;
}

@media (max-width: 1023px) {
  .brands {
    gap: 3rem;
  }

  .brands__item-hnm {
    width: 3rem;
  }

  .brands__item-obey {
    width: 3rem;
  }

  .brands__item-shopify {
    width: 4rem;
  }

  .brands__item-lacoste {
    width: 5.5rem;
  }

  .brands__item-levis {
    width: 3rem;
  }

  .brands__item-amazon {
    width: 6rem;
  }
}

@media (max-width: 767px) {
  .brands-marquee {
    padding: 0;
  }

  .brands {
    gap: 1.2rem;
    margin: 1.5rem 0;
    background-color: var(--color-bg-secondary);
  }

  .brands__item-hnm {
    width: 1.5rem;
  }

  .brands__item-obey {
    width: 2rem;
  }

  .brands__item-shopify {
    width: 2rem;
  }

  .brands__item-lacoste {
    width: 3rem;
  }

  .brands__item-levis {
    width: 1.5rem;
  }

  .brands__item-amazon {
    width: 3rem;
  }
}

@media (max-width: 400px) {
}
</style>
