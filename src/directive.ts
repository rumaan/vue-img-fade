import type { DirectiveType } from "./types";
import { animateEl } from "./utils";
import { _defaultTimeout } from "./defaults";

export const vFade: DirectiveType = {
  mounted(el, binding) {
    if (el.tagName !== "IMG") {
      console.error(
        "vFade Error: This directive can be used only on <img> elements"
      );
      return;
    }
    const img = el as HTMLImageElement;
    img.style.opacity = "0";
    if (img.complete) {
      animateEl(img, binding.value);
    } else {
      img.addEventListener(
        "load",
        () => {
          animateEl(img, binding.value);
        },
        { once: true }
      );
    }
  },
};

const cleanupMap = new WeakMap<
  HTMLElement,
  { observer: IntersectionObserver; timeoutId: ReturnType<typeof setTimeout> }
>();

export const vFadeAuto: DirectiveType = {
  mounted(el, binding) {
    const allImgs = Array.from(el.querySelectorAll("img"));
    const startTime = Date.now();
    const bailOutAnimationTime =
      binding.value?.animationOptions?.animationTimeout ?? _defaultTimeout;
    let loadedImages: HTMLImageElement[] = [];

    const animateLoadedImages = () => {
      for (const img of loadedImages) {
        animateEl(img, binding.value);
      }
      loadedImages = [];
    };

    const timeoutId = setTimeout(() => {
      if (loadedImages.length) {
        animateLoadedImages();
      }
    }, bailOutAnimationTime);

    const intersectionObserverCb: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      const nonCompleteVisibleCount = visibleEntries.filter((entry) => {
        const img = entry.target as HTMLImageElement;
        return !img.complete;
      }).length;
      let currentLoadedImages = 0;

      const onload = (e: Event) => {
        const img = e.target as HTMLImageElement;
        loadedImages.push(img);
        const lapsedTime = Date.now() - startTime;
        if (lapsedTime > bailOutAnimationTime) {
          // Image took way too long to load
          // so don't wait for other images to finish loading
          // This edge case can happen when this image finished loading after setTimeout has already run
          animateLoadedImages();
        } else {
          currentLoadedImages++;
          if (currentLoadedImages === nonCompleteVisibleCount) {
            // All non-cached visible images have been loaded
            // Animate them all together with staggered delays
            const allVisibleImgs = visibleEntries.map(
              (entry) => entry.target as HTMLImageElement
            );
            allVisibleImgs.forEach((img) => {
              const imgIndex = Number(img.dataset.index ?? 0);
              const delay =
                binding.value?.animationOptions?.itemDelayFn?.(imgIndex) ?? 0;
              animateEl(img, {
                animationOptions: {
                  ...binding.value?.animationOptions,
                  delay,
                },
                keyframes: binding.value?.keyframes,
              });
            });
            loadedImages = [];
          }
        }
      };

      entries.forEach((entry) => {
        const img = entry.target as HTMLImageElement;
        const imgIndex = Number(img.dataset.index ?? 0);
        // Debug
        img.dataset.initiallyVisible = String(entry.isIntersecting);

        // If image was already loaded previously (cached)
        if (img.complete) {
          const delay =
            binding.value?.animationOptions?.itemDelayFn?.(imgIndex) ?? 0;
          animateEl(img, {
            animationOptions: {
              ...binding.value?.animationOptions,
              delay,
            },
            keyframes: binding.value?.keyframes,
          });
        } else {
          if (!entry.isIntersecting) {
            img.addEventListener(
              "load",
              () => {
                animateEl(img, binding.value);
              },
              { once: true }
            );
          } else {
            // Don't want lazy loading images that are currently visible on viewport
            img.loading = "eager";
            img.addEventListener("load", onload, { once: true });
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

    allImgs.forEach((el, index) => {
      if (!el.getAttribute("width") || !el.getAttribute("height")) {
        console.error("Image doesn't have width or height property set.", el);
      }
      el.style.opacity = "0";
      el.dataset.index = String(index);
      intersectionObserver.observe(el);
    });

    cleanupMap.set(el, { observer: intersectionObserver, timeoutId });
  },

  unmounted(el) {
    const cleanup = cleanupMap.get(el);
    if (cleanup) {
      cleanup.observer.disconnect();
      clearTimeout(cleanup.timeoutId);
      cleanupMap.delete(el);
    }
  },
};
