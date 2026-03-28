import React, { useState } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import type { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  content,
  children,
  position = "top",
  className = "",
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-gray-900",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-gray-900",
    left: "left-full top-1/2 -translate-y-1/2 border-l-gray-900",
    right: "right-full top-1/2 -translate-y-1/2 border-r-gray-900",
  };

  return (
    <div
      className={clsx("relative inline-block", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {isVisible &&
        createPortal(
          <div
            className={clsx(
              "absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg",
              "whitespace-nowrap animate-fade-in",
              positionClasses[position],
            )}
          >
            {content}
            <div
              className={clsx(
                "absolute w-0 h-0 border-4 border-transparent",
                arrowClasses[position],
              )}
            />
          </div>,
          document.body,
        )}
    </div>
  );
};

export default Tooltip;
