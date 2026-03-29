import { ReactNode } from "react";
import { Button } from "@zevaguillo/ui-components";
import { Filter, X } from "lucide-react";

export interface FilterGroupProps {
  filters: {
    id: string;
    label: string;
    value?: string;
  }[];
  onRemove?: (id: string) => void;
  onClearAll?: () => void;
}

export const FilterGroup = ({
  filters,
  onRemove,
  onClearAll,
}: FilterGroupProps) => {
  const activeFilters = filters.filter((f) => f.value);

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      <Filter className="w-4 h-4 text-gray-500" />
      {activeFilters.map((filter) => (
        <span
          key={filter.id}
          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm"
        >
          <span className="font-medium">{filter.label}:</span>
          <span>{filter.value}</span>
          <button
            onClick={() => onRemove?.(filter.id)}
            className="hover:text-red-500"
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}
      {onClearAll && (
        <Button variant="ghost" size="small" onClick={onClearAll}>
          Clear all
        </Button>
      )}
    </div>
  );
};
