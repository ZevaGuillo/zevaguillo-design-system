import type { ReactNode } from "react";

export interface ToastProps {
  /** Toast id */
  id: string;
  /** Toast title */
  title?: string;
  /** Toast message */
  message: ReactNode;
  /** Toast variant */
  variant?: "success" | "error" | "warning" | "info";
  /** Auto dismiss duration (ms) */
  duration?: number;
  /** Dismiss handler */
  onDismiss?: (id: string) => void;
}
