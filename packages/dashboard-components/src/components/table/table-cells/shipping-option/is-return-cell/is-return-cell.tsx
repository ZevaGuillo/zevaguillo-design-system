import { Badge, Text } from "@zevaguillo/ui-components";

export interface IsReturnCellProps {
  value?: boolean;
}

export const IsReturnCell = ({ value }: IsReturnCellProps) => {
  if (value === undefined) return <Text size="small">-</Text>;

  return (
    <Badge variant={value ? "info" : "default"}>
      {value ? "Return" : "Shipping"}
    </Badge>
  );
};
