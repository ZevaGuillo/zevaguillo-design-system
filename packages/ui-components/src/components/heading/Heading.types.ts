import type { ReactNode } from "react";

export interface HeadingProps {
  /** The heading level */
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Heading content */
  children: ReactNode;
  /** Additional CSS class */
  className?: string;
}
