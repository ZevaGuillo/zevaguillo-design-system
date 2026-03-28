import React from "react";
import clsx from "clsx";
import type { StatusBadgeProps } from "./StatusBadge.types";

export const StatusBadge = ({
  children,
  variant = "default",
  dotColor = "default",
  className = "",
}: StatusBadgeProps) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        variant === "default" && "bg-gray-100 text-gray-700",
        variant === "success" && "bg-green-100 text-green-700",
        variant === "warning" && "bg-yellow-100 text-yellow-700",
        variant === "danger" && "bg-red-100 text-red-700",
        variant === "info" && "bg-blue-100 text-blue-700",
        className,
      )}
    >
      <span
        className={clsx(
          "h-1.5 w-1.5 rounded-full",
          dotColor === "default" && "bg-gray-500",
          dotColor === "green" && "bg-green-500",
          dotColor === "yellow" && "bg-yellow-500",
          dotColor === "red" && "bg-red-500",
          dotColor === "blue" && "bg-blue-500",
        )}
      />
      {children}
    </span>
  );
};

export default StatusBadge;
