import React, { useState } from "react";
import clsx from "clsx";
import type { TabsProps } from "./Tabs.types";

export const Tabs = ({
  tabs,
  activeIndex: controlledActiveIndex,
  defaultIndex = 0,
  variant = "line",
  className = "",
  onChange,
}: TabsProps) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(defaultIndex);
  const activeIndex = controlledActiveIndex ?? internalActiveIndex;

  const handleTabClick = (index: number) => {
    if (controlledActiveIndex === undefined) {
      setInternalActiveIndex(index);
    }
    onChange?.(index);
  };

  const isPills = variant === "pills";

  return (
    <div className={clsx("w-full", className)}>
      <div className={clsx("flex border-b", isPills && "border-b-0 gap-2")}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            disabled={tab.disabled}
            onClick={() => handleTabClick(index)}
            className={clsx(
              "py-2 px-4 text-sm font-medium transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",

              // Active state
              activeIndex === index
                ? isPills
                  ? "bg-sky-500 text-white rounded-md"
                  : "border-b-2 border-sky-500 text-sky-600"
                : isPills
                  ? "text-gray-700 hover:bg-gray-100 rounded-md"
                  : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300",

              !isPills && "border-transparent",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">{tabs[activeIndex]?.content}</div>
    </div>
  );
};

export default Tabs;
