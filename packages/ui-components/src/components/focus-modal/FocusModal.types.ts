import type { ReactNode } from "react";

export interface FocusModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Modal content */
  children?: ReactNode;
  /** Modal title */
  title?: string;
  /** Callback when modal closes */
  onClose?: () => void;
  /** Modal size */
  size?: "small" | "medium" | "large";
  /** Additional CSS class */
  className?: string;
}

export interface FocusModalHeaderProps {
  children: ReactNode;
}

export interface FocusModalTitleProps {
  children: ReactNode;
}

export interface FocusModalDescriptionProps {
  children: ReactNode;
}

export interface FocusModalBodyProps {
  children: ReactNode;
  className?: string;
}

export interface FocusModalFooterProps {
  children: ReactNode;
  className?: string;
}

export interface FocusModalCloseProps {
  children?: ReactNode;
  onClick?: () => void;
  asChild?: boolean;
}

export interface FocusModalContentProps {
  children: ReactNode;
}
