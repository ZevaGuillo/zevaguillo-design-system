import React from "react";
import clsx from "clsx";
import type { CodeProps } from "./Code.types";

export const Code = ({
  children,
  variant = "neutral",
  className = "",
}: CodeProps) => {
  return (
    <code
      className={clsx(
        "inline-flex items-center rounded-md px-1.5 py-0.5 font-mono text-xs",
        variant === "neutral" && "bg-gray-100 text-gray-900",
        variant === "ghost" && "bg-transparent text-gray-700",
        className,
      )}
    >
      {children}
    </code>
  );
};

export default Code;
