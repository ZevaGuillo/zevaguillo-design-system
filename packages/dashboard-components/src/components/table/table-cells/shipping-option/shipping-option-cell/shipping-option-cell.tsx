import { Text } from "@zevaguillo/ui-components";

export interface ShippingOptionCellProps {
  option?: {
    name?: string;
    region?: { name?: string };
  };
}

export const ShippingOptionCell = ({ option }: ShippingOptionCellProps) => {
  if (!option) return <Text size="small">-</Text>;

  return (
    <div>
      <Text size="small">{option.name}</Text>
      {option.region?.name && (
        <Text size="xsmall" className="text-gray-500">
          {option.region.name}
        </Text>
      )}
    </div>
  );
};
