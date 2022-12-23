import type { ObjectDirective } from "vue";

export type KeyframeOptions = KeyframeAnimationOptions & {
  animationTimeout?: number;
  delayFn?: (itemIndex: number) => number;
};

export type Options = {
  keyframes?: Keyframe[];
  animationOptions?: KeyframeOptions;
};

export type BindingValue = Partial<Options> | undefined;

export type DirectiveType = ObjectDirective<HTMLElement, BindingValue>;
