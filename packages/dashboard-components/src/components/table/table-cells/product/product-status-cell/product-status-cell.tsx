import { Badge } from "@zevaguillo/ui-components";

export interface ProductStatusCellProps {
  value?: string;
}

const statusVariantMap: Record<
  string,
  "default" | "success" | "warning" | "danger" | "info"
> = {
  published: "success",
  draft: "default",
  proposed: "warning",
  rejected: "danger",
  pending: "warning",
};

export const ProductStatusCell = ({ value }: ProductStatusCellProps) => {
  if (!value) return <Badge variant="default">-</Badge>;

  const variant = statusVariantMap[value] || "default";

  return <Badge variant={variant}>{value}</Badge>;
};
