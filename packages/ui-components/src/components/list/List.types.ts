import type { ReactNode } from "react";

export interface ListItem {
  /** Item id */
  id?: string;
  /** Item label */
  label: string;
  /** Item description */
  description?: string;
  /** Item icon */
  icon?: ReactNode;
  /** Item right content */
  right?: ReactNode;
  /** Click handler */
  onClick?: () => void;
}

export interface ListProps {
  /** List items */
  items: ListItem[];
  /** List variant */
  variant?: "default" | "bordered" | "actions";
  /** Additional CSS class */
  className?: string;
}
