import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vue Image Fade",
  description: "Simple Image Fade Directive for Vue 3",
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
            text: "Using v-fade-all",
            link: "/demo/using-v-fade-all",
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