export interface ProgressProps {
  /** Progress value (0-100) */
  value?: number;
  /** Progress size */
  size?: "small" | "medium" | "large";
  /** Progress variant */
  variant?: "default" | "success" | "warning" | "error";
  /** Show percentage label */
  showLabel?: boolean;
  /** Additional CSS class */
  className?: string;
}
