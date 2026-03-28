import type { ReactNode } from "react";

export interface DrawerProps {
  /** Whether the drawer is open */
  open: boolean;
  /** Drawer content */
  children: ReactNode;
  /** Drawer position */
  position?: "left" | "right" | "top" | "bottom";
  /** Drawer size */
  size?: "small" | "medium" | "large";
  /** Callback when drawer closes */
  onClose?: () => void;
  /** Additional CSS class */
  className?: string;
}
