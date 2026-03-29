import { Text } from "@zevaguillo/ui-components";

export interface CountryCellProps {
  value?: string;
}

export const CountryCell = ({ value }: CountryCellProps) => {
  if (!value) return <Text size="small">-</Text>;

  return <Text size="small">{value.toUpperCase()}</Text>;
};
