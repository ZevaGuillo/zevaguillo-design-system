import { Badge } from "@zevaguillo/ui-components";

export interface PromotionStatusCellProps {
  value?: string;
}

const statusVariantMap: Record<
  string,
  "default" | "success" | "warning" | "danger" | "info"
> = {
  active: "success",
  inactive: "default",
  scheduled: "warning",
  expired: "danger",
  disabled: "default",
};

export const PromotionStatusCell = ({ value }: PromotionStatusCellProps) => {
  if (!value) return <Badge variant="default">-</Badge>;

  const variant = statusVariantMap[value] || "default";

  return <Badge variant={variant}>{value}</Badge>;
};
