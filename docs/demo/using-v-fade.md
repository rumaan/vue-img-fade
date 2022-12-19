---
title: Demo using v-fade directive
aside: false
---

<script setup lang="ts">
import GalleryVFade from "../components/GalleryVFade.vue";
</script>


# Using v-fade directive

Demo gallery component using `v-fade` directive that shows grid of images from [Picsum Photos](https://picsum.photos/). Hard Reload / Empty Caches and Reload the page if you missed to see the transition.

<div class="gallery-container">
  <GalleryVFade/>
</div>

<style scoped>
  .gallery-container {
    padding-block-start: 16px;
  }
</style>
