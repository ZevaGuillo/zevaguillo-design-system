import React from "react";
import clsx from "clsx";
import type { TimeInputProps } from "./TimeInput.types";

export const TimeInput = ({
  value,
  defaultValue = "",
  placeholder = "HH:MM",
  disabled = false,
  onChange,
  className = "",
}: TimeInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    newValue = newValue.replace(/[^0-9:]/g, "");
    if (newValue.length === 2 && !newValue.includes(":")) {
      newValue = newValue + ":";
    }
    if (newValue.length <= 5) {
      onChange?.(newValue);
    }
  };

  return (
    <input
      type="text"
      value={value ?? defaultValue}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      className={clsx(
        "h-10 rounded-md border border-gray-300 px-3 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-sky-500",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    />
  );
};

export default TimeInput;
