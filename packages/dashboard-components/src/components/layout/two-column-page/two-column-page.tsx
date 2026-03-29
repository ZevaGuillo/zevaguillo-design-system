import { PropsWithChildren, ReactNode } from "react";
import { Heading, Text, Button } from "@zevaguillo/ui-components";

export interface TwoColumnPageProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  left?: ReactNode;
  right?: ReactNode;
}

export const TwoColumnPage = ({
  children,
  title,
  subtitle,
  action,
  left,
  right,
}: TwoColumnPageProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <Heading level="h1">{title}</Heading>
          {subtitle && (
            <Text size="small" className="text-gray-500 mt-1">
              {subtitle}
            </Text>
          )}
        </div>
        {action && <Button onClick={action.onClick}>{action.label}</Button>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">{children}</div>
        {right && <div className="lg:col-span-1">{right}</div>}
      </div>
    </div>
  );
};
