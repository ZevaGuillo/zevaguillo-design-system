import type { ReactNode } from "react";

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: ReactNode;
  /** Modal footer */
  footer?: ReactNode;
  /** Close handler */
  onClose: () => void;
  /** Modal size */
  size?: "small" | "medium" | "large";
}
