import React from "react";
import clsx from "clsx";
import { Skeleton } from "../skeleton";
import type {
  TableProps,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableHeaderProps,
  TableCellProps,
} from "./Table.types";

const TableComponent = <T extends Record<string, any>>({
  columns,
  data,
  emptyMessage = "No data available",
  loading = false,
  onRowClick,
  className = "",
  children,
}: TableProps<T>) => {
  // If children are provided, use sub-components API
  if (children) {
    return (
      <div className={clsx("overflow-x-auto", className)}>
        <table className="min-w-full divide-y divide-gray-200">
          {children}
        </table>
      </div>
    );
  }

  // Otherwise use column/data API
  return (
    <div className={clsx("overflow-x-auto", className)}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns?.map((column) => (
              <th
                key={column.key}
                className={clsx(
                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                  column.sortable && "cursor-pointer hover:text-gray-700",
                )}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                {columns?.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                    <Skeleton variant="text" lines={1} height="1rem" />
                  </td>
                ))}
              </tr>
            ))
          ) : !data?.length ? (
            <tr>
              <td
                colSpan={columns?.length}
                className="px-6 py-12 text-center text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick?.(row, rowIndex)}
                className={clsx(
                  onRowClick && "cursor-pointer hover:bg-gray-50",
                )}
              >
                {columns?.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {column.render
                      ? column.render(row, rowIndex)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export const TableHead = ({ children, className, onClick }: TableHeadProps) => (
  <thead className={clsx("bg-gray-50", className)} onClick={onClick as any}>
    {children}
  </thead>
);

export const TableBody = ({ children }: TableBodyProps) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);

export const TableRow = ({ children, onClick }: TableRowProps) => (
  <tr
    onClick={onClick}
    className={clsx(onClick && "cursor-pointer hover:bg-gray-50")}
  >
    {children}
  </tr>
);

export const TableHeader = ({ children }: TableHeaderProps) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    {children}
  </th>
);

export const TableCell = ({ children }: TableCellProps) => (
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    {children}
  </td>
);

// Create namespace with sub-components
export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});

export default Table;
