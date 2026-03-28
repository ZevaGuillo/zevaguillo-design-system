export interface BadgeProps {
  /** Badge variant */
  variant?: "default" | "success" | "warning" | "error" | "info";
  /** Badge size */
  size?: "small" | "medium";
  /** Badge content */
  children: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}
