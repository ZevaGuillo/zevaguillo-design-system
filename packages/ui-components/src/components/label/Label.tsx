import React from "react";
import clsx from "clsx";
import type { LabelProps } from "./Label.types";

export const Label = ({
  children,
  size = "base",
  weight = "regular",
  disabled = false,
  htmlFor,
  className = "",
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        "font-sans",
        size === "xsmall" && "text-xs",
        size === "small" && "text-sm",
        size === "base" && "text-base",
        size === "large" && "text-lg",
        weight === "regular" && "font-normal",
        weight === "medium" && "font-medium",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      {children}
    </label>
  );
};

export default Label;
