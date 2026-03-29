import { Heading, Text, Button } from "@zevaguillo/ui-components";
import { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: ReactNode;
}

export const EmptyState = ({
  title,
  description,
  action,
  icon,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && <div className="mb-4 text-gray-400">{icon}</div>}
      <Heading level="h3" className="mb-2">
        {title}
      </Heading>
      {description && (
        <Text size="small" className="text-gray-500 mb-4 max-w-md">
          {description}
        </Text>
      )}
      {action && <Button onClick={action.onClick}>{action.label}</Button>}
    </div>
  );
};

export const EmptyTableContent = ({
  title,
  description,
  action,
}: Omit<EmptyStateProps, "icon">) => {
  return <EmptyState title={title} description={description} action={action} />;
};
