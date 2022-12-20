export const animateEl = (
  el: HTMLElement,
  {
    keyframes,
    animationOptions,
  }: { keyframes?: Keyframe[]; animationOptions?: KeyframeAnimationOptions }
) => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const defaultKeyFrames = [
    { opacity: 0, transform: `translate3D(0, 5px, 0)` },
    { opacity: 1, transform: `translate3D(0, 0, 0)` },
  ];
  const reducedMotionKeyFrames = [{ opacity: 0 }, { opacity: 1 }];
  const _keyframes =
    keyframes ?? (reducedMotion ? reducedMotionKeyFrames : defaultKeyFrames);
  const animation = el.animate(_keyframes, animationOptions);
  animation.onfinish = () => {
    el.style.opacity = "1"; // animate() doesn't update style attributes
  };
};
