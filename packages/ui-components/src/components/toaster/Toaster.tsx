import React from "react";
import clsx from "clsx";
import type { ToasterProps } from "./Toaster.types";

export const Toaster = ({
  toasts = [],
  position = "bottom-right",
  className = "",
}: ToasterProps) => {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  const variantClasses = {
    default: "bg-gray-900 text-white",
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
    warning: "bg-yellow-600 text-white",
  };

  if (toasts.length === 0) return null;

  return (
    <div
      className={clsx(
        "fixed z-50 flex flex-col gap-2",
        positionClasses[position],
        className,
      )}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={clsx(
            "rounded-md px-4 py-3 shadow-lg",
            variantClasses[toast.variant || "default"],
          )}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default Toaster;
