import { _defaultAnimationOptions, _defaultKeyFrames, reducedMotionKeyFrames } from "./defaults";

const prefersReducedMotion = (): boolean => {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
};

type Options = { keyframes?: Keyframe[]; animationOptions?: KeyframeAnimationOptions }

export const animateEl = (el: HTMLElement, options?: Options) => {
  let _animationOptions: KeyframeAnimationOptions = _defaultAnimationOptions;
  let _keyframes: Keyframe[] = prefersReducedMotion() ? reducedMotionKeyFrames : _defaultKeyFrames;

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
  animation.addEventListener("finish", () => {
    el.style.opacity = "1"; // animate() doesn't update style attributes
  }, { once: true });
};
