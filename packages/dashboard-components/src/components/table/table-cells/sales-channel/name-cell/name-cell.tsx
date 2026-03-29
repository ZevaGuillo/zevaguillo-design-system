import { Badge, Text } from "@zevaguillo/ui-components";

export interface SalesChannelNameCellProps {
  channel?: {
    name?: string;
    description?: string;
    is_disabled?: boolean;
  };
}

export const SalesChannelNameCell = ({
  channel,
}: SalesChannelNameCellProps) => {
  if (!channel) return <Text size="small">-</Text>;

  return (
    <div className="flex items-center gap-2">
      <Text size="small" className="font-medium">
        {channel.name}
      </Text>
      {channel.is_disabled && <Badge variant="default">Disabled</Badge>}
    </div>
  );
};
