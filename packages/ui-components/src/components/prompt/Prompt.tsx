import React from "react";
import clsx from "clsx";
import type { PromptProps } from "./Prompt.types";

export const Prompt = ({
  open,
  title,
  children,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  showCancel = true,
  variant = "primary",
  className = "",
}: PromptProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onCancel} />
      <div
        className={clsx(
          "relative z-10 mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl",
          className,
        )}
      >
        {title && <h2 className="mb-4 text-lg font-semibold">{title}</h2>}
        <div className="mb-6">{children}</div>
        <div className="flex justify-end gap-3">
          {showCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              {cancelText}
            </button>
          )}
          <button
            type="button"
            onClick={onConfirm}
            className={clsx(
              "rounded-md px-4 py-2 text-sm font-medium text-white",
              variant === "primary" && "bg-sky-500 hover:bg-sky-600",
              variant === "danger" && "bg-red-500 hover:bg-red-600",
            )}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
