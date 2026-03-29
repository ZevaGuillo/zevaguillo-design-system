import { Input } from "@zevaguillo/ui-components";

export interface StringFilterProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const StringFilter = ({
  value,
  onChange,
  placeholder = "Filter...",
}: StringFilterProps) => {
  return (
    <Input
      type="text"
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
