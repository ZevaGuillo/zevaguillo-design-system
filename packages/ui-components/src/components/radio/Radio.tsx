import React from "react";
import clsx from "clsx";
import type { RadioProps } from "./Radio.types";

export const Radio = ({
  options,
  value,
  defaultValue,
  name,
  label,
  disabled = false,
  id,
  className = "",
  onChange,
}: RadioProps) => {
  const groupId =
    id || name || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`${groupId}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              defaultChecked={defaultValue === option.value}
              disabled={disabled || option.disabled}
              onChange={(e) => onChange?.(e.target.value)}
              className={clsx(
                "h-4 w-4 border-gray-300 text-sky-500",
                "focus:ring-sky-500 focus:ring-offset-0",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "cursor-pointer",
              )}
            />
            <label
              htmlFor={`${groupId}-${option.value}`}
              className={clsx(
                "ml-2 text-sm text-gray-700",
                (disabled || option.disabled) &&
                  "cursor-not-allowed opacity-50",
              )}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
