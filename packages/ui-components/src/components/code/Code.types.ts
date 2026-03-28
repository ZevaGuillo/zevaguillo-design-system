import type { ReactNode } from "react";

export interface CodeProps {
  /** Code content */
  children: ReactNode;
  /** Code variant */
  variant?: "neutral" | "ghost";
  /** Additional CSS class */
  className?: string;
}
