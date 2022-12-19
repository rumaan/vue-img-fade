---
title: Demo using v-fade-all directive
aside: false
---

<script setup lang="ts">
import GalleryVFadeAll from "../components/GalleryVFadeAll.vue";
</script>

# Using v-fade-all directive

Demo gallery component using `v-fade-all` directive that shows grid of images from [Picsum Photos](https://picsum.photos/). Reload the page if you missed to see the transition.

<div class="gallery-container">
  <GalleryVFadeAll/>
</div>

::: info
Notice how regardless of when individual images finish loading (can be due to different file sizes, resolution etc) the animation runs only **after** all the images currently visible in the viewport have loaded.
:::


<style scoped>
  .gallery-container {
    padding-block: 16px;
  }
</style>