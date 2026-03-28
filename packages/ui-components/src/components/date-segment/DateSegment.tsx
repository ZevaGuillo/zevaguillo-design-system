import React from "react";
import clsx from "clsx";
import type { DateSegmentProps } from "./DateSegment.types";

export const DateSegment = ({
  type,
  value,
  placeholder,
  editable = true,
  max,
  min,
  onChange,
  className = "",
}: DateSegmentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "");
    let validatedValue = newValue;

    if (newValue.length >= (min?.toString().length || 1)) {
      const numValue = parseInt(newValue, 10);
      if (!isNaN(numValue)) {
        if (max !== undefined && numValue > max) {
          validatedValue = max.toString();
        } else if (min !== undefined && numValue < min) {
          validatedValue = min.toString();
        } else {
          validatedValue = newValue;
        }
      }
    }
    onChange?.(validatedValue);
  };

  const padLength = type === "year" ? 4 : 2;

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={!editable}
      maxLength={padLength}
      className={clsx(
        "h-10 w-14 rounded-md border border-gray-300 text-center text-sm",
        "focus:outline-none focus:ring-2 focus:ring-sky-500",
        !editable && "opacity-50 cursor-not-allowed",
        className,
      )}
    />
  );
};

export default DateSegment;
