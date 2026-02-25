import type { BindingValue } from "./types";
import { animateEl } from "./utils";

export const useFade = (el: HTMLElement, props: BindingValue) => {
  el.style.opacity = `0`;

  const img = el as HTMLImageElement;
  if (img.complete) {
    animateEl(el, props);
  } else {
    el.addEventListener(
      "load",
      () => {
        animateEl(el, props);
      },
      { once: true }
    );
  }
};
