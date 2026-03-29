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
  const hasLeft = left !== undefined;
  const hasRight = right !== undefined;
  const hasChildren = children !== undefined;

  const getGridCols = () => {
    if (hasLeft && hasRight) return "grid-cols-1 lg:grid-cols-2";
    if (hasLeft || hasRight) return "grid-cols-1 lg:grid-cols-3";
    if (hasChildren) return "grid-cols-1";
    return "grid-cols-1 lg:grid-cols-3";
  };

  const getSpan = (hasLeft: boolean, hasRight: boolean, isLeft?: boolean) => {
    if (!hasLeft && !hasRight && hasChildren) return "";
    if (hasLeft && hasRight) return "";
    if (hasLeft || hasRight) return "lg:col-span-2";
    return "lg:col-span-2";
  };

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

      <div className={`grid ${getGridCols()} gap-6`}>
        {hasLeft && <div className={getSpan(true, false, true)}>{left}</div>}
        {hasChildren && (
          <div className={getSpan(hasLeft, hasRight)}>{children}</div>
        )}
        {hasRight && <div className={getSpan(false, true)}>{right}</div>}
      </div>
    </div>
  );
};
