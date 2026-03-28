import React, { useState } from "react";
import clsx from "clsx";
import type { InputProps } from "./Input.types";

export const Input = ({
  type = "text",
  placeholder,
  value,
  defaultValue,
  disabled = false,
  error = false,
  errorMessage,
  label,
  helperText,
  name,
  id,
  size = "medium",
  className = "",
  onChange,
  onBlur,
  onFocus,
}: InputProps) => {
  const inputId =
    id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isSearch = type === "search";

  const sizeClasses = {
    small: "h-7 px-2 py-1 text-xs",
    medium: "h-10 px-3 py-2 text-sm",
    large: "h-12 px-4 py-3 text-base",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={clsx(
            "block font-medium mb-1.5",
            size === "small" && "text-xs",
            size === "medium" && "text-sm",
            size === "large" && "text-base",
            error ? "text-red-600" : "text-gray-700",
          )}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          className={clsx(
            // Base styles
            "w-full rounded-md border bg-white outline-none transition-all",
            "placeholder:text-gray-400",
            "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 disabled:placeholder:text-gray-300",

            // Size
            sizeClasses[size],

            // Border & focus
            error
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 hover:border-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200",

            // Search padding
            isSearch && size === "medium" && "pl-10",
            isSearch && size === "small" && "pl-8",
            isSearch && size === "large" && "pl-12",

            // Password padding
            isPassword && size === "medium" && "pr-10",
            isPassword && size === "small" && "pr-8",
            isPassword && size === "large" && "pr-12",

            className,
          )}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          aria-invalid={error}
        />

        {/* Search Icon */}
        {isSearch && (
          <div
            className={clsx(
              "absolute left-0 top-0 flex items-center justify-center text-gray-400",
              size === "small" && "h-7 w-7",
              size === "medium" && "h-10 w-10",
              size === "large" && "h-12 w-12",
            )}
          >
            <svg
              className={clsx(
                size === "small" && "w-4 h-4",
                size === "medium" && "w-5 h-5",
                size === "large" && "w-6 h-6",
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        )}

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={clsx(
              "absolute right-0 top-0 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors",
              size === "small" && "h-7 w-7",
              size === "medium" && "h-10 w-10",
              size === "large" && "h-12 w-12",
            )}
          >
            {showPassword ? (
              <svg
                className={clsx(
                  size === "small" && "w-4 h-4",
                  size === "medium" && "w-5 h-5",
                  size === "large" && "w-6 h-6",
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                className={clsx(
                  size === "small" && "w-4 h-4",
                  size === "medium" && "w-5 h-5",
                  size === "large" && "w-6 h-6",
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && errorMessage && (
        <p
          className={clsx(
            "mt-1",
            size === "small" && "text-xs",
            size === "medium" && "text-sm",
            size === "large" && "text-base",
            "text-red-600",
          )}
        >
          {errorMessage}
        </p>
      )}
      {!error && helperText && (
        <p
          className={clsx(
            "mt-1",
            size === "small" && "text-xs",
            size === "medium" && "text-sm",
            size === "large" && "text-base",
            "text-gray-500",
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
