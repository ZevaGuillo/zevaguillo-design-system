import type { ReactNode } from "react";

export interface IconBadgeProps {
  /** Icon badge content */
  children: ReactNode;
  /** Badge variant */
  variant?: "default" | "success" | "warning" | "danger" | "info";
  /** Badge size */
  size?: "small" | "medium" | "large";
  /** Additional CSS class */
  className?: string;
}
