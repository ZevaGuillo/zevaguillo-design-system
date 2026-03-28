import type { ReactNode } from "react";

export interface HintProps {
  /** Hint content */
  children: ReactNode;
  /** Hint variant */
  variant?: "default" | "error" | "success" | "warning";
  /** Additional CSS class */
  className?: string;
}
