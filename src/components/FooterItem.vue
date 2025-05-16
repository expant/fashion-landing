<script setup>
import ContactIcon from "./icons/ContactIcon.vue";
import FooterNavigationItem from "./FooterNavigationItem.vue";

const contacts = [
  { id: 1, type: "facebook", link: "#" },
  { id: 2, type: "instagram", link: "#" },
  { id: 3, type: "twitter", link: "#" },
  { id: 4, type: "in", link: "#" },
];

const navigation = [
  {
    id: 1,
    title: "Company",
    items: [
      { id: 1, title: "About", link: "#" },
      { id: 2, title: "Contact us", link: "#" },
      { id: 3, title: "Support", link: "#" },
      { id: 4, title: "Careers", link: "#" },
    ],
  },
  {
    id: 2,
    title: "Quick Link",
    items: [
      { id: 1, title: "Share Location", link: "#" },
      { id: 2, title: "Orders Tracking", link: "#" },
      { id: 3, title: "Size Guide", link: "#" },
      { id: 4, title: "FAQs", link: "#" },
    ],
  },
  {
    id: 3,
    title: "Legal",
    items: [
      { id: 1, title: "Terms & conditions", link: "#" },
      { id: 2, title: "Privacy Policy", link: "#" },
    ],
  },
];
</script>

<template>
  <footer class="footer">
    <div class="footer__contacts">
      <h3 class="contacts__title">FASHION</h3>
      <p class="contacts__text">
        Complete your style with awesome clothes from us.
      </p>
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
    <div class="footer__nav">
      <FooterNavigationItem
        v-for="col in navigation"
        :key="col.id"
        :items="col.items"
        :title="col.title"
      />
    </div>
  </footer>
</template>

<style scoped>
.footer,
.footer__nav,
.contacts__links,
.contacts__link {
  display: flex;
}

.footer {
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
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0 1.35rem;
  letter-spacing: 0.02rem;
  line-height: 1.65rem;
  color: var(--color-neutral-400);
}

.contacts__links {
  gap: 0.58rem;
}

.contacts__link {
  justify-content: center;
  align-items: center;
  width: 2.17rem;
  height: 2.17rem;
  background-color: var(--color-bg-secondary);
  border-radius: 0.625rem;
}

.footer__links {
  gap: 7.83rem;
}

.footer__nav {
  gap: 7.95rem;
  margin-top: 0.4rem;
}
</style>
