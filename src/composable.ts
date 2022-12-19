import type { BindingValue } from "./types";

export const useFade = (el: HTMLElement, props: BindingValue) => {
  const duration = props?.duration ?? 500;
  const delay = props?.delay ?? 0;

  el.style.opacity = `0`;

  const onload = () => {
    el.animate([{ opacity: 0 }, { opacity: 1 }], {
      easing: "ease-out",
      delay,
      duration,
      iterations: 1,
      fill: "forwards",
    });
  };
  el.addEventListener("load", onload, { once: true });
};
