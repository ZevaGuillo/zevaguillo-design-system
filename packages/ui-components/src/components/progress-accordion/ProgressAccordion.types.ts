import type { ReactNode } from "react";

export interface ProgressAccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  /** Progress percentage (0-100) */
  progress?: number;
  /** Whether the item is completed */
  completed?: boolean;
}

export interface ProgressAccordionProps {
  /** Accordion items */
  items: ProgressAccordionItem[];
  /** Currently expanded item ID */
  expandedId?: string;
  /** Callback when expanded item changes */
  onExpandedChange?: (id: string) => void;
  /** Additional CSS class */
  className?: string;
}
