<script setup>
import phoneImg from "@/assets/images/vouchers/mobile-app.png";
import appStoreImg from "@/assets/images/vouchers/appstore.png";
import googlePlayImg from "@/assets/images/vouchers/google-play.png";
</script>

<template>
  <section class="vouchers">
    <div class="vouchers__content">
      <div class="vouchers__text">
        <h3 class="vouchers__title">DOWNLOAD APP & GET THE VOUCHER!</h3>
        <p class="vouchers__description">
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </p>
        <div class="vouchers__stores">
          <a href="#"
            ><img
              class="vouchers__stores-img"
              :src="appStoreImg"
              alt="appstore"
          /></a>
          <a href="#">
            <img
              class="vouchers__stores-img"
              :src="googlePlayImg"
              alt="google play"
            />
          </a>
        </div>
      </div>
      <img class="vouchers__img" :src="phoneImg" alt="mobile app" />
    </div>
  </section>
</template>

<style scoped>
.vouchers,
.vouchers__content,
.vouchers__stores {
  display: flex;
}

.vouchers {
  justify-content: center;
  margin-bottom: 5.1rem;
}

.vouchers__content {
  align-items: center;
  gap: 12.58rem;
  max-width: 62rem;
}

.vouchers__text {
  max-width: 21.25rem;
  margin-top: 1.5rem;
}

.vouchers__title {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.12rem;
}

.vouchers__description {
  font-size: 1rem;
  font-weight: 500;
  margin: 1.65rem 0 2.29rem;
  letter-spacing: -0.04rem;
  color: #7c7c7c;
}

.vouchers__stores {
  gap: 0.8rem;
}

.vouchers__stores-img {
  width: 8.5rem;
}

.vouchers__img {
  width: 27.96rem;
}

@media (max-width: 1023px) {
  .vouchers {
    text-align: center;
  }

  .vouchers__img {
    display: none;
  }

  .vouchers__stores {
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .vouchers {
    padding: 0 1rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .vouchers__title {
    font-size: 1.3rem;
  }

  .vouchers__description {
    font-size: 0.8rem;
  }

  .vouchers__stores-img {
    width: 6rem;
  }
}
</style>
