import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Calendar } from "../calendar/Calendar";
import type { DatePickerProps } from "./DatePicker.types";

export const DatePicker = ({
  value,
  defaultValue,
  placeholder = "Select date",
  disabled = false,
  onChange,
  className = "",
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value || defaultValue,
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  const handleClear = () => {
    setSelectedDate(undefined);
    onChange?.(undefined);
  };

  return (
    <div ref={containerRef} className={clsx("relative", className)}>
      <div className="flex">
        <input
          type="text"
          readOnly
          value={selectedDate ? formatDate(selectedDate) : ""}
          placeholder={placeholder}
          disabled={disabled}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={clsx(
            "h-10 rounded-l-md border border-gray-300 bg-white px-3 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-sky-500",
            disabled && "opacity-50 cursor-not-allowed",
            !disabled && "cursor-pointer",
          )}
        />
        <button
          type="button"
          onClick={handleClear}
          disabled={disabled || !selectedDate}
          className={clsx(
            "border-t border-b border-r border-gray-300 px-3",
            "hover:bg-gray-100",
            disabled || !selectedDate
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer",
          )}
        >
          ✕
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-50 mt-1">
          <Calendar selected={selectedDate} onSelect={handleDateSelect} />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
