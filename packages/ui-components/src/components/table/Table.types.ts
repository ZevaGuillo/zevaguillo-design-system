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
  columns?: TableColumn<T>[];
  /** Table data */
  data?: T[];
  /** Empty message */
  emptyMessage?: string;
  /** Loading state */
  loading?: boolean;
  /** Row click handler */
  onRowClick?: (row: T, index: number) => void;
  /** Additional CSS class */
  className?: string;
  /** Children (for sub-components API) */
  children?: ReactNode;
}

export interface TableHeadProps {
  children: ReactNode;
  className?: string;
  onClick?: (event?: any) => void;
}

export interface TableBodyProps {
  children: ReactNode;
}

export interface TableRowProps {
  children: ReactNode;
  onClick?: () => void;
}

export interface TableHeaderProps {
  children: ReactNode;
}

export interface TableCellProps {
  children: ReactNode;
}
