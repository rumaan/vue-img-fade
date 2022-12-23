import {
  _defaultAnimationOptions,
  _defaultKeyFrames,
  _reducedMotionKeyFrames,
} from "./defaults";
import type { Options } from "./types";

const prefersReducedMotion = (): boolean => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const animateEl = (el: HTMLElement, options?: Options) => {
  let _animationOptions: KeyframeAnimationOptions = _defaultAnimationOptions;
  let _keyframes: Keyframe[] = prefersReducedMotion()
    ? _reducedMotionKeyFrames
    : _defaultKeyFrames;

  if (options) {
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
      el.style.opacity = "1"; // animate() doesn't update style attributes
    },
    { once: true }
  );
};
