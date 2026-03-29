import { Text } from "@zevaguillo/ui-components";

export interface TotalCellProps {
  value?: number;
  currency?: string;
}

export const TotalCell = ({ value, currency = "USD" }: TotalCellProps) => {
  if (value === undefined || value === null) {
    return <Text size="small">-</Text>;
  }

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);

  return (
    <Text size="small" className="font-medium">
      {formatted}
    </Text>
  );
};
