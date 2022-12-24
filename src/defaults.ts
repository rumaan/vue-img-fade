const _defaultTimeout = 4000; // 4s

const _defaultAnimationOptions: KeyframeAnimationOptions = {
  duration: 500,
  easing: "ease-out",
  iterations: 1,
  fill: "forwards",
};

const _defaultKeyFrames: Keyframe[] = [
  { opacity: 0 },
  { opacity: 1 },
];

const _reducedMotionKeyFrames: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];

export { _defaultTimeout, _defaultKeyFrames, _defaultAnimationOptions, _reducedMotionKeyFrames };