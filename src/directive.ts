import type { DirectiveType } from "./types";
import { animateEl } from "./utils";
import { _defaultTimeout } from "./defaults";

export const vFade: DirectiveType = {
  mounted(el, binding) {
    if (el.tagName !== "IMG") {
      console.error(
        "vFadeIn Error: This directive can be used only on <img> elements"
      );
      return;
    }
    const img = el as HTMLImageElement;
    img.style.opacity = "0";
    if (img.complete) {
      animateEl(img);
    } else {
      img.addEventListener(
        "load",
        () => {
          animateEl(img);
        },
        { once: true }
      );
    }
  },
};

export const vFadeAuto: DirectiveType = {
  mounted(el, binding) {
    const allImgs = Array.from(el.querySelectorAll("img"));
    const startTime = Date.now();
    const bailOutAnimationTime =
      binding.value?.animationOptions?.animationTimeout ?? _defaultTimeout;

    const intersectionObserverCb: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      console.log("intersection observer called");
      let currentLoadedImages = 0;
      const totalVisibleItems = entries.filter(
        (entry) => entry.isIntersecting
      ).length;
      const imgEls = allImgs.slice(0, totalVisibleItems);

      const loadedImages: HTMLElement[] = [];

      const animateLoadedImages = () => {
        while (loadedImages.length) {
          const el = loadedImages.pop();
          if (el) {
            animateEl(el);
          }
        }
      };

      const onload = (e: Event) => {
        const img = e.target as HTMLImageElement;
        loadedImages.push(img);
        console.log(
          "onload event called for img index -> " +
            img.dataset?.index?.toString()
        );
        const lapsedTime = Date.now() - startTime;
        if (lapsedTime > bailOutAnimationTime) {
          console.log("time elapsed -- bailing out of all load");
          // Image took way too long to load
          // so don't wait for other images to finish loading
          animateLoadedImages();
        } else {
          currentLoadedImages++;
          if (currentLoadedImages === totalVisibleItems) {
            console.log("all images have been loaded");
            // All images within intersection have been loaded
            imgEls.forEach((img, index) => {
              animateEl(img, {
                animationOptions: {
                  delay:
                    index *
                    (binding.value?.animationOptions?.staggeredItemDelay ?? 0),
                },
              });
            });
          }
        }
      };

      entries.forEach((entry, index) => {
        const img = entry.target as HTMLImageElement;
        // Debug
        img.dataset.initiallyVisible = String(entry.isIntersecting);

        // If image was already loaded previously
        if (img.complete) {
          animateEl(img, {
            animationOptions: {
              delay:
                index *
                (binding.value?.animationOptions?.staggeredItemDelay ?? 0),
            },
          });
        } else {
          if (!entry.isIntersecting) {
            img.addEventListener(
              "load",
              () => {
                animateEl(img);
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
      console.log("setting defaults for all imgs");
      if (!el.getAttribute("width") || !el.getAttribute("height")) {
        console.error("Image doesn't have width or height property set.", el);
      }
      el.style.opacity = "0";
      el.dataset.index = String(index);
      intersectionObserver.observe(el);
    });
  },
};
