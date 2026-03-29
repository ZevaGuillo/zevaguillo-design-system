import { Input } from "@zevaguillo/ui-components";

export interface NumberFilterProps {
  value?: number;
  onChange?: (value: number | undefined) => void;
  placeholder?: string;
}

export const NumberFilter = ({
  value,
  onChange,
  placeholder = "0",
}: NumberFilterProps) => {
  const handleChange = (val: string) => {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      onChange?.(num);
    } else if (val === "") {
      onChange?.(undefined);
    }
  };

  return (
    <Input
      type="number"
      value={value !== undefined ? String(value) : ""}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
