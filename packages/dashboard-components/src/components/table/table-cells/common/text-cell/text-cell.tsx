import { Text } from "@zevaguillo/ui-components";

export interface TextCellProps {
  value?: string;
}

export const TextCell = ({ value }: TextCellProps) => {
  return <Text size="small">{value || "-"}</Text>;
};
