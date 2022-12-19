export const animateEl = (
  el: HTMLElement,
  {
    keyframes = [
      { opacity: 0, transform: `translate3D(0, 5px, 0)` },
      { opacity: 1, transform: `translate3D(0, 0, 0)` },
    ],
    animationOptions,
  }: { keyframes?: Keyframe[]; animationOptions?: KeyframeAnimationOptions }
) => {
  const animation = el.animate(keyframes, animationOptions);
  animation.onfinish = () => {
    el.style.opacity = "1"; // animate() doesn't update style attributes
  };
};
