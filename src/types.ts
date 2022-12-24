import type { ObjectDirective } from "vue";

// #region KeyframeOptionsSnippet
export type KeyframeOptions = KeyframeAnimationOptions & {
  /**
   * Amount of time in milliseconds to wait until all images visible in viewport have finished loading when using `v-fade-auto`
   * @default 4000
   */
  animationTimeout?: number;
  /**
   * Use this function to create custom delay for individual img items when using `v-fade-auto`
   * @param itemIndex Index of the img element
   * @returns Computed delay for animation
   */
  itemDelayFn?: (itemIndex: number) => number;
};
// #endregion KeyframeOptionsSnippet

// #region OptionsSnippet
export type Options = {
  keyframes?: Keyframe[];
  animationOptions?: KeyframeOptions;
};
// #endregion OptionsSnippet

export type BindingValue = Partial<Options> | undefined;

export type DirectiveType = ObjectDirective<HTMLElement, BindingValue>;
