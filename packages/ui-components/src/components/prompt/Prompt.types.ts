import type { ReactNode } from "react";

export interface PromptProps {
  /** Whether the prompt is open */
  open: boolean;
  /** Prompt title */
  title?: string;
  /** Prompt content */
  children: ReactNode;
  /** Confirm button text */
  confirmText?: string;
  /** Cancel button text */
  cancelText?: string;
  /** Callback when confirmed */
  onConfirm?: () => void;
  /** Callback when cancelled */
  onCancel?: () => void;
  /** Whether to show cancel button */
  showCancel?: boolean;
  /** Confirm button variant */
  variant?: "primary" | "danger";
  /** Additional CSS class */
  className?: string;
}
