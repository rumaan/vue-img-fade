---
title: Demo using v-fade directive
aside: false
---

<script setup lang="ts">
import GalleryVFade from "../components/GalleryVFade.vue";
</script>

# Using v-fade directive

Demo gallery component using `v-fade` directive that shows grid of images from
[Picsum Photos](https://picsum.photos/). Reload the page if you missed to see
the transition.

<GalleryVFade/>

**Demo Code**

```vue{13}
<script setup lang="ts">
import DebugImg from "./DebugImg.vue";
import Demo from "./Demo.vue";
import { withDelay, getImgUrl, debugMode } from "../helpers";
import { vFade } from "../../src/";
</script>

<template>
  <Demo>
    <div class="container">
      <DebugImg :enabled="debugMode" v-for="i in 20" :key="i" v-slot="{ onLoad }">
        <img
          v-fade
          @load="onLoad"
          :src="withDelay(getImgUrl(`v-fade-${i}`), 1000)"
          alt=""
          class="demo-img"
          width="300"
          height="300"
        >
      </DebugImg>
    </div>
  </Demo>
</template>

```
