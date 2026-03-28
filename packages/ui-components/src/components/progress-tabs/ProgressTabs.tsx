import React from "react";
import clsx from "clsx";
import type { ProgressTabsProps } from "./ProgressTabs.types";

export const ProgressTabs = ({
  items,
  activeId,
  onChange,
  className = "",
}: ProgressTabsProps) => {
  const activeItem = items.find((item) => item.id === activeId) || items[0];

  return (
    <div className={clsx(className)}>
      <div className="flex border-b border-gray-200">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange?.(item.id)}
              className={clsx(
                "relative flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium",
                isActive ? "text-sky-600" : "text-gray-500 hover:text-gray-700",
              )}
            >
              <div
                className={clsx(
                  "flex h-6 w-6 items-center justify-center rounded-full text-xs",
                  item.completed
                    ? "bg-green-500 text-white"
                    : isActive
                      ? "bg-sky-100 text-sky-600"
                      : "bg-gray-200 text-gray-600",
                )}
              >
                {item.completed ? "✓" : item.progress || 0}
              </div>
              {item.label}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500" />
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-4">{activeItem?.content}</div>
    </div>
  );
};

export default ProgressTabs;
