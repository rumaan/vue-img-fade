import { defineConfig, type BuildOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const buildLibConfig: BuildOptions = {
  lib: {
    entry: resolve(__dirname, "src/index.ts"),
    name: "VueImgFade",
    fileName: "vue-img-fade",
  },
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
};

const buildDocsConfig: BuildOptions = {
  outDir: "docs",
};

const buildConfig = process.env.BUNDLE ? buildLibConfig : buildDocsConfig;

console.log("Building ->", process.env.BUNDLE ? "Library" : "Docs");

export default defineConfig({
  plugins: [vue()],
  build: buildConfig,
});
