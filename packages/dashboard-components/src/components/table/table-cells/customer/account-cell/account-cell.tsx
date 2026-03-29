import { Badge, Text } from "@zevaguillo/ui-components";

export interface AccountCellProps {
  customer?: {
    first_name?: string;
    last_name?: string;
    email?: string;
    has_account?: boolean;
  };
}

export const AccountCell = ({ customer }: AccountCellProps) => {
  const hasAccount = customer?.has_account;

  return (
    <div className="flex items-center gap-2">
      <div>
        <Text size="small" className="font-medium">
          {customer?.first_name} {customer?.last_name}
        </Text>
        {customer?.email && (
          <Text size="xsmall" className="text-gray-500">
            {customer.email}
          </Text>
        )}
      </div>
      {hasAccount !== undefined && (
        <Badge variant={hasAccount ? "success" : "default"}>
          {hasAccount ? "Account" : "Guest"}
        </Badge>
      )}
    </div>
  );
};
