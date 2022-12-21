import { defineConfig } from "vitepress";
import "../style.css";

export default defineConfig({
  cleanUrls: "without-subfolders",
  title: "Vue Image Fade",
  description: "Simple Image Fade Directive for Vue 3",
  head: [
    [
      "script",
      {
        defer: "defer",
        src: "https://polyfill.io/v3/polyfill.min.js?version=3.111.0&features=IntersectionObserver%2CIntersectionObserverEntry",
      },
    ],
  ],
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/rumaan/vue-img-fade" },
    ],
    nav: [
      {
        text: "Guide",
        link: "/guide/what-is-this",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "What is this plugin?",
            link: "/guide/what-is-this",
          },
          {
            text: "Getting Started",
            link: "/guide/getting-started",
          },
        ],
      },
      {
        text: "Demos",
        items: [
          {
            text: "Using v-fade",
            link: "/demo/using-v-fade",
          },
          {
            text: "Using v-fade-auto",
            link: "/demo/using-v-fade-auto",
          },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-PRESENT Rumaan",
    },
  },
});
