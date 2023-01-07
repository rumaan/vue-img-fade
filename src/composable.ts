import type { BindingValue } from "./types";

export const useFade = (el: HTMLElement, props: BindingValue) => {
  const duration = props?.animationOptions?.duration ?? 500;
  const delay = props?.animationOptions?.delay ?? 0;

  el.style.opacity = `0`;

  const onload = () => {
    const animation = el.animate([{ opacity: 0 }, { opacity: 1 }], {
      easing: "ease-out",
      delay,
      duration,
      iterations: 1,
      fill: "forwards",
    });
    animation.addEventListener(
      "finish",
      () => {
        animation.commitStyles();
      },
      { once: true }
    );
  };
  el.addEventListener("load", onload, { once: true });
};
