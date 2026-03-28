import React from "react";
import clsx from "clsx";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  disabled = false,
  loading = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        // Base styles
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // Size styles
        size === "small" && "h-8 px-3 text-xs",
        size === "medium" && "h-10 px-4 text-sm",
        size === "large" && "h-12 px-6 text-base",

        // Variant styles
        variant === "primary" &&
          "bg-sky-500 text-white hover:bg-sky-600 focus-visible:ring-sky-500",
        variant === "secondary" &&
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
        variant === "outline" &&
          "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500",
        variant === "ghost" &&
          "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500",
        variant === "danger" &&
          "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",

        className,
      )}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
