<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { vFade } from "../../src/directive";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = withDefaults(defineProps<{ enabled?: boolean }>(), {
  enabled: true,
});

const loaded = ref<boolean>(false);
const elapsedTime = ref<number>(0);

let timer: number | undefined;

const tick = () => {
  elapsedTime.value += 0.01;
  timer = requestAnimationFrame(tick);
};

onMounted(() => {
  timer = requestAnimationFrame(tick);
});

onBeforeUnmount(() => {
  if (timer !== undefined) {
    cancelAnimationFrame(timer);
  }
});

const onLoadComplete = () => {
  if (timer !== undefined) {
    cancelAnimationFrame(timer);
  }
  loaded.value = true;
};

const status = computed<string>(() => {
  return loaded.value ? "loaded" : "loading";
});

</script>

<template>
  <div class="wrapper">
    <slot v-bind:onLoad="onLoadComplete"></slot>
    <div v-if="enabled" class="stats">
      <span>time: {{ elapsedTime.toFixed(2) }}s</span>
      <span>status: <span :class="status">{{ status }}</span></span>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: inline-block;
  height: 100%;
}

.stats {
  font-size: 9px;
  font-weight: bold;
  line-height: 10px;
  display: flex;
  text-align: left;
  flex-direction: column;
  font-family: ui-monospace, monospace;
  padding: 2px 3px;
  background-color: rgb(0 0 0 / 0.75);
  color: white;
  position: absolute;
  right: 0;
  top: 0;
}

.stats .loaded {
  color: mediumspringgreen;
}

.stats .loading {
  color: darkorange;
}
</style>