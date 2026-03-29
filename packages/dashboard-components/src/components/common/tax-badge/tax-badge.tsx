import { Badge } from "@zevaguillo/ui-components";

export interface TaxBadgeProps {
  isTaxable?: boolean;
}

export const TaxBadge = ({ isTaxable }: TaxBadgeProps) => {
  return (
    <Badge variant={isTaxable ? "success" : "default"}>
      {isTaxable ? "Taxable" : "No tax"}
    </Badge>
  );
};
