import { Select } from "@zevaguillo/ui-components";

export interface OrderByOption {
  label: string;
  value: string;
}

export interface OrderByFilterProps {
  value?: string;
  onChange?: (value: string | undefined) => void;
  options: OrderByOption[];
  placeholder?: string;
}

export const OrderByFilter = ({
  value,
  onChange,
  options,
  placeholder = "Sort by...",
}: OrderByFilterProps) => {
  return (
    <Select
      value={value || ""}
      onChange={(val) => onChange?.(val || undefined)}
      options={[{ value: "", label: placeholder }, ...options]}
    />
  );
};
