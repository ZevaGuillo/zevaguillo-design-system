import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import type { PopoverProps } from "./Popover.types";

export const Popover = ({
  trigger,
  content,
  children,
  open: controlledOpen,
  onOpenChange,
  position = "bottom",
  className = "",
}: PopoverProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setInternalOpen(false);
        onOpenChange?.(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onOpenChange]);

  const handleToggle = () => {
    const newValue = !isOpen;
    if (!isControlled) {
      setInternalOpen(newValue);
    }
    onOpenChange?.(newValue);
  };

  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  const triggerElement = trigger || (children && React.Children.only(children));
  const popoverContent =
    content || (children && !React.Children.only(children) ? children : null);

  return (
    <div ref={triggerRef} className={clsx("relative inline-block", className)}>
      {triggerElement && <div onClick={handleToggle}>{triggerElement}</div>}
      {isOpen && popoverContent && (
        <div
          className={clsx(
            "z-50 rounded-md border border-gray-200 bg-white p-2 shadow-lg",
            positionClasses[position],
          )}
        >
          {popoverContent}
        </div>
      )}
    </div>
  );
};

export default Popover;
