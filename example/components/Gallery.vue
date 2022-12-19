<script setup lang="ts">
import { vFadeAll, vFade } from "../../src";
</script>

<template>
  <div v-fade-all class="container">
    <div v-for="i in 50" :key="i" class="img-wrapper">
      <img
        :src="`https://picsum.photos/500/500?random=${i}`"
        alt=""
        width="500"
        height="500"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-flow: row;
  grid-auto-rows: 180px;
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
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-auto-rows: 140px;
  }
}
</style>
