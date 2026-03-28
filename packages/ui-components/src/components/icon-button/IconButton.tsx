import React from "react";
import clsx from "clsx";
import type { IconButtonProps } from "./IconButton.types";

export const IconButton = ({
  children,
  variant = "secondary",
  size = "medium",
  disabled = false,
  type = "button",
  onClick,
  title,
  className = "",
}: IconButtonProps) => {
  return (
    <button
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        size === "small" && "h-8 w-8",
        size === "medium" && "h-10 w-10",
        size === "large" && "h-12 w-12",
        variant === "primary" &&
          "bg-sky-500 text-white hover:bg-sky-600 focus-visible:ring-sky-500",
        variant === "secondary" &&
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
        variant === "ghost" &&
          "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500",
        variant === "danger" &&
          "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
