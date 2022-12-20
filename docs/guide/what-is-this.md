---
title: What is Vue Image Fade Plugin?
---

# What is this plugin?

TL;DR It's a vue plugin that simplifies animating images on load.

This plugin more or less does the following:

```js
// For each image element
imageElement.addEventListener("load", (e) => {
  // Animate img here
});
```

But this plugin allows you to just slap a simple `v-fade` [directive](https://vuejs.org/guide/reusability/custom-directives.html#custom-directives) on the image element and you're done. Moreover this plugin also comes with another directive `v-fade-all` which can be added to any parent or container element and will automatically grab all child image elements that are visible in the viewport and animate them correctly (i.e run the animation only when all the images visible in viewport are done loading).

## Animating Images on load

When it comes to loading images, depending on the image size, resolution etc. it can take varied amount of time for each image to load. Let's say we wanted to have a subtle staggered fade-in effect on the loaded images here's what happens if you just add an event listener for `load` event and try to animate the image. See the demo [here](/guide/bad-fade).

<video class="video" poster="/bad-fade-demo-poster.png" muted loop controls playsinline>
  <source src="/bad-fade-demo.webm" type="video/webm"/>
  <source src="/bad-fade-demo.mp4" type="video/mp4"/>
</video>
