import { Badge, Text } from "@zevaguillo/ui-components";

export interface AdminOnlyCellProps {
  value?: boolean;
}

export const AdminOnlyCell = ({ value }: AdminOnlyCellProps) => {
  if (value === undefined) return <Text size="small">-</Text>;

  return (
    <Badge variant={value ? "warning" : "default"}>
      {value ? "Admin only" : "Public"}
    </Badge>
  );
};
