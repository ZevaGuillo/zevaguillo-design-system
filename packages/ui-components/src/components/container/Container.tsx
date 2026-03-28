import React from "react";
import clsx from "clsx";
import type { ContainerProps } from "./Container.types";

export const Container = ({
  children,
  size = "medium",
  className = "",
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full",
        size === "small" && "max-w-sm",
        size === "medium" && "max-w-2xl",
        size === "large" && "max-w-4xl",
        size === "full" && "max-w-full",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
