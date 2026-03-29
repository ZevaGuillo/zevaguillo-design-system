import { Avatar, Text, Heading } from "@zevaguillo/ui-components";

export interface CustomerInfoProps {
  name?: string;
  email?: string;
  avatar?: string;
}

export const CustomerInfo = ({ name, email, avatar }: CustomerInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar src={avatar} fallback={name?.charAt(0) || "?"} />
      <div>
        <Heading level="h4">{name || "Unknown"}</Heading>
        {email && (
          <Text size="small" className="text-gray-500">
            {email}
          </Text>
        )}
      </div>
    </div>
  );
};
