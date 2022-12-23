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

**Demo Code**

```vue{10}
<script setup lang="ts">
import { vFadeAll } from "../../src";
import Demo from "./Demo.vue";
import DebugImg from "./DebugImg.vue";
import { getImgUrl, debugMode } from "../helpers";
</script>

<template>
  <Demo>
    <div v-fade-auto="{ animationOptions: { staggeredItemDelay: 25 } }" class="container">
      <DebugImg :enabled="debugMode" v-for="i in 50" :key="i" v-slot="{ onLoad }">
        <img
          @load="onLoad"
          :src="getImgUrl(`v-fade-${i}`)"
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
