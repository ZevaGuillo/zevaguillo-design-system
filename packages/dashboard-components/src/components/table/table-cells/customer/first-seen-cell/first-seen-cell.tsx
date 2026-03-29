import { Text } from "@zevaguillo/ui-components";

export interface FirstSeenCellProps {
  value?: string | Date;
}

export const FirstSeenCell = ({ value }: FirstSeenCellProps) => {
  if (!value) return <Text size="small">-</Text>;

  const date = new Date(value);
  return (
    <Text size="small" className="text-gray-600">
      {date.toLocaleDateString()}
    </Text>
  );
};
