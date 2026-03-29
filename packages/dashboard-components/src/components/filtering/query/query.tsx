import { Input } from "@zevaguillo/ui-components";

export interface QueryFilterProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const QueryFilter = ({
  value,
  onChange,
  placeholder = "Search...",
}: QueryFilterProps) => {
  return (
    <Input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
