import { useState } from "react";
import { DataTable, DataTableProps } from "../data-table/data-table";

export interface ConfigurableDataTableProps<T> extends DataTableProps<T> {
  enableColumnVisibility?: boolean;
  enableColumnOrdering?: boolean;
  enableViewSelector?: boolean;
}

export function ConfigurableDataTable<T>({
  enableColumnVisibility = false,
  enableColumnOrdering = false,
  enableViewSelector = false,
  ...props
}: ConfigurableDataTableProps<T>) {
  const [columnVisibility, setColumnVisibility] = useState({});

  return <DataTable {...props} />;
}
