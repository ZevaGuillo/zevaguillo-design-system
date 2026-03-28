import React from "react";
import clsx from "clsx";
import type { ListProps } from "./List.types";

export const List = ({
  items,
  variant = "default",
  className = "",
}: ListProps) => {
  const containerStyles = {
    default: "divide-y divide-gray-100",
    bordered: "border border-gray-200 rounded-lg overflow-hidden",
    actions: "space-y-1",
  };

  const itemStyles = {
    default: "px-4 py-3 hover:bg-gray-50",
    bordered: "px-4 py-3 hover:bg-gray-50",
    actions: "px-3 py-2 rounded-md hover:bg-gray-100",
  };

  return (
    <div className={clsx(containerStyles[variant], className)}>
      {items.map((item, index) => (
        <div
          key={item.id || index}
          onClick={item.onClick}
          className={clsx(
            "flex items-center",
            itemStyles[variant],
            item.onClick && "cursor-pointer",
          )}
        >
          {item.icon && <div className="mr-3 text-gray-500">{item.icon}</div>}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {item.label}
            </p>
            {item.description && (
              <p className="text-sm text-gray-500 truncate">
                {item.description}
              </p>
            )}
          </div>
          {item.right && <div className="ml-3">{item.right}</div>}
        </div>
      ))}
    </div>
  );
};

export default List;
