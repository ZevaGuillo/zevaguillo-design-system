import { Badge, Text } from "@zevaguillo/ui-components";

export interface CollectionCellProps {
  collection?: {
    title?: string;
  };
}

export const CollectionCell = ({ collection }: CollectionCellProps) => {
  if (!collection?.title) return <Text size="small">-</Text>;

  return <Badge variant="default">{collection.title}</Badge>;
};
