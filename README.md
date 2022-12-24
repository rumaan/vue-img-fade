# Vue Image Fade
One liner image fade plugin that adds transitions to images on load.

## Features
- 🚥 Lightweight ~1kB gzip
- ️️⛑️ Typescript + Vite
- 🛠️ Simple One-Liner Directive
- ✨ Web Animations API for customizing timelines

## Installation and Usage
```sh
yarn add vue-img-fade
```

`v-fade`:
```vue
<script setup lang="ts">
import { vFade } from "vue-img-fade";
</script>
<template>
  <div>
    <img v-fade src="..." alt="..." width="100" height="100">
  </div>
</template>
```

`v-fade-auto`:
```vue
<script setup lang="ts">
import { vFadeAuto } from "vue-img-fade";
</script>
<template>
  <div v-fade-auto>
    <!-- width/height is required for v-fade-auto to work correctly -->
    <img src="..." alt="..." width="100" height="100">
    <img src="..." alt="..." width="100" height="100">
    <!-- ... -->
    <img src="..." alt="..." width="100" height="100">
  </div>
</template>
```

## Custom Options
```vue
<template>
  <img v-fade="{ keyframes, animationOptions }" />
</template>
```

## Docs
https://vue-img-fade.vercel.app

## Demo
https://vue-img-fade.vercel.app/demo/using-v-fade.html