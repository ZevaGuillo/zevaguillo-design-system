import React, { useState } from "react";
import clsx from "clsx";
import type { CalendarProps } from "./Calendar.types";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Calendar = ({
  selected,
  onSelect,
  minDate,
  maxDate,
  withMonthNavigation = true,
  className = "",
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(
    selected ? selected.getMonth() : new Date().getMonth(),
  );
  const [currentYear, setCurrentYear] = useState(
    selected ? selected.getFullYear() : new Date().getFullYear(),
  );

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const isDateDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const isDateSelected = (day: number) => {
    if (!selected) return false;
    return (
      selected.getDate() === day &&
      selected.getMonth() === currentMonth &&
      selected.getFullYear() === currentYear
    );
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (day: number) => {
    if (isDateDisabled(day)) return;
    const date = new Date(currentYear, currentMonth, day);
    onSelect?.(date);
  };

  return (
    <div className={clsx("rounded-lg border border-gray-200 p-4", className)}>
      {withMonthNavigation && (
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="rounded-md p-1 hover:bg-gray-100"
          >
            ←
          </button>
          <span className="font-medium">
            {MONTHS[currentMonth]} {currentYear}
          </span>
          <button
            type="button"
            onClick={handleNextMonth}
            className="rounded-md p-1 hover:bg-gray-100"
          >
            →
          </button>
        </div>
      )}
      <div className="grid grid-cols-7 gap-1 text-center">
        {DAYS.map((day) => (
          <div key={day} className="text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const disabled = isDateDisabled(day);
          const selected = isDateSelected(day);
          return (
            <button
              key={day}
              type="button"
              disabled={disabled}
              onClick={() => handleDayClick(day)}
              className={clsx(
                "h-8 w-8 rounded-md text-sm",
                selected && "bg-sky-500 text-white",
                !selected && !disabled && "hover:bg-gray-100",
                disabled && "opacity-30 cursor-not-allowed",
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
