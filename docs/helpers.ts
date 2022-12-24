import { useStorage } from "@vueuse/core";

export const withDelay = (url: string, ms: number = 0) => {
  if (ms <= 0) {
    return url;
  }
  return `https://app.requestly.io/delay/${ms}/${url}`;
};

export const getImgUrl = (seed = "v-fade-1") => {
  return `https://picsum.photos/seed/${seed}/300/300`;
};

export const debugMode = useStorage<boolean>("debugMode", import.meta.env.DEV);