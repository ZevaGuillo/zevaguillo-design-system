import type { ReactNode } from "react";

export interface TooltipProps {
  /** Tooltip content */
  content: ReactNode;
  /** Children to trigger tooltip */
  children: ReactNode;
  /** Tooltip position */
  position?: "top" | "bottom" | "left" | "right";
  /** Additional CSS class */
  className?: string;
}
