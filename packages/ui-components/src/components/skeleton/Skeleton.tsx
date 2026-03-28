import React from "react";
import clsx from "clsx";
import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton = ({
  width,
  height,
  variant = "text",
  lines = 1,
  className = "",
}: SkeletonProps) => {
  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-md",
  };

  const baseClasses = "animate-pulse bg-gray-200";

  if (variant === "text" && lines > 1) {
    return (
      <div className={clsx("space-y-2", className)}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              baseClasses,
              variantClasses.text,
              index === lines - 1 && lines > 1 ? "w-3/4" : "w-full",
            )}
            style={{
              height: height || "1rem",
              width: index === lines - 1 && lines > 1 ? "75%" : width,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={clsx(baseClasses, variantClasses[variant], className)}
      style={{
        width: width || (variant === "circular" ? height : "100%"),
        height: height || (variant === "text" ? "1rem" : "1rem"),
      }}
    />
  );
};

export default Skeleton;
