import React from "react";
import clsx from "clsx";
import type { TagProps } from "./Tag.types";

export const Tag = ({
  label,
  variant = "default",
  size = "medium",
  onRemove,
  className = "",
}: TagProps) => {
  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-sky-100 text-sky-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  const sizeStyles = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center font-medium rounded-full",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {label}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 hover:opacity-70 transition-opacity"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;
