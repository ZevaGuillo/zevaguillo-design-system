import { Badge } from "@zevaguillo/ui-components";

export interface StatusCellProps {
  value?: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
}

export const StatusCell = ({ value, variant = "default" }: StatusCellProps) => {
  if (!value) return <Badge variant="default">-</Badge>;

  return <Badge variant={variant}>{value}</Badge>;
};
