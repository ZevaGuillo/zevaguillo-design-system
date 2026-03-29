import { Text } from "@zevaguillo/ui-components";

export interface DateCellProps {
  value?: string | Date;
  format?: "short" | "long" | "time";
}

export const DateCell = ({ value, format = "short" }: DateCellProps) => {
  if (!value) return <Text size="small">-</Text>;

  const date = new Date(value);

  const formatted =
    format === "time"
      ? date.toLocaleTimeString()
      : format === "long"
        ? date.toLocaleDateString(undefined, { dateStyle: "long" })
        : date.toLocaleDateString();

  return (
    <Text size="small" className="text-gray-600">
      {formatted}
    </Text>
  );
};
