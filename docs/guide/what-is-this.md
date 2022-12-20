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

But this plugin allows you to just slap a
simple `v-fade` [directive](https://vuejs.org/guide/reusability/custom-directives.html#custom-directives) on the image
element, and you're done. Moreover, this plugin also comes with another directive `v-fade-all` which can be added to any
parent or container element and will automatically grab all child image elements that are visible in the viewport and
animate them correctly (i.e. run the animation only when all the images visible in viewport are done loading).

## Animating Images on load

When it comes to loading images, depending on the image size, resolution etc. it can take varied amount of time for each
image to load. Let's say we wanted to have a subtle staggered fade-in effect on the loaded images here's what happens if
you just add an event listener for `load` event and try to animate the image. See the demo [here](/guide/bad-fade).

<video class="video" poster="/bad-fade-demo-poster.png" muted controls loop preload="auto" playsinline>
  <source src="/bad-fade-demo.webm" type="video/webm"/>
  <source src="/bad-fade-demo.mp4" type="video/mp4"/>
</video>

As you can see the animation doesn't exactly look *orchestrated* and seamless.
We can kinda solve this by initiating the animation only when all the images have been loaded. This plugin does exactly
that but there's a small *caveat*, by doing this the animation start time is directly
dependent on the largest image in the list (or the time it takes for the largest image to load).

```js
// For each image element
imageElement.addEventListener("load", (e) => {
  if (areAllImagesDoneLoading) {
    // Animate img here
  }
});
```

One solution to this can be to only wait for images that
*would be visible* in the viewport to load and animate those in.

```js
// For each image element visible in viewport
// Using InterSectionObserver API
imageElement.addEventListener("load", (e) => {
  if (areAllImagesDoneLoading) {
    // Animate img here
  }
});
```

We would also need a fallback timeout to bail out on the waiting of all images in the viewport being loaded since there
might be a case where some images in the viewport may load very slowly and the page might look blank for lot longer than
we need.

<video class="video" poster="/good-fade-demo-poster.png" muted controls loop preload="auto" playsinline>
  <source src="/good-fade-demo.webm" type="video/webm"/>
  <source src="/good-fade-demo.mp4" type="video/mp4"/>
</video>
