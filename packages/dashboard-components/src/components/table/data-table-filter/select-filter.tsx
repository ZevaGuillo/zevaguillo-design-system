import { Select } from "@zevaguillo/ui-components";

export interface SelectFilterOption {
  label: string;
  value: string;
}

export interface SelectFilterProps {
  value?: string;
  onChange?: (value: string) => void;
  options: SelectFilterOption[];
  placeholder?: string;
}

export const SelectFilter = ({
  value,
  onChange,
  options,
  placeholder = "All",
}: SelectFilterProps) => {
  return (
    <Select
      value={value || ""}
      onChange={onChange}
      options={[{ value: "", label: placeholder }, ...options]}
    />
  );
};
