<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<template>
  <section class="community">
    <div class="community__content">
      <h3 class="community__title">
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </h3>
      <p class="community__description">
        Type your email down below and be young wild generation
      </p>
      <form class="community__form" action="#">
        <input
          class="community__form-email-input"
          type="text"
          placeholder="Add your email here"
        />
        <button class="community__form-btn" type="submit">SEND</button>
        <base-button class="community__form-btn">SEND</base-button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.community {
  display: flex;
  justify-content: center;
  background-color: var(--color-accent-gold);
}

.community__content {
  max-width: 42.5rem;
  text-align: center;
  margin: 5.85rem 0 6.5rem;
}

.community__title {
  font-size: 2.29rem;
  font-weight: 900;
  line-height: 2.9rem;
  letter-spacing: 0.07rem;
  color: var(--color-neutral-0);
}

.community__description {
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0.66rem 0 1.51rem;
  margin-right: 0.55rem;
  letter-spacing: 0.056rem;
  color: var(--color-neutral-50);
}

.community__form {
  position: relative;
  width: 23.917rem;
  margin: 0 auto;
}

.community__form-email-input {
  position: relative;
  width: 100%;
  border-radius: 0.42rem;
  font-size: 1rem;
  font-weight: 400;
  padding: 1.11rem 7.54rem 1.11rem 1.125rem;
  letter-spacing: 0.03rem;
  border: none;
  color: #767676;
  z-index: 100;
}

.community__form-email-input:focus {
  outline: none;
}

.community__form-btn {
  position: absolute;
  top: 0.47rem;
  right: 0.47rem;
  font-size: 1.375rem;
  padding: 0.37rem 1.46rem;
  letter-spacing: 0.05rem;
  background-color: var(--color-neutral-900);
  border-radius: 0.3rem;
  color: var(--color-neutral-0);
  z-index: 200;
}

@media (max-width: 1023px) {
  .community__content {
    max-width: 35rem;
    margin: 3rem 1rem;
  }
}

@media (max-width: 767px) {
  .community__content {
    max-width: 19rem;
    margin: 2rem 1rem;
  }

  .community__title {
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  .community__description {
    font-size: 0.7rem;
  }

  .community__form {
    width: 100%;
  }

  .community__form-email-input {
    font-size: 0.7rem;
    padding: 0.7rem 5.5rem 0.7rem 0.9rem;
    border-radius: 0.3rem;
  }

  .community__form-btn {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    font-size: 0.9rem;
    padding: 0.3rem 1.3rem;
    letter-spacing: 0.04rem;
    border-radius: 0.3rem;
  }
}
</style>
