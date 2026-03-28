import type { ReactNode } from "react";

export interface TextProps {
  /** Text size */
  size?: "xsmall" | "small" | "base" | "large" | "xlarge";
  /** Font weight */
  weight?: "regular" | "medium" | "semibold" | "bold";
  /** Font family */
  family?: "sans" | "mono";
  /** Line height */
  leading?: "normal" | "compact";
  /** Text content */
  children: ReactNode;
  /** HTML element to render */
  as?: "p" | "span" | "div";
  /** Additional CSS class */
  className?: string;
}
