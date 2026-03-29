import { Select } from "@zevaguillo/ui-components";

const PROVINCES: Record<string, { value: string; label: string }[]> = {
  us: [
    { value: "ca", label: "California" },
    { value: "tx", label: "Texas" },
    { value: "ny", label: "New York" },
    { value: "fl", label: "Florida" },
  ],
  ca: [
    { value: "on", label: "Ontario" },
    { value: "qc", label: "Quebec" },
    { value: "bc", label: "British Columbia" },
  ],
};

export interface ProvinceSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  country?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const ProvinceSelect = ({
  value,
  onChange,
  country = "us",
  placeholder = "Select province...",
  disabled,
}: ProvinceSelectProps) => {
  const provinces = PROVINCES[country] || [];

  return (
    <Select
      value={value}
      onChange={onChange}
      options={provinces}
      placeholder={placeholder}
      disabled={disabled || provinces.length === 0}
    />
  );
};
