import { Badge, Text } from "@zevaguillo/ui-components";

export interface TaxTypeCellProps {
  value?: string;
}

const typeLabelMap: Record<string, string> = {
  rate: "Tax Rate",
  calculated: "Calculated",
  withholding: "Withholding",
};

export const TaxTypeCell = ({ value }: TaxTypeCellProps) => {
  if (!value) return <Text size="small">-</Text>;

  const label = typeLabelMap[value] || value;

  return <Badge variant="default">{label}</Badge>;
};
