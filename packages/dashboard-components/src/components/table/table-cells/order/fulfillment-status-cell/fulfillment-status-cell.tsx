import { Badge } from "@zevaguillo/ui-components";

export interface FulfillmentStatusCellProps {
  value?: string;
}

const statusVariantMap: Record<
  string,
  "default" | "success" | "warning" | "danger" | "info"
> = {
  fulfilled: "success",
  not_fulfilled: "warning",
  partially_fulfilled: "info",
  canceled: "danger",
  requires_action: "danger",
};

export const FulfillmentStatusCell = ({
  value,
}: FulfillmentStatusCellProps) => {
  if (!value) return <Badge variant="default">-</Badge>;

  const variant = statusVariantMap[value] || "default";
  const label = value.replace(/_/g, " ");

  return <Badge variant={variant}>{label}</Badge>;
};
