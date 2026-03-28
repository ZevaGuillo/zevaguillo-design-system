import type { ReactNode } from "react";

export interface CommandBarItem {
  id: string;
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  action: () => void;
}

export interface CommandBarProps {
  /** Command bar items */
  items: CommandBarItem[];
  /** Whether the command bar is open */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Additional CSS class */
  className?: string;
}
