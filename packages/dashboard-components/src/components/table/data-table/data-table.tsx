import { useState, useMemo, ReactNode } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  SortingState,
  PaginationState,
  FilterFn,
} from "@tanstack/react-table";
import {
  Table,
  Button,
  Input,
  Select,
  Spinner,
} from "@zevaguillo/ui-components";
import clsx from "clsx";

export interface DataTableColumnDef<T> {
  accessorKey?: keyof T | string;
  accessorFn?: (row: T) => any;
  header?: string | ((context: any) => ReactNode);
  cell?: (context: any) => ReactNode;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  id?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumnDef<T>[];
  getRowId?: (row: T) => string;
  enablePagination?: boolean;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableSearch?: boolean;
  pageSize?: number;
  totalCount?: number;
  isLoading?: boolean;
  emptyState?: ReactNode;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onSortingChange?: (sorting: SortingState) => void;
  onSearchChange?: (search: string) => void;
}

export function DataTable<T>({
  data,
  columns,
  getRowId,
  enablePagination = true,
  enableSorting = true,
  enableSearch = true,
  pageSize = 10,
  totalCount,
  isLoading = false,
  emptyState,
  onPaginationChange,
  onSortingChange,
  onSearchChange,
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });

  const table = useReactTable({
    data,
    columns: columns as any,
    state: {
      sorting,
      globalFilter,
      pagination,
    },
    onSortingChange: (updater) => {
      const newSorting =
        typeof updater === "function" ? updater(sorting) : updater;
      setSorting(newSorting);
      onSortingChange?.(newSorting);
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: (updater) => {
      const newPagination =
        typeof updater === "function" ? updater(pagination) : updater;
      setPagination(newPagination);
      onPaginationChange?.(newPagination.pageIndex + 1, newPagination.pageSize);
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId: getRowId as any,
  });

  return (
    <div className="space-y-4">
      {enableSearch && (
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search..."
            value={globalFilter}
            onChange={(value) => {
              setGlobalFilter(value);
              onSearchChange?.(value);
            }}
            className="max-w-xs"
          />
        </div>
      )}

      <div className="border rounded-lg overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center p-8">
            <Spinner />
          </div>
        ) : table.getRowModel().rows.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            {emptyState || "No data available"}
          </div>
        ) : (
          <Table>
            <Table.Header>
              {table.getHeaderGroups().map((headerGroup) => (
                <Table.Row key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Table.Head
                      key={header.id}
                      className={clsx({
                        "cursor-pointer select-none":
                          header.column.getCanSort(),
                      })}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : typeof header.column.columnDef.header === "function"
                          ? header.column.columnDef.header(header.getContext())
                          : header.column.columnDef.header}
                      {enableSorting && header.column.getCanSort() && (
                        <span className="ml-1">
                          {{
                            asc: " ↑",
                            desc: " ↓",
                          }[header.column.getIsSorted() as string] ?? ""}
                        </span>
                      )}
                    </Table.Head>
                  ))}
                </Table.Row>
              ))}
            </Table.Header>
            <Table.Body>
              {table.getRowModel().rows.map((row) => (
                <Table.Row key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell key={cell.id}>
                      {typeof cell.column.columnDef.cell === "function"
                        ? cell.column.columnDef.cell(cell.getContext())
                        : (cell.getValue() as string)}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </div>

      {enablePagination && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className="border rounded px-2 py-1 text-sm"
            >
              {[10, 20, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="small"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="small"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
