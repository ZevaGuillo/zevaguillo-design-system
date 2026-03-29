import { useState, ReactNode } from "react";
import clsx from "clsx";

export interface SegmentedControlOption {
  value: string;
  label: string;
}

export interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export const SegmentedControl = ({
  options,
  value,
  onChange,
}: SegmentedControlProps) => {
  return (
    <div className="inline-flex rounded-md bg-gray-100 p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange?.(option.value)}
          className={clsx(
            "px-3 py-1.5 text-sm rounded-md transition-colors",
            value === option.value
              ? "bg-white shadow-sm font-medium"
              : "text-gray-600 hover:text-gray-900",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
