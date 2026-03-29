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
          className={clsx(
            "block font-medium mb-1.5 text-sm",
            error ? "text-red-600" : "text-gray-700",
          )}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          className={clsx(
            "w-full rounded-md border bg-white outline-none transition-all",
            "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
            "py-2 px-3 text-sm appearance-none",
            "bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
            "bg-[length:1.5rem_1.5rem] bg-[right_0.5rem_center] bg-no-repeat",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 hover:border-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200",
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
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Select;
