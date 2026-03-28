import type { ReactNode } from "react";

export interface ButtonProps {
  /** Variant of the button */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  /** Size of the button */
  size?: "small" | "medium" | "large";
  /** Button content */
  children: ReactNode;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is loading */
  loading?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Click handler */
  onClick?: () => void;
}
