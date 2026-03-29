import { Text } from "@zevaguillo/ui-components";

export interface CreatedAtCellProps {
  value?: string | Date;
}

export const CreatedAtCell = ({ value }: CreatedAtCellProps) => {
  if (!value) return <Text size="small">-</Text>;

  const date = new Date(value);
  return (
    <Text size="small" className="text-gray-600">
      {date.toLocaleDateString()} {date.toLocaleTimeString()}
    </Text>
  );
};
