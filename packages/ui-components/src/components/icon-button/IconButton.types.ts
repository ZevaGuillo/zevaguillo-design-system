import type { ReactNode } from "react";

export interface IconButtonProps {
  /** Icon button content */
  children: ReactNode;
  /** Button variant */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Button size */
  size?: "small" | "medium" | "large";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Click handler */
  onClick?: () => void;
  /** Tooltip text */
  title?: string;
  /** Additional CSS class */
  className?: string;
}
