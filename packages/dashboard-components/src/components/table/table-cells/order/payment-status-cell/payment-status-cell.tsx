import { Badge } from "@zevaguillo/ui-components";

export interface PaymentStatusCellProps {
  value?: string;
}

const statusVariantMap: Record<
  string,
  "default" | "success" | "warning" | "danger" | "info"
> = {
  paid: "success",
  awaiting: "warning",
  pending: "warning",
  refunded: "info",
  partially_refunded: "info",
  canceled: "danger",
  failed: "danger",
  requires_action: "danger",
};

export const PaymentStatusCell = ({ value }: PaymentStatusCellProps) => {
  if (!value) return <Badge variant="default">-</Badge>;

  const variant = statusVariantMap[value] || "default";
  const label = value.replace(/_/g, " ");

  return <Badge variant={variant}>{label}</Badge>;
};
