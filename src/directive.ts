import type { DirectiveType } from "./types";
import { useFade } from "./composable";
import { animateEl } from "./utils";

export const vFade: DirectiveType = {
  mounted(el, binding) {
    if (el.tagName !== "IMG") {
      console.error(
        "vFadeIn Error: This directive can be used only on <img> elements"
      );
      return;
    }
    useFade(el, binding.value);
  },
};

export const vFadeAll: DirectiveType = {
  mounted(el, binding) {
    // Find all child <img> nodes
    let allImgs = Array.from(el.querySelectorAll("img"));

    const intersectionObserverCb: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      let currentLoadedImages = 0;
      const totalVisibleItems = entries.filter((entry) => entry.isIntersecting);
      const imgEls = allImgs.slice(0, totalVisibleItems.length);
      const onload = () => {
        currentLoadedImages++;
        if (currentLoadedImages === totalVisibleItems.length) {
          // All images within intersection have been loaded
          imgEls.forEach((img, index) => {
            animateEl(img, {
              animationOptions: {
                duration: 500,
                easing: "ease-out",
                iterations: 1,
                fill: "forwards",
                delay: index * 25,
              },
            });
          });
        }
      };

      entries.forEach((entry, index) => {
        const img = entry.target as HTMLImageElement;
        // Debug
        entry.target.setAttribute(
          "data-fade-initially-visible",
          String(entry.isIntersecting)
        );

        if (!entry.isIntersecting) {
          img.style.opacity = "1";
        } else {
          img.loading = "eager";
          img.addEventListener("load", onload, { once: true });
          // if we have the img already loaded, in cache perhaps
          if (img.complete) {
            animateEl(img, {
              animationOptions: {
                duration: 500,
                easing: "ease-out",
                iterations: 1,
                fill: "forwards",
                delay: index * 25,
              },
            });
          }
        }

        // Observe each entry only once
        observer.unobserve(entry.target);
      });
    };

    const intersectionObserver = new IntersectionObserver(
      intersectionObserverCb,
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.01,
      }
    );

    allImgs.forEach((el) => {
      el.style.opacity = "0";
      intersectionObserver.observe(el);
    });
  },
};
