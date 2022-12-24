---
title: Demo using v-fade-auto directive
aside: false
---

<script setup lang="ts">
import GalleryVFadeAll from "../components/GalleryVFadeAll.vue";
</script>

# Using v-fade-auto directive

Demo gallery component using `v-fade-auto` directive that shows grid of images
from [Picsum Photos](https://picsum.photos/). Reload the page if you missed to see the transition.

<GalleryVFadeAll/>

**Code:**

<<< @/components/GalleryVFadeAll.vue{11-17}

[**Source**](https://github.com/rumaan/vue-img-fade/blob/0a85fb1c3f4af45d006fb13e18ba4df17091d2dc/docs/components/GalleryVFadeAll.vue#L11)