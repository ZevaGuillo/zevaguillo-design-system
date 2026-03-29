import { Text } from "@zevaguillo/ui-components";

export interface MoneyAmountCellProps {
  value?: number;
  currency?: string;
}

export const MoneyAmountCell = ({
  value,
  currency = "USD",
}: MoneyAmountCellProps) => {
  if (value === undefined || value === null) {
    return <Text size="small">-</Text>;
  }

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);

  return <Text size="small">{formatted}</Text>;
};
