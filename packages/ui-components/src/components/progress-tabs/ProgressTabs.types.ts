import type { ReactNode } from "react";

export interface ProgressTabsItem {
  id: string;
  label: string;
  content: ReactNode;
  /** Progress percentage (0-100) */
  progress?: number;
  /** Whether the tab is completed */
  completed?: boolean;
}

export interface ProgressTabsProps {
  /** Tab items */
  items: ProgressTabsItem[];
  /** Currently active tab ID */
  activeId?: string;
  /** Callback when active tab changes */
  onChange?: (id: string) => void;
  /** Additional CSS class */
  className?: string;
}
