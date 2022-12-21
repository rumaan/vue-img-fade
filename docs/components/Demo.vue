<script lang="ts" setup>
import { debugMode } from "../helpers";
</script>

<template>
  <section class="demo">
    <div class="debug-mode-container">
      <input id="debug" type="checkbox" v-model="debugMode">
      <label for="debug">Debug mode</label>
    </div>
    <slot></slot>
  </section>
</template>

<style scoped>
.debug-mode-container {
  margin-bottom: 8px;
}

.debug-mode-container label {
  font-size: 14px;
}
</style>