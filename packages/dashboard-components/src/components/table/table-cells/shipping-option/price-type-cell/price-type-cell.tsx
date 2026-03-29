import { Badge, Text } from "@zevaguillo/ui-components";

export interface PriceTypeCellProps {
  value?: string;
}

const typeLabelMap: Record<string, string> = {
  flat: "Flat Rate",
  calculated: "Calculated",
};

export const PriceTypeCell = ({ value }: PriceTypeCellProps) => {
  if (!value) return <Text size="small">-</Text>;

  const label = typeLabelMap[value] || value;

  return <Badge variant="default">{label}</Badge>;
};
