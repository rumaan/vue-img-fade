import {
  _defaultAnimationOptions,
  _defaultKeyFrames,
  _reducedMotionKeyFrames,
  _reducedMotionAnimationOptions,
} from "./defaults";
import type { Options } from "./types";

const prefersReducedMotion = (): boolean => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const animateEl = (el: HTMLElement, options?: Options) => {
  const reducedMotion = prefersReducedMotion();

  let _animationOptions: KeyframeAnimationOptions = reducedMotion
    ? _reducedMotionAnimationOptions
    : _defaultAnimationOptions;
  let _keyframes: Keyframe[] = reducedMotion
    ? _reducedMotionKeyFrames
    : _defaultKeyFrames;

  if (options && !reducedMotion) {
    const { animationOptions, keyframes } = options;
    _animationOptions = {
      ..._defaultAnimationOptions,
      ...animationOptions,
    };
    if (keyframes) {
      _keyframes = keyframes;
    }
  }

  const animation = el.animate(_keyframes, _animationOptions);
  animation.addEventListener(
    "finish",
    () => {
      try {
        animation.commitStyles();
      } catch {
        // Element may have been removed from the DOM before animation finished
        el.style.opacity = "1";
      }
    },
    { once: true }
  );
};
