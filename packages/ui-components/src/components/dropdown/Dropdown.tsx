import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import type { DropdownProps } from "./Dropdown.types";

export const Dropdown = ({
  trigger,
  items,
  isOpen: controlledIsOpen,
  onClose,
  className = "",
}: DropdownProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOpen = controlledIsOpen ?? internalIsOpen;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (controlledIsOpen === undefined) {
          setInternalIsOpen(false);
        } else {
          onClose?.();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, controlledIsOpen, onClose]);

  const handleItemClick = (item: (typeof items)[0]) => {
    if (item.disabled || item.divider) return;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(false);
    } else {
      onClose?.();
    }
  };

  return (
    <div className={clsx("relative inline-block", className)} ref={dropdownRef}>
      <div
        onClick={() => {
          if (controlledIsOpen === undefined) {
            setInternalIsOpen(!internalIsOpen);
          }
        }}
      >
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {item.divider ? (
                  <div className="my-1 border-t border-gray-100" />
                ) : (
                  <button
                    type="button"
                    disabled={item.disabled}
                    onClick={() => handleItemClick(item)}
                    className={clsx(
                      "flex w-full items-center px-4 py-2 text-sm",
                      item.disabled
                        ? "cursor-not-allowed opacity-50"
                        : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    {item.icon && <span className="mr-3">{item.icon}</span>}
                    {item.label}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
