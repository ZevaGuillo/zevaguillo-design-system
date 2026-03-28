import React, { useState } from "react";
import clsx from "clsx";
import type { SwitchProps } from "./Switch.types";

export const Switch = ({
  checked: controlledChecked,
  defaultChecked = false,
  label,
  disabled = false,
  onChange,
  className = "",
}: SwitchProps) => {
  const [uncontrolledChecked, setUncontrolledChecked] =
    useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : uncontrolledChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    if (!isControlled) {
      setUncontrolledChecked(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <label
      className={clsx(
        "inline-flex items-center gap-2",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={clsx(
            "h-6 w-11 rounded-full transition-colors",
            isChecked ? "bg-sky-500" : "bg-gray-300",
          )}
        />
        <div
          className={clsx(
            "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
            isChecked && "translate-x-5",
          )}
        />
      </div>
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
    </label>
  );
};

export default Switch;
