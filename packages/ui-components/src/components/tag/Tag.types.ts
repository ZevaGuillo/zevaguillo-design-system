export interface TagProps {
  /** Tag label */
  label: string;
  /** Tag variant */
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
  /** Tag size */
  size?: "small" | "medium";
  /** Remove handler */
  onRemove?: () => void;
  /** Additional CSS class */
  className?: string;
}
