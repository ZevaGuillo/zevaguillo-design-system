import React, { useEffect, useState } from "react";
import clsx from "clsx";
import type { CommandBarProps } from "./CommandBar.types";

export const CommandBar = ({
  items,
  open: controlledOpen,
  onOpenChange,
  className = "",
}: CommandBarProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isControlled) {
          onOpenChange?.(!open);
        } else {
          setInternalOpen(!open);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, isControlled, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      <div className="fixed inset-0 bg-black/50" />
      <div
        className={clsx(
          "relative z-10 w-full max-w-xl rounded-lg border border-gray-200 bg-white shadow-xl",
          className,
        )}
      >
        <div className="border-b border-gray-200 p-3">
          <input
            type="text"
            placeholder="Type a command..."
            className="w-full bg-transparent px-2 py-1 text-sm outline-none"
            autoFocus
          />
        </div>
        <ul className="max-h-64 overflow-y-auto p-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  item.action();
                  if (isControlled) {
                    onOpenChange?.(false);
                  } else {
                    setInternalOpen(false);
                  }
                }}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.shortcut && (
                  <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                    {item.shortcut}
                  </kbd>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandBar;
