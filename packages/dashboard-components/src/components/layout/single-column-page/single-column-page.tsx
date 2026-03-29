import { PropsWithChildren, ReactNode } from "react";
import { Heading, Text, Button } from "@zevaguillo/ui-components";

export interface SingleColumnPageProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  hideTitle?: boolean;
}

export const SingleColumnPage = ({
  children,
  title,
  subtitle,
  action,
  hideTitle = false,
}: SingleColumnPageProps) => {
  return (
    <div className="flex flex-col gap-6">
      {!hideTitle && (
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
      )}
      {children}
    </div>
  );
};
