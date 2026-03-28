import type { ReactNode } from "react";

export interface Tab {
  /** Tab label */
  label: string;
  /** Tab content */
  content: ReactNode;
  /** Whether tab is disabled */
  disabled?: boolean;
}

export interface TabsProps {
  /** Tabs */
  tabs: Tab[];
  /** Active tab index */
  activeIndex?: number;
  /** Default active tab for uncontrolled */
  defaultIndex?: number;
  /** Tabs variant */
  variant?: "line" | "pills";
  /** Additional CSS class */
  className?: string;
  /** Tab change handler */
  onChange?: (index: number) => void;
}
