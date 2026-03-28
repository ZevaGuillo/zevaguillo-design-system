import React from "react";
import clsx from "clsx";
import type { CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  label,
  checked,
  defaultChecked,
  value,
  disabled = false,
  name,
  id,
  className = "",
  onChange,
}: CheckboxProps) => {
  const checkboxId =
    id || name || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={clsx("flex items-center", className)}>
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className={clsx(
          "h-4 w-4 rounded border-gray-300 text-sky-500",
          "focus:ring-sky-500 focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "cursor-pointer",
        )}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className={clsx(
            "ml-2 text-sm text-gray-700",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
