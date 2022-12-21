import type { BindingValue } from "./types";

export const useFade = (el: HTMLElement, props: BindingValue) => {
  const duration = props?.duration ?? 500;
  const delay = props?.delay ?? 0;

  el.style.opacity = `0`;

  const onload = () => {
    const animation = el.animate([{ opacity: 0 }, { opacity: 1 }], {
      easing: "ease-out",
      delay,
      duration,
      iterations: 1,
      fill: "forwards",
    });
    animation.addEventListener("finish", () => {
      el.style.opacity = "1"; // animate() doesn't update style attributes
    }, { once: true });
  };
  el.addEventListener("load", onload, { once: true });
};
