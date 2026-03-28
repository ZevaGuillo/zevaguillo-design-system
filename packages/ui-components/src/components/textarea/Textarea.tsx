import React from "react";
import clsx from "clsx";
import type { TextareaProps } from "./Textarea.types";

export const Textarea = ({
  value,
  defaultValue,
  placeholder,
  label,
  helperText,
  error,
  rows = 4,
  disabled = false,
  name,
  id,
  className = "",
  onChange,
  onBlur,
}: TextareaProps) => {
  const textareaId =
    id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={onBlur}
        className={clsx(
          "block w-full rounded-md border-gray-300 shadow-sm",
          "focus:border-sky-500 focus:ring-sky-500 sm:text-sm",
          "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          "resize-y min-h-[80px]",
        )}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {!error && helperText && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Textarea;
