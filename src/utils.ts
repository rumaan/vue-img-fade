export const _defaultTimeout = 4000; // 4s

const _defaultAnimationOptions: KeyframeAnimationOptions = {
  duration: 500,
  easing: "ease-out",
  iterations: 1,
  fill: "forwards",
};

const _defaultKeyFrames: Keyframe[] = [
  { opacity: 0, transform: `translate3D(0, 5px, 0)` },
  { opacity: 1, transform: `translate3D(0, 0, 0)` },
];

const reducedMotionKeyFrames: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];

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
