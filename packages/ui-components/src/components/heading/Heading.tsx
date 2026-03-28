import React from "react";
import clsx from "clsx";
import type { HeadingProps } from "./Heading.types";

export const Heading = ({
  level = "h1",
  children,
  className = "",
}: HeadingProps) => {
  const HeadingTag = level;

  return (
    <HeadingTag
      className={clsx(
        "font-sans font-medium",
        level === "h1" && "text-4xl",
        level === "h2" && "text-3xl",
        level === "h3" && "text-2xl",
        level === "h4" && "text-xl",
        level === "h5" && "text-lg",
        level === "h6" && "text-base",
        className,
      )}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
