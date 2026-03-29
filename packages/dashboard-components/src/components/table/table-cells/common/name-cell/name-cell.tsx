import { Avatar, Text } from "@zevaguillo/ui-components";

export interface NameCellProps {
  name?: string;
  avatar?: string;
}

export const NameCell = ({ name, avatar }: NameCellProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar src={avatar} fallback={name?.charAt(0) || "?"} size="small" />
      <Text size="small">{name || "-"}</Text>
    </div>
  );
};
