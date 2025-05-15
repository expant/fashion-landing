<script setup>
import ContactIcon from './icons/ContactIcon.vue';

const contacts = [
  { id: 1, type: "facebook", link: "#" },
  { id: 2, type: "in", link: "#" },
  { id: 3, type: "instagram", link: "#" },
  { id: 4, type: "twitter", link: "#" },
];
</script>

<template>
  <footer class="footer">
    <div class="footer__contacts">
      <h3 class="contacts__title">FASHION</h3>
      <p class="contacts__text">Complete your style with awesome clothes from us.</p>
      <div class="contacts__links">
        <a 
          class="contacts__link"
          v-for="contact in contacts"
          :key="contact.id" 
          :href="contact.link"
        >
          <ContactIcon :type="contact.type" />
        </a>
      </div>
    </div>
    <div class="footer__links">

    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-neutral-900);
  padding: 4.96rem 4.17rem 6.125rem;
}

.footer__contacts {
  max-width: 17.6rem;
}

.contacts__title {
  font-size: 1.7rem;
  font-weight: 900;
  letter-spacing: 0.03rem;
  color: var(--color-neutral-0);
}

.contacts__text {
  font-size: 1rem;
  font-weight: 400;
  margin: 1.3rem 0;
  color: var(--color-neutral-400);
}

.contacts__links {
  display: flex;
  gap: 0.58rem;
}

.contacts__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.17rem;
  height: 2.17rem;
  background-color: var(--color-bg-secondary);
  border-radius: 0.625rem;
}
</style>
