<script setup></script>

<template>
  <button class="base-btn">
    <div class="base-btn__circle"></div>
    <div class="base-btn__text">
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
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-neutral-0);
  z-index: 100;
}
</style>
