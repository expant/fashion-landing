<script setup></script>

<template>
  <section class="brands">
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
</template>

<style scoped>
.brands {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.9rem;
  margin: 2.208rem 0 2.45rem;
  padding: 2.5rem 7.125rem 1.33rem;
  background-color: var(--color-bg-secondary);
}

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
  width: 8rem;
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
  .brands {
    gap: 2rem;
    margin: 1.5rem 0 2rem;
    padding: 1rem 4rem;
    background-color: var(--color-bg-secondary);
  }
}

@media (max-width: 400px) {
}
</style>
