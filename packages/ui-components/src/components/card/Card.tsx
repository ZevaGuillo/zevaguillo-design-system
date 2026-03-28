import React from "react";
import clsx from "clsx";
import type { CardProps } from "./Card.types";

export const Card = ({
  children,
  title,
  description,
  footer,
  bordered = false,
  elevated = true,
  className = "",
  padding = "medium",
}: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-lg",
        bordered && "border border-gray-200",
        elevated && "shadow-sm",
        padding === "none" && "p-0",
        padding === "small" && "p-3",
        padding === "medium" && "p-4",
        padding === "large" && "p-6",
        className,
      )}
    >
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
      )}
      <div>{children}</div>
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-200">{footer}</div>
      )}
    </div>
  );
};

export default Card;
