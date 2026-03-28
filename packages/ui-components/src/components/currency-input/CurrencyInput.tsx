import React from "react";
import clsx from "clsx";
import type { CurrencyInputProps } from "./CurrencyInput.types";

export const CurrencyInput = ({
  value,
  defaultValue,
  currency = "USD",
  placeholder = "0.00",
  disabled = false,
  onChange,
  className = "",
}: CurrencyInputProps) => {
  const currencySymbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
  };

  const symbol = currencySymbols[currency] || currency;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, "");
    const numValue = parseFloat(rawValue);
    if (isNaN(numValue)) {
      onChange?.(undefined);
    } else {
      onChange?.(numValue);
    }
  };

  const displayValue =
    value !== undefined
      ? value.toFixed(2)
      : defaultValue !== undefined
        ? defaultValue.toFixed(2)
        : "";

  return (
    <div className={clsx("relative", className)}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        {symbol}
      </span>
      <input
        type="text"
        value={displayValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          "h-10 w-full rounded-md border border-gray-300 pl-7 pr-3 text-sm",
          "focus:outline-none focus:ring-2 focus:ring-sky-500",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      />
    </div>
  );
};

export default CurrencyInput;
