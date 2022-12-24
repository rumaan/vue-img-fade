---
title: API Reference
---

# API Reference

## `v-fade`

Use this directive directly on an `img` element to apply transition on load.

**Directive Options**:

<<< @/../src/types.ts#OptionsSnippet

**Types**:

`Keyframes`: Default [Keyframe](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) type from [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

`KeyframeOptions`:

<<< @/../src/types.ts#KeyframeOptionsSnippet

`KeyframeAnimationOptions`: [Keyframe timing and attributes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#attributes) from Web Animations API.

**Usage**:

```vue
<template>
  <img v-fade="{ keyframes, animationOptions }" />
</template>
```
See [demo](/demo/using-v-fade).

## `v-fade-auto`

Use this directive on a parent element that has multiple child `img` elements. This directive waits for all the images visible in the viewport to load and runs the animation.

::: warning NOTE
This directive requires each child image element to have `width` and `height` properties to be explicitly set for it to work properly.
:::

**Directive Options**:

<<< @/../src/types.ts#OptionsSnippet

**Types**:

`Keyframes`: Default [Keyframe](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) type from [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

`KeyframeOptions`:

<<< @/../src/types.ts#KeyframeOptionsSnippet

`KeyframeAnimationOptions`: [Keyframe timing and attributes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#attributes) from Web Animations API.

**Usage**:

```vue
<template>
  <!-- some img grid container -->
  <div class="container" v-fade-auto="{ keyframes, animationOptions }" />
</template>
```

See [demo](/demo/using-v-fade-auto).