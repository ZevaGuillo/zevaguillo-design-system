import React, { useState } from "react";
import clsx from "clsx";
import type { SidebarProps, SidebarItem } from "./Sidebar.types";

export const Sidebar = ({
  items,
  logo,
  activeItem,
  onItemClick,
  collapsed = false,
  className = "",
}: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderItem = (item: SidebarItem, level: number = 0) => {
    const isActive = activeItem === item.id;
    const hasItems = item.items && item.items.length > 0;
    const isExpanded = expandedItems.has(item.id);

    return (
      <div key={item.id}>
        <button
          type="button"
          onClick={() => {
            if (hasItems) {
              toggleExpand(item.id);
            }
            onItemClick?.(item);
          }}
          className={clsx(
            "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
            level > 0 && "ml-6",
            isActive
              ? "bg-sky-50 text-sky-600"
              : "text-gray-700 hover:bg-gray-100",
            collapsed && "justify-center",
          )}
        >
          {item.icon && (
            <span className={clsx("flex-shrink-0", !collapsed && "mr-3")}>
              {item.icon}
            </span>
          )}
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{item.label}</span>
              {hasItems && (
                <svg
                  className={clsx(
                    "w-4 h-4 transition-transform",
                    isExpanded && "transform rotate-180",
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
              )}
            </>
          )}
        </button>

        {hasItems && isExpanded && !collapsed && (
          <div className="mt-1">
            {item.items!.map((subItem) => renderItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={clsx(
        "flex flex-col h-screen bg-white border-r border-gray-200",
        collapsed ? "w-16" : "w-64",
        className,
      )}
    >
      {logo && (
        <div
          className={clsx(
            "flex items-center h-16 px-4 border-b border-gray-200",
            collapsed && "justify-center",
          )}
        >
          {logo}
        </div>
      )}

      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {items.map((item) => renderItem(item))}
      </nav>
    </aside>
  );
};

export default Sidebar;
