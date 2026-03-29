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
          className={clsx(
            "block font-medium mb-1.5 text-sm",
            error ? "text-red-600" : "text-gray-700",
          )}
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
          "w-full rounded-md border bg-white outline-none transition-all",
          "placeholder:text-gray-400",
          "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 disabled:placeholder:text-gray-300",
          "resize-y min-h-[80px] py-2 px-3 text-sm",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 hover:border-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200",
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
