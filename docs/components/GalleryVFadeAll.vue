<script setup lang="ts">
import { vFadeAll } from "../../src";
const now = +new Date();
</script>

<template>
  <div v-fade-all class="container">
    <div v-for="i in 50" :key="i" class="img-wrapper">
      <img
        :src="`https://picsum.photos/seed/v-fade-all-${i}/400/400?v=${now}`"
        alt=""
        width="400"
        height="400"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-auto-flow: row;
  grid-auto-rows: 120px;
  gap: 8px;
}

img {
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  user-select: none;
}

@media (max-width: 700px) {
  .container {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 100px;
  }
}
</style>
