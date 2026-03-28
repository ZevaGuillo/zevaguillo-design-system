import type { ReactNode } from "react";

export interface FocusModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Modal content */
  children: ReactNode;
  /** Modal title */
  title?: string;
  /** Callback when modal closes */
  onClose?: () => void;
  /** Modal size */
  size?: "small" | "medium" | "large";
  /** Additional CSS class */
  className?: string;
}
