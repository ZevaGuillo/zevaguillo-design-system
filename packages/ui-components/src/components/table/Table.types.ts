import type { ReactNode } from "react";

export interface TableColumn<T = any> {
  /** Column key */
  key: string;
  /** Column header */
  header: string;
  /** Column width */
  width?: string;
  /** Custom render function */
  render?: (row: T, index: number) => ReactNode;
  /** Whether column is sortable */
  sortable?: boolean;
}

export interface TableProps<T = any> {
  /** Table columns */
  columns: TableColumn<T>[];
  /** Table data */
  data: T[];
  /** Empty message */
  emptyMessage?: string;
  /** Loading state */
  loading?: boolean;
  /** Row click handler */
  onRowClick?: (row: T, index: number) => void;
  /** Additional CSS class */
  className?: string;
}
