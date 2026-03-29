import React from "react";
import clsx from "clsx";
import type { ChipProps } from "./Chip.types";

export const Chip = ({
  label,
  variant = "filled",
  color = "default",
  selected = false,
  disabled = false,
  onClick,
  onRemove,
  className = "",
}: ChipProps) => {
  const colorStyles = {
    default: {
      filled: {
        base: "bg-gray-100 text-gray-800",
        selected: "bg-gray-800 text-white",
      },
      outlined: {
        base: "border border-gray-300 text-gray-700",
        selected: "border-gray-800 bg-gray-800 text-white",
      },
    },
    primary: {
      filled: {
        base: "bg-sky-100 text-sky-800",
        selected: "bg-sky-600 text-white",
      },
      outlined: {
        base: "border border-sky-300 text-sky-700",
        selected: "border-sky-600 bg-sky-600 text-white",
      },
    },
    success: {
      filled: {
        base: "bg-green-100 text-green-800",
        selected: "bg-green-600 text-white",
      },
      outlined: {
        base: "border border-green-300 text-green-700",
        selected: "border-green-600 bg-green-600 text-white",
      },
    },
    warning: {
      filled: {
        base: "bg-yellow-100 text-yellow-800",
        selected: "bg-yellow-600 text-white",
      },
      outlined: {
        base: "border border-yellow-300 text-yellow-700",
        selected: "border-yellow-600 bg-yellow-600 text-white",
      },
    },
    error: {
      filled: {
        base: "bg-red-100 text-red-800",
        selected: "bg-red-600 text-white",
      },
      outlined: {
        base: "border border-red-300 text-red-700",
        selected: "border-red-600 bg-red-600 text-white",
      },
    },
    info: {
      filled: {
        base: "bg-blue-100 text-blue-800",
        selected: "bg-blue-600 text-white",
      },
      outlined: {
        base: "border border-blue-300 text-blue-700",
        selected: "border-blue-600 bg-blue-600 text-white",
      },
    },
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500",
        selected
          ? colorStyles[color].filled.selected
          : colorStyles[color].filled.base,
        disabled && "opacity-50 cursor-not-allowed",
        onClick && !disabled && "cursor-pointer hover:opacity-80",
        className,
      )}
    >
      <span>{label}</span>
      {onRemove && !disabled && (
        <button
          type="button"
          onClick={handleRemove}
          className={clsx(
            "ml-1 rounded-full p-0.5 hover:bg-black/10",
            selected ? "hover:bg-white/20" : "hover:bg-black/10",
          )}
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </button>
  );
};

export default Chip;
