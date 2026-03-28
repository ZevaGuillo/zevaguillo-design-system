import React from "react";
import clsx from "clsx";
import type { ProgressProps } from "./Progress.types";

export const Progress = ({
  value = 0,
  size = "medium",
  variant = "default",
  showLabel = false,
  className = "",
}: ProgressProps) => {
  const sizeClasses = {
    small: "h-1",
    medium: "h-2",
    large: "h-3",
  };

  const variantClasses = {
    default: "bg-sky-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  return (
    <div className={clsx("w-full", className)}>
      <div
        className={clsx(
          "w-full bg-gray-200 rounded-full overflow-hidden",
          sizeClasses[size],
        )}
      >
        <div
          className={clsx(
            "h-full rounded-full transition-all duration-300",
            variantClasses[variant],
          )}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-sm text-gray-600 text-right">
          {Math.round(value)}%
        </p>
      )}
    </div>
  );
};

export default Progress;
