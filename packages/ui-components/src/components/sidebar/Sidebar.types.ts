import type { ReactNode } from "react";

export interface SidebarItem {
  /** Item id */
  id: string;
  /** Item label */
  label: string;
  /** Item icon */
  icon?: ReactNode;
  /** Item href */
  href?: string;
  /** Item active state */
  active?: boolean;
  /** Submenu items */
  items?: SidebarItem[];
}

export interface SidebarProps {
  /** Sidebar items */
  items: SidebarItem[];
  /** Sidebar logo */
  logo?: ReactNode;
  /** Active item id */
  activeItem?: string;
  /** Item click handler */
  onItemClick?: (item: SidebarItem) => void;
  /** Sidebar collapsed */
  collapsed?: boolean;
  /** Additional CSS class */
  className?: string;
}
