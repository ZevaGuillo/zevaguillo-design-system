import { Input } from "@zevaguillo/ui-components";

export interface PercentageInputProps {
  value?: number;
  onChange?: (value: number | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
}

export const PercentageInput = ({
  value,
  onChange,
  placeholder = "0",
  disabled,
  min = 0,
  max = 100,
}: PercentageInputProps) => {
  const handleChange = (val: string) => {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      onChange?.(Math.min(Math.max(num, min), max));
    } else if (val === "") {
      onChange?.(undefined);
    }
  };

  return (
    <div className="flex items-center">
      <Input
        type="number"
        value={value !== undefined ? String(value) : ""}
        onChange={(val) => handleChange(val)}
        placeholder={placeholder}
        disabled={disabled}
        min={min}
        max={max}
      />
      <span className="ml-2 text-gray-500">%</span>
    </div>
  );
};
