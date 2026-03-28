import React from "react";
import clsx from "clsx";
import type { DividerProps } from "./Divider.types";

export const Divider = ({
  orientation = "horizontal",
  text,
  variant = "solid",
  className = "",
}: DividerProps) => {
  const variantStyles = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };

  if (orientation === "vertical") {
    return (
      <div
        className={clsx(
          "h-full w-px mx-2 bg-gray-200",
          variantStyles[variant],
          className,
        )}
      />
    );
  }

  if (text) {
    return (
      <div className={clsx("flex items-center", className)}>
        <div
          className={clsx(
            "flex-1 border-t",
            variantStyles[variant],
            "border-gray-200",
          )}
        />
        <span className="px-3 text-sm text-gray-500">{text}</span>
        <div
          className={clsx(
            "flex-1 border-t",
            variantStyles[variant],
            "border-gray-200",
          )}
        />
      </div>
    );
  }

  return (
    <hr
      className={clsx(
        "w-full border-t border-gray-200",
        variantStyles[variant],
        className,
      )}
    />
  );
};

export default Divider;
