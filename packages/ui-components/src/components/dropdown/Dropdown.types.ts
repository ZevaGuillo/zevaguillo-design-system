import type { ReactNode } from "react";

export interface DropdownItem {
  /** Item label */
  label: string;
  /** Item value or action */
  value?: string;
  /** Item icon */
  icon?: ReactNode;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Item divider */
  divider?: boolean;
}

export interface DropdownProps {
  /** Dropdown trigger */
  trigger: ReactNode;
  /** Dropdown items */
  items: DropdownItem[];
  /** Dropdown is open */
  isOpen?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Additional CSS class */
  className?: string;
}
