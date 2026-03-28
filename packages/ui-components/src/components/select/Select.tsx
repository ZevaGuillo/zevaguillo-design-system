import React from "react";
import clsx from "clsx";
import type { SelectProps } from "./Select.types";

export const Select = ({
  options,
  value,
  defaultValue,
  placeholder = "Select an option",
  label,
  error,
  disabled = false,
  name,
  id,
  className = "",
  onChange,
}: SelectProps) => {
  const selectId =
    id || name || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        name={name}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className={clsx(
          "block w-full rounded-md border-gray-300 shadow-sm",
          "focus:border-sky-500 focus:ring-sky-500 sm:text-sm",
          "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className,
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Select;
