import React from "react";
import clsx from "clsx";
import type { ProgressAccordionProps } from "./ProgressAccordion.types";

export const ProgressAccordion = ({
  items,
  expandedId,
  onExpandedChange,
  className = "",
}: ProgressAccordionProps) => {
  return (
    <div className={clsx("space-y-2", className)}>
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <div key={item.id} className="rounded-lg border border-gray-200">
            <button
              type="button"
              onClick={() => onExpandedChange?.(item.id)}
              className="flex w-full items-center justify-between px-4 py-3 text-left"
            >
              <div className="flex items-center gap-3">
                <div
                  className={clsx(
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium",
                    item.completed
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700",
                  )}
                >
                  {item.completed ? "✓" : item.progress || 0}
                </div>
                <span className="font-medium">{item.title}</span>
              </div>
              <span
                className={clsx(
                  "transition-transform",
                  isExpanded && "rotate-180",
                )}
              >
                ▼
              </span>
            </button>
            {item.progress !== undefined && (
              <div className="mx-4 mb-2 h-1 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full bg-sky-500 transition-all"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            )}
            {isExpanded && (
              <div className="border-t border-gray-200 px-4 py-3">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressAccordion;
