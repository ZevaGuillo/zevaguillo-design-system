export interface AlertProps {
  /** Alert variant */
  variant?: "success" | "warning" | "error" | "info";
  /** Alert title */
  title?: string;
  /** Alert content */
  children: React.ReactNode;
  /** Whether to show close button */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Additional CSS class */
  className?: string;
}
