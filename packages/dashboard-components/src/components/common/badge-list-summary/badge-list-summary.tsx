import { Badge } from "@zevaguillo/ui-components";
import { ReactNode } from "react";

export interface BadgeListSummaryProps {
  labels: string[];
  more?: number;
}

export const BadgeListSummary = ({ labels, more }: BadgeListSummaryProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {labels.slice(0, 3).map((label, index) => (
        <Badge key={index} variant="default">
          {label}
        </Badge>
      ))}
      {(more ?? 0) > 0 && <Badge variant="default">+{more}</Badge>}
    </div>
  );
};
