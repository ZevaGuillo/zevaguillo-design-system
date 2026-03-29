import { Text } from "@zevaguillo/ui-components";

export interface ShippingPriceCellProps {
  amount?: number;
  currency?: string;
}

export const ShippingPriceCell = ({
  amount,
  currency = "USD",
}: ShippingPriceCellProps) => {
  if (amount === undefined || amount === null) {
    return <Text size="small">-</Text>;
  }

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);

  return <Text size="small">{formatted}</Text>;
};
