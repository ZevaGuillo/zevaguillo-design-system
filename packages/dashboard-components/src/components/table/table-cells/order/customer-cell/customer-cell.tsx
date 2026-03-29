import { Avatar, Text } from "@zevaguillo/ui-components";

export interface CustomerCellProps {
  customer?: {
    first_name?: string;
    last_name?: string;
    email?: string;
  };
}

export const CustomerCell = ({ customer }: CustomerCellProps) => {
  const name = customer
    ? `${customer.first_name || ""} ${customer.last_name || ""}`.trim()
    : undefined;

  return (
    <div className="flex items-center gap-2">
      <Avatar src={undefined} fallback={name?.charAt(0) || "?"} size="small" />
      <div>
        <Text size="small" className="font-medium">
          {name || "-"}
        </Text>
        {customer?.email && (
          <Text size="xsmall" className="text-gray-500">
            {customer.email}
          </Text>
        )}
      </div>
    </div>
  );
};
