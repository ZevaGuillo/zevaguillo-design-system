import { useState, ReactNode } from "react";
import { Button, Popover, Input, Select } from "@zevaguillo/ui-components";
import { Filter, X } from "lucide-react";

export type FilterOperator =
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "contains"
  | "startsWith"
  | "endsWith";

export interface DataTableFilter {
  id: string;
  label: string;
  type: "text" | "number" | "select" | "date" | "dateRange";
  options?: { label: string; value: string }[];
  operators?: FilterOperator[];
}

interface DataTableFilterProps {
  filters: DataTableFilter[];
  values: Record<string, any>;
  onChange: (values: Record<string, any>) => void;
}

export const DataTableFilter = ({
  filters,
  values,
  onChange,
}: DataTableFilterProps) => {
  const [open, setOpen] = useState(false);
  const [tempValues, setTempValues] = useState(values);

  const activeFilters = Object.keys(values).filter((key) => {
    const value = values[key];
    return value !== undefined && value !== null && value !== "";
  });

  const handleApply = () => {
    onChange(tempValues);
    setOpen(false);
  };

  const handleClear = () => {
    setTempValues({});
    onChange({});
    setOpen(false);
  };

  const handleChange = (id: string, value: any) => {
    setTempValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant="outline" size="small">
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {activeFilters.length > 0 && (
            <span className="ml-2 bg-primary text-white rounded-full px-2 py-0.5 text-xs">
              {activeFilters.length}
            </span>
          )}
        </Button>
      }
    >
      <div className="w-72 p-4 space-y-4">
        <h3 className="font-medium">Filters</h3>

        {filters.map((filter) => (
          <div key={filter.id}>
            <label className="block text-sm font-medium mb-1">
              {filter.label}
            </label>
            {filter.type === "select" ? (
              <Select
                options={[
                  { value: "", label: "All" },
                  ...(filter.options || []),
                ]}
                value={tempValues[filter.id] || ""}
                onChange={(value) => handleChange(filter.id, value)}
              />
            ) : (
              <Input
                type={filter.type === "number" ? "number" : "text"}
                value={tempValues[filter.id] || ""}
                onChange={(value) => handleChange(filter.id, value)}
                placeholder={`Filter by ${filter.label}`}
              />
            )}
          </div>
        ))}

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="small" onClick={handleClear}>
            Clear
          </Button>
          <Button size="small" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </div>
    </Popover>
  );
};

export const FilterChip = ({
  label,
  value,
  onRemove,
}: {
  label: string;
  value: string;
  onRemove: () => void;
}) => {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm">
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
      <button onClick={onRemove} className="hover:text-red-500">
        <X className="w-3 h-3" />
      </button>
    </span>
  );
};
