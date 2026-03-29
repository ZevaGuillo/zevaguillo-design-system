import { Select } from "@zevaguillo/ui-components";

const COUNTRIES = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "gb", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "es", label: "Spain" },
  { value: "it", label: "Italy" },
  { value: "pt", label: "Portugal" },
  { value: "br", label: "Brazil" },
  { value: "mx", label: "Mexico" },
  { value: "jp", label: "Japan" },
  { value: "cn", label: "China" },
  { value: "in", label: "India" },
  { value: "au", label: "Australia" },
];

export interface CountrySelectProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const CountrySelect = ({
  value,
  onChange,
  placeholder = "Select country...",
  disabled,
}: CountrySelectProps) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={COUNTRIES}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
