import type { ObjectDirective } from "vue";

export type BindingValueProps = { duration: number; delay: number }; // TODO: add more props

export type BindingValue = Partial<BindingValueProps> | undefined;

export type DirectiveType = ObjectDirective<HTMLElement, BindingValue>;
