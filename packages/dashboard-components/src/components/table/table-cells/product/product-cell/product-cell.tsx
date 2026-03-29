import { Text } from "@zevaguillo/ui-components";
import { Thumbnail } from "../../../../common/thumbnail/thumbnail";

export interface ProductCellProps {
  product?: {
    title?: string;
    thumbnail?: string;
  };
}

export const ProductCell = ({ product }: ProductCellProps) => {
  if (!product) return <Text size="small">-</Text>;

  return (
    <div className="flex items-center gap-3">
      <Thumbnail src={product.thumbnail} size="small" />
      <Text size="small">{product.title}</Text>
    </div>
  );
};
