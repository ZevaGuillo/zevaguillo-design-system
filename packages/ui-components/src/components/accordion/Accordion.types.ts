import type { ReactNode } from "react";

export interface AccordionItem {
  /** Item ID */
  id: string;
  /** Item title */
  title: string;
  /** Item content */
  content: ReactNode;
}

export interface AccordionProps {
  /** Accordion items */
  items: AccordionItem[];
  /** Allow multiple items open */
  allowMultiple?: boolean;
  /** Additional CSS class */
  className?: string;
}
