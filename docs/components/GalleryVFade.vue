<script setup lang="ts">
import DebugImg from "./DebugImg.vue";
import Demo from "./Demo.vue";
import { withDelay, getImgUrl, debugMode } from "../helpers";
import { vFade } from "../../src/";
</script>

<template>
  <Demo>
    <div class="container">
      <DebugImg
        :enabled="debugMode"
        v-for="i in 20"
        :key="i"
        v-slot="{ onLoad }"
      >
        <img
          v-fade
          @load="onLoad"
          :src="withDelay(getImgUrl(`v-fade-${i}`), 1000)"
          alt=""
          class="demo-img"
          width="300"
          height="300"
        />
      </DebugImg>
    </div>
  </Demo>
</template>
