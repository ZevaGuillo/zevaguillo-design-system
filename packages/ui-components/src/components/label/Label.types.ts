import type { ReactNode } from "react";

export interface LabelProps {
  /** Label text */
  children: ReactNode;
  /** Label size */
  size?: "xsmall" | "small" | "base" | "large";
  /** Font weight */
  weight?: "regular" | "medium";
  /** Whether the label is disabled */
  disabled?: boolean;
  /** HTML for attribute */
  htmlFor?: string;
  /** Additional CSS class */
  className?: string;
}
