import { Text } from "@zevaguillo/ui-components";

export interface ListSummaryProps {
  items: string[];
  more?: number;
}

export const ListSummary = ({ items, more }: ListSummaryProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {items.slice(0, 3).map((item, index) => (
        <Text key={index} size="small">
          {item}
        </Text>
      ))}
      {more !== undefined && more > 0 && (
        <Text size="small" className="text-gray-500">
          +{more} more
        </Text>
      )}
    </div>
  );
};
