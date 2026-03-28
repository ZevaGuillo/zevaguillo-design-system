import type { ReactNode } from "react";

export interface InlineTipProps {
  /** Tip content */
  children: ReactNode;
  /** Tip variant */
  variant?: "default" | "tip" | "important" | "warning";
  /** Additional CSS class */
  className?: string;
}
