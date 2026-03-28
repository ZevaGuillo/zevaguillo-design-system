import type { ReactNode } from "react";

export interface CommandItem {
  id: string;
  label: string;
  value?: string;
  icon?: ReactNode;
}

export interface CommandProps {
  /** Command items */
  items: CommandItem[];
  /** Placeholder text */
  placeholder?: string;
  /** Search input value */
  value?: string;
  /** Callback when selection changes */
  onValueChange?: (value: string) => void;
  /** Callback when item is selected */
  onSelect?: (item: CommandItem) => void;
  /** Additional CSS class */
  className?: string;
}
