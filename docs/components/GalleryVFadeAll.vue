<script setup lang="ts">
import { vFadeAuto } from "../../src";
import Demo from "./Demo.vue";
import DebugImg from "./DebugImg.vue";
import { getImgUrl, debugMode } from "../helpers";
</script>

<template>
  <Demo>
    <div
      v-fade-auto="{
        animationOptions: { itemDelayFn: (index) => index * 25 },
        keyframes: [
          { opacity: 0, transform: 'translate3d(0, 5px, 0)' },
          { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        ],
      }"
      class="container"
    >
      <DebugImg
        :enabled="debugMode"
        v-for="i in 50"
        :key="i"
        v-slot="{ onLoad }"
      >
        <img
          @load="onLoad"
          :src="getImgUrl(`v-fade-${i}`)"
          alt=""
          class="demo-img"
          width="300"
          height="300"
        />
      </DebugImg>
    </div>
  </Demo>
</template>
