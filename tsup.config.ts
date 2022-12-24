import { defineConfig } from "tsup";
import analyze from "rollup-plugin-analyzer"

export default defineConfig({
  entry: ["src/index.ts"],
  minify: true,
  clean: true,
  target: "esnext",
  format: ["esm", "cjs"],
  external: ["vue"],
  dts: true,
});
