import type { ReactNode } from "react";

export interface StatusBadgeProps {
  /** Badge content */
  children: ReactNode;
  /** Badge variant */
  variant?: "default" | "success" | "warning" | "danger" | "info";
  /** Badge dot color */
  dotColor?: "default" | "green" | "yellow" | "red" | "blue";
  /** Additional CSS class */
  className?: string;
}
