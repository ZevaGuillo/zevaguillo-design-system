export interface BreadcrumbItem {
  /** Item label */
  label: string;
  /** Item href */
  href?: string;
  /** Whether this is the current page */
  isCurrent?: boolean;
}

export interface BreadcrumbProps {
  /** Breadcrumb items */
  items: BreadcrumbItem[];
  /** Separator between items */
  separator?: string;
  /** Additional CSS class */
  className?: string;
}
