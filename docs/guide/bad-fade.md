<script lang="ts" setup>
import GalleryBadFade from "../components/GalleryBadFade.vue";
</script>

# Example Bad Staggered Fade Transition

Since images are of different size, when page initially loads the `load` event for each image is fired out of order. (Note: clear cache and reload page if you can't see the out of order fade animation)

<div class="gallery-container">
  <GalleryBadFade/>
</div>

<style scoped>
  .gallery-container {
    padding-block: 16px;
  }
</style>

**Code**

```vue
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
        :src="`https://picsum.photos/seed/v-fade-${i}/400/400`"
        alt=""
        width="400"
        height="400"
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
```
