import type { ObjectDirective } from "vue";

export type BindingValueProps = {
  duration?: number;
  delay?: number;
  /**
   * Timeout to wait for all images to be loaded in milliseconds
   * @default 2000
   */
  bailOutAnimationTime?: number;
}; // TODO: add more props

export type BindingValue = Partial<BindingValueProps> | undefined;

export type DirectiveType = ObjectDirective<HTMLElement, BindingValue>;
