import { Link } from "react-router-dom";
import { Avatar, Text } from "@zevaguillo/ui-components";

export interface UserLinkProps {
  userId: string;
  name?: string;
  email?: string;
  avatar?: string;
}

export const UserLink = ({ userId, name, email, avatar }: UserLinkProps) => {
  return (
    <Link
      to={`/users/${userId}`}
      className="flex items-center gap-2 hover:underline"
    >
      <Avatar src={avatar} fallback={name?.charAt(0) || "?"} size="small" />
      <div>
        <Text size="small" className="font-medium">
          {name || userId}
        </Text>
        {email && (
          <Text size="xsmall" className="text-gray-500">
            {email}
          </Text>
        )}
      </div>
    </Link>
  );
};
