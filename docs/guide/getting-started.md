# Getting Started
This plugin comes with two directives `v-fade` and `v-fade-auto`. 
`v-fade` can be added to individual `<img>` element and `v-fade-auto` directive can be added to a parent image gallery or grid component. See [demo here](/demo/using-v-fade).

This plugin only works with Vue 3.x+ and also requires [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) support on the client. So you might need to add a polyfill for that based on minimum browser version you target. I would recommend using either [intersection-observer polyfill](https://github.com/GoogleChromeLabs/intersection-observer#readme) or service like [polyfill.io](https://polyfill.io).
## 1. Install the plugin
Add the plugin as dependency to your vue project
```sh
yarn add vue-img-fade
```

## 2. Import and use the directive

The custom directives can be imported as shown [here](https://vuejs.org/api/sfc-script-setup.html#using-custom-directives).

**Using `v-fade`**:
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
**Using `v-fade-auto`**:
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
::: warning NOTE
When using `v-fade-auto` directive, `<img>` elements should have `width` and `height` property set for it to work properly.
:::