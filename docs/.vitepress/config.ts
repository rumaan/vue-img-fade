import { defineConfig } from "vitepress";
import "../style.css";

export default defineConfig({
  lang: "en-US",
  lastUpdated: true,
  title: "Vue Image Fade",
  description: "Simple Image Fade Directive for Vue 3",
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  head: [
    [
      "script",
      {
        defer: "defer",
        src: "https://polyfill.io/v3/polyfill.min.js?version=3.111.0&features=IntersectionObserver%2CIntersectionObserverEntry",
      },
    ],
    [
      "script",
      {
        "data-goatcounter": "https://vue-img-fade.goatcounter.com/count",
        async: "async",
        src: "https://gc.zgo.at/count.js",
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
        text: "API",
        items: [
          {
            text: "API Reference",
            link: "/api",
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
      copyright: "Copyright © 2022-PRESENT Rumaan K",
    },
  },
});
