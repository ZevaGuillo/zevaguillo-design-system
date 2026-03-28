import React from "react";
import clsx from "clsx";
import type { BadgeProps } from "./Badge.types";

export const Badge = ({
  variant = "default",
  size = "medium",
  children,
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center font-medium rounded-full",

        // Size styles
        size === "small" && "px-2 py-0.5 text-xs",
        size === "medium" && "px-2.5 py-0.5 text-sm",

        // Variant styles
        variant === "default" && "bg-gray-100 text-gray-800",
        variant === "success" && "bg-green-100 text-green-800",
        variant === "warning" && "bg-yellow-100 text-yellow-800",
        variant === "error" && "bg-red-100 text-red-800",
        variant === "info" && "bg-blue-100 text-blue-800",

        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
