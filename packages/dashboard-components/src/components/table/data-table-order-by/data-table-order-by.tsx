import { Button, Popover } from "@zevaguillo/ui-components";
import { ArrowUpDown } from "lucide-react";

export interface DataTableOrderByOption {
  label: string;
  value: string;
}

interface DataTableOrderByProps {
  value?: string;
  onChange: (value: string | undefined) => void;
  options: DataTableOrderByOption[];
}

export const DataTableOrderBy = ({
  value,
  onChange,
  options,
}: DataTableOrderByProps) => {
  const currentOption = options.find((opt) => opt.value === value);

  return (
    <Popover
      trigger={
        <Button variant="outline" size="small">
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Sort
          {currentOption && (
            <span className="ml-2 text-gray-500">({currentOption.label})</span>
          )}
        </Button>
      }
    >
      <div className="w-48 p-2">
        <button
          onClick={() => onChange(undefined)}
          className={`w-full text-left px-3 py-2 rounded-md text-sm ${
            !value ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
        >
          Default
        </button>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm ${
              value === option.value ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </Popover>
  );
};
