import { Badge, Text } from "@zevaguillo/ui-components";

export interface SalesChannelCellProps {
  channel?: {
    name?: string;
  };
}

export const SalesChannelCell = ({ channel }: SalesChannelCellProps) => {
  if (!channel?.name) return <Text size="small">-</Text>;

  return <Badge variant="default">{channel.name}</Badge>;
};
