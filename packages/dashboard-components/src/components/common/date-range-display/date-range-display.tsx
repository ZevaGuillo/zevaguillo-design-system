import { Text } from "@zevaguillo/ui-components";

export interface DateRangeDisplayProps {
  start?: string | Date;
  end?: string | Date;
}

export const DateRangeDisplay = ({ start, end }: DateRangeDisplayProps) => {
  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString();
  };

  if (!start && !end) {
    return <Text size="small">-</Text>;
  }

  if (start && end) {
    return (
      <Text size="small">
        {formatDate(start)} - {formatDate(end)}
      </Text>
    );
  }

  if (start) {
    return <Text size="small">From {formatDate(start)}</Text>;
  }

  return <Text size="small">Until {formatDate(end!)}</Text>;
};
