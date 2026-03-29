import type { ReactNode } from "react";

export interface PopoverProps {
  /** Trigger element */
  trigger?: ReactNode;
  /** Popover content */
  content?: ReactNode;
  /** Children (alternative to trigger/content) */
  children?: ReactNode;
  /** Whether the popover is open */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Popover position */
  position?: "top" | "bottom" | "left" | "right";
  /** Additional CSS class */
  className?: string;
}
