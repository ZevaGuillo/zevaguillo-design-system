import React from "react";
import clsx from "clsx";
import type { InlineTipProps } from "./InlineTip.types";

export const InlineTip = ({
  children,
  variant = "default",
  className = "",
}: InlineTipProps) => {
  const variantClasses = {
    default: "bg-gray-50 border-gray-200 text-gray-700",
    tip: "bg-blue-50 border-blue-200 text-blue-700",
    important: "bg-yellow-50 border-yellow-200 text-yellow-700",
    warning: "bg-red-50 border-red-200 text-red-700",
  };

  const icons = {
    default: "💡",
    tip: "💡",
    important: "⚠️",
    warning: "⚠️",
  };

  return (
    <div
      className={clsx(
        "flex items-start gap-2 rounded-md border p-3 text-sm",
        variantClasses[variant],
        className,
      )}
    >
      <span>{icons[variant]}</span>
      <div>{children}</div>
    </div>
  );
};

export default InlineTip;
