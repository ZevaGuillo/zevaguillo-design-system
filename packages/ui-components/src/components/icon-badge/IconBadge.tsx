import React from "react";
import clsx from "clsx";
import type { IconBadgeProps } from "./IconBadge.types";

export const IconBadge = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
}: IconBadgeProps) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center rounded-lg",
        size === "small" && "h-6 w-6",
        size === "medium" && "h-8 w-8",
        size === "large" && "h-10 w-10",
        variant === "default" && "bg-gray-100 text-gray-700",
        variant === "success" && "bg-green-100 text-green-700",
        variant === "warning" && "bg-yellow-100 text-yellow-700",
        variant === "danger" && "bg-red-100 text-red-700",
        variant === "info" && "bg-blue-100 text-blue-700",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default IconBadge;
