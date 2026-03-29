import { Text } from "@zevaguillo/ui-components";

export interface EmailCellProps {
  value?: string;
}

export const EmailCell = ({ value }: EmailCellProps) => {
  if (!value)
    return (
      <Text size="small" className="text-gray-400">
        -
      </Text>
    );

  return (
    <a href={`mailto:${value}`} className="text-blue-600 hover:underline">
      {value}
    </a>
  );
};
