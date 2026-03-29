import { ReactNode } from "react";
import { Tooltip } from "@zevaguillo/ui-components";

export interface ConditionalTooltipProps {
  content: ReactNode;
  children: ReactNode;
  show?: boolean;
  position?: "top" | "bottom" | "left" | "right";
}

export const ConditionalTooltip = ({
  content,
  children,
  show = true,
  position = "top",
}: ConditionalTooltipProps) => {
  if (!show) {
    return <>{children}</>;
  }

  return (
    <Tooltip content={content} position={position}>
      {children}
    </Tooltip>
  );
};
