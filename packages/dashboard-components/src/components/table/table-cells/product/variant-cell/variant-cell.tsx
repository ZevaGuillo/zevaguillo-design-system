import { Text } from "@zevaguillo/ui-components";

export interface VariantCellProps {
  variant?: {
    title?: string;
    sku?: string;
  };
}

export const VariantCell = ({ variant }: VariantCellProps) => {
  if (!variant) return <Text size="small">-</Text>;

  return (
    <div>
      <Text size="small">{variant.title}</Text>
      {variant.sku && (
        <Text size="xsmall" className="text-gray-500">
          SKU: {variant.sku}
        </Text>
      )}
    </div>
  );
};
