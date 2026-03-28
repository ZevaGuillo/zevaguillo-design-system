import type { ReactNode } from "react";

export interface HeaderProps {
  /** Header title */
  title?: string;
  /** Header subtitle */
  subtitle?: string;
  /** Header left content */
  left?: ReactNode;
  /** Header right content */
  right?: ReactNode;
  /** Header breadcrumbs */
  breadcrumbs?: { label: string; href?: string }[];
  /** Additional CSS class */
  className?: string;
}
