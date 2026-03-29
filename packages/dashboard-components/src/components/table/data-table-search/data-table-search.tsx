import { Input } from "@zevaguillo/ui-components";
import { Search } from "lucide-react";

interface DataTableSearchProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const DataTableSearch = ({
  value,
  onChange,
  placeholder = "Search...",
}: DataTableSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <Input
        type="search"
        value={value}
        onChange={(val) => onChange(val)}
        placeholder={placeholder}
        className="pl-10"
      />
    </div>
  );
};
