import React, { useState, useMemo } from "react";
import clsx from "clsx";
import type { CommandProps, CommandItem } from "./Command.types";

export const Command = ({
  items,
  placeholder = "Search...",
  value: controlledValue,
  onValueChange,
  onSelect,
  className = "",
}: CommandProps) => {
  const [internalValue, setInternalValue] = useState("");
  const value = controlledValue ?? internalValue;

  const filteredItems = useMemo(() => {
    if (!value) return items;
    const lowerValue = value.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(lowerValue) ||
        item.value?.toLowerCase().includes(lowerValue),
    );
  }, [items, value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onValueChange?.(newValue);
  };

  const handleItemClick = (item: CommandItem) => {
    onSelect?.(item);
    setInternalValue("");
    onValueChange?.("");
  };

  return (
    <div className={clsx("rounded-lg border border-gray-200", className)}>
      <div className="border-b border-gray-200 p-2">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full bg-transparent px-2 py-1 text-sm outline-none"
        />
      </div>
      <div className="max-h-64 overflow-y-auto p-2">
        {filteredItems.length === 0 ? (
          <p className="p-2 text-sm text-gray-500">No results found.</p>
        ) : (
          <ul className="space-y-1">
            {filteredItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleItemClick(item)}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-gray-100"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Command;
