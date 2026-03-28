import type { ReactNode } from "react";

export interface CardProps {
  /** Card content */
  children: ReactNode;
  /** Card title */
  title?: string;
  /** Card description */
  description?: string;
  /** Card footer */
  footer?: ReactNode;
  /** Whether to show a border */
  bordered?: boolean;
  /** Whether to show a shadow */
  elevated?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Padding size */
  padding?: "none" | "small" | "medium" | "large";
}
