import React, { useEffect } from "react";
import clsx from "clsx";
import type { DrawerProps } from "./Drawer.types";

export const Drawer = ({
  open,
  children,
  position = "right",
  size = "medium",
  onClose,
  className = "",
}: DrawerProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
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
  }, [open, onClose]);

  if (!open) return null;

  const sizeClasses = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg",
  };

  const positionClasses = {
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
  };

  const animationClasses = {
    left: "animate-slideInLeft",
    right: "animate-slideInRight",
    top: "animate-slideInTop",
    bottom: "animate-slideInBottom",
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div
        className={clsx(
          "fixed bg-white shadow-lg",
          positionClasses[position],
          sizeClasses[size],
          animationClasses[position],
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
