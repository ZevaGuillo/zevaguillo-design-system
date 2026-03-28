import type { ReactNode } from "react";

export interface ContainerProps {
  /** Container content */
  children: ReactNode;
  /** Container size */
  size?: "small" | "medium" | "large" | "full";
  /** Additional CSS class */
  className?: string;
}
