import React from "react";
import clsx from "clsx";
import type { ToggleProps } from "./Toggle.types";

export const Toggle = ({
  label,
  checked,
  defaultChecked,
  disabled = false,
  name,
  id,
  className = "",
  onChange,
}: ToggleProps) => {
  const toggleId =
    id || name || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={clsx("flex items-center", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        id={toggleId}
        name={name}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={clsx(
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full",
          "border-2 border-transparent transition-colors duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
          checked ? "bg-sky-500" : "bg-gray-200",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow",
            "ring-0 transition duration-200 ease-in-out",
            checked ? "translate-x-5" : "translate-x-0",
          )}
        />
      </button>
      {label && (
        <label
          htmlFor={toggleId}
          className={clsx(
            "ml-3 text-sm font-medium text-gray-700",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Toggle;
