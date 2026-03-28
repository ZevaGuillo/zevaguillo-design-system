import type { ReactNode } from "react";

export interface ToasterProps {
  /** Toasts to display */
  toasts?: Array<{
    id: string;
    message: string;
    variant?: "default" | "success" | "error" | "warning";
  }>;
  /** Toaster position */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Additional CSS class */
  className?: string;
}
