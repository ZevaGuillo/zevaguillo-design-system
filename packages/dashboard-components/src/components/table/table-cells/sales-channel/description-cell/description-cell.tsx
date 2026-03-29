import { Text } from "@zevaguillo/ui-components";

export interface SalesChannelDescriptionCellProps {
  value?: string;
}

export const SalesChannelDescriptionCell = ({
  value,
}: SalesChannelDescriptionCellProps) => {
  if (!value) return <Text size="small">-</Text>;

  return (
    <Text size="small" className="text-gray-600">
      {value}
    </Text>
  );
};
