import React, { useState } from "react";
import clsx from "clsx";
import type { AccordionProps } from "./Accordion.types";

export const Accordion = ({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div
      className={clsx(
        "divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden",
        className,
      )}
    >
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className={clsx(
                "w-full flex items-center justify-between px-4 py-3 text-left",
                "bg-white hover:bg-gray-50 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-inset",
              )}
            >
              <span className="font-medium text-gray-900">{item.title}</span>
              <svg
                className={clsx(
                  "h-5 w-5 text-gray-500 transition-transform duration-200",
                  isOpen && "transform rotate-180",
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={clsx(
                "bg-white overflow-hidden transition-all duration-200",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="px-4 py-3 text-gray-600 border-t border-gray-100">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
