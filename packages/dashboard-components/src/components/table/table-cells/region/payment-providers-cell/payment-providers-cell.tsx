import { Badge, Text } from "@zevaguillo/ui-components";

export interface PaymentProvidersCellProps {
  providers?: Array<{ id?: string }>;
}

export const PaymentProvidersCell = ({
  providers,
}: PaymentProvidersCellProps) => {
  if (!providers || providers.length === 0) return <Text size="small">-</Text>;

  return (
    <div className="flex flex-wrap gap-1">
      {providers.slice(0, 2).map((provider, index) => (
        <Badge key={index} variant="default">
          {provider.id}
        </Badge>
      ))}
      {providers.length > 2 && (
        <Badge variant="default">+{providers.length - 2}</Badge>
      )}
    </div>
  );
};
