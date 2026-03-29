import { Badge, Text } from "@zevaguillo/ui-components";

export interface SalesChannelsCellProps {
  channels?: Array<{ name?: string }>;
}

export const SalesChannelsCell = ({ channels }: SalesChannelsCellProps) => {
  if (!channels || channels.length === 0) return <Text size="small">-</Text>;

  return (
    <div className="flex flex-wrap gap-1">
      {channels.slice(0, 2).map((channel, index) => (
        <Badge key={index} variant="default">
          {channel.name}
        </Badge>
      ))}
      {channels.length > 2 && (
        <Badge variant="default">+{channels.length - 2}</Badge>
      )}
    </div>
  );
};
