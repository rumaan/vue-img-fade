<script setup lang="ts">
import { onMounted } from "vue";
import { animateEl } from "../../src/utils";

onMounted(() => {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img, index) => {
    img.addEventListener(
      "load",
      () => {
        animateEl(img, {
          animationOptions: {
            duration: 500,
            easing: "ease-out",
            iterations: 1,
            fill: "forwards",
            delay: index * 25,
          },
        });
      },
      { once: true }
    );
  });
});
</script>

<template>
  <div class="container">
    <div v-for="i in 15" :key="i" class="img-wrapper">
      <img
        :src="`https://picsum.photos/seed/v-fade-${i}/300/300`"
        alt=""
        width="300"
        height="300"
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
  opacity: 0;
}

@media (max-width: 700px) {
  .container {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 100px;
  }
}
</style>
