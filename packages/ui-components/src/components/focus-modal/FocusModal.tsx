import React, { useEffect } from "react";
import clsx from "clsx";
import type {
  FocusModalProps,
  FocusModalHeaderProps,
  FocusModalTitleProps,
  FocusModalDescriptionProps,
  FocusModalBodyProps,
  FocusModalFooterProps,
  FocusModalCloseProps,
  FocusModalContentProps,
} from "./FocusModal.types";

const FocusModalComponent = ({
  open,
  onOpenChange,
  children,
  title,
  onClose,
  size = "medium",
  className = "",
}: FocusModalProps) => {
  const handleClose = () => {
    onClose?.();
    onOpenChange?.(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose, onOpenChange]);

  if (!open) return null;

  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={handleClose} />
      <div
        className={clsx(
          "relative z-10 mx-4 w-full rounded-lg bg-white shadow-xl",
          sizeClasses[size],
          className,
        )}
      >
        {title && (
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const FocusModalHeader = ({ children }: FocusModalHeaderProps) => (
  <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
    {children}
  </div>
);

export const FocusModalTitle = ({ children }: FocusModalTitleProps) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

export const FocusModalDescription = ({
  children,
}: FocusModalDescriptionProps) => (
  <p className="text-sm text-gray-500">{children}</p>
);

export const FocusModalBody = ({
  children,
  className,
}: FocusModalBodyProps) => (
  <div className={clsx("p-6", className)}>{children}</div>
);

export const FocusModalFooter = ({
  children,
  className,
}: FocusModalFooterProps) => (
  <div
    className={clsx(
      "flex items-center justify-end gap-x-4 border-t border-gray-200 px-6 py-4",
      className,
    )}
  >
    {children}
  </div>
);

export const FocusModalClose = ({
  children,
  onClick,
  asChild,
}: FocusModalCloseProps) => (
  <button
    type="button"
    onClick={onClick}
    className="text-gray-400 hover:text-gray-600"
  >
    {children || "✕"}
  </button>
);

export const FocusModalContent = ({ children }: FocusModalContentProps) => (
  <>{children}</>
);

// Create namespace with sub-components
export const FocusModal = Object.assign(FocusModalComponent, {
  Header: FocusModalHeader,
  Title: FocusModalTitle,
  Description: FocusModalDescription,
  Body: FocusModalBody,
  Footer: FocusModalFooter,
  Close: FocusModalClose,
  Content: FocusModalContent,
});

export default FocusModal;
