import React from "react";
import clsx from "clsx";
import type { TextProps } from "./Text.types";

export const Text = ({
  size = "base",
  weight = "regular",
  family = "sans",
  leading = "normal",
  children,
  as: Component = "p",
  className = "",
}: TextProps) => {
  return (
    <Component
      className={clsx(
        family === "sans" && "font-sans",
        family === "mono" && "font-mono",
        size === "xsmall" && "text-xs",
        size === "small" && "text-sm",
        size === "base" && "text-base",
        size === "large" && "text-lg",
        size === "xlarge" && "text-xl",
        weight === "regular" && "font-normal",
        weight === "medium" && "font-medium",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold",
        leading === "compact" && "leading-tight",
        leading === "normal" && "leading-normal",
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Text;
