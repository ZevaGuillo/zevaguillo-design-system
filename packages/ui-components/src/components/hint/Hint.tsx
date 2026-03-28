import React from "react";
import clsx from "clsx";
import type { HintProps } from "./Hint.types";

export const Hint = ({
  children,
  variant = "default",
  className = "",
}: HintProps) => {
  return (
    <p
      className={clsx(
        "text-sm",
        variant === "default" && "text-gray-500",
        variant === "error" && "text-red-500",
        variant === "success" && "text-green-500",
        variant === "warning" && "text-yellow-500",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Hint;
