export interface ChipProps {
  /** Chip label */
  label: string;
  /** Chip variant */
  variant?: "filled" | "outlined";
  /** Chip color */
  color?: "default" | "primary" | "success" | "warning" | "error" | "info";
  /** Chip is selected */
  selected?: boolean;
  /** Chip is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class */
  className?: string;
}
