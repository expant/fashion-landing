<script setup>
import { ref } from "vue";
import { initTimeline } from "@/animations/utils/helpers.js";

const btnElement = ref(null);
const circleElement = ref(null);
const textElement = ref(null)

const onMouseover = () => {
  initTimeline()
    .to(circleElement.value, { scale: 1, duration: 0.3 })
    .to(textElement.value, { color: "#000000", duration: 0.1 }, "<")
    .to(btnElement.value, { backgroundColor: "#ebd96b", duration: 0.3 }, "<");
};

const onMouseleave = () => {
  initTimeline()
    .to(circleElement.value, { scale: 0, duration: 0.3 })
    .to(textElement.value, { color: "#ffffff", duration: 0.1 }, "<")
    .to(btnElement.value, { backgroundColor: "#000000", duration: 0.3 }, "<");
};
</script>

<template>
  <button 
    class="base-btn" 
    @mouseover="onMouseover" 
    @mouseleave="onMouseleave"
    ref="btnElement"
  >
    <div class="base-btn__circle" ref="circleElement"></div>
    <div class="base-btn__text" ref="textElement">
      <slot></slot>
    </div>
  </button>
</template>

<style scoped>
.base-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  overflow: hidden;
  background-color: var(--color-neutral-900);
}

.base-btn__text {
  position: relative;
  z-index: 200;
  color: var(--color-neutral-0);
}

.base-btn__circle {
  position: absolute;
  width: 10rem;
  height: 10rem;
  background-color: var(--color-bg-secondary);
  border-radius: 50%;
  z-index: 100;
  scale: 0;
}
</style>
