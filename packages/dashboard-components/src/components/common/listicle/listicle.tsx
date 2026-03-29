import { Text } from "@zevaguillo/ui-components";

export interface ListicleItem {
  title: string;
  description?: string;
}

export interface ListicleProps {
  items: ListicleItem[];
}

export const Listicle = ({ items }: ListicleProps) => {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index}>
          <Text size="small" className="font-medium">
            {item.title}
          </Text>
          {item.description && (
            <Text size="xsmall" className="text-gray-500">
              {item.description}
            </Text>
          )}
        </li>
      ))}
    </ul>
  );
};
