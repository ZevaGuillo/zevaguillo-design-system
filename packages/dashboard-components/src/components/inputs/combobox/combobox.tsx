import { useState, useRef, useEffect } from "react";
import { Input, Popover } from "@zevaguillo/ui-components";
import { ChevronDown, Check } from "lucide-react";
import clsx from "clsx";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  value?: string;
  onChange?: (value: string) => void;
  options: ComboboxOption[];
  placeholder?: string;
  disabled?: boolean;
}

export const Combobox = ({
  value,
  onChange,
  options,
  placeholder = "Select...",
  disabled,
}: ComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <div className="relative">
          <Input
            ref={inputRef}
            value={selectedOption?.label || ""}
            placeholder={placeholder}
            readOnly
            disabled={disabled}
            className="pr-10"
          />
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      }
    >
      <div className="w-64 p-2">
        <Input
          value={search}
          onChange={(val) => setSearch(val)}
          placeholder="Search..."
          className="mb-2"
          autoFocus
        />
        <div className="max-h-60 overflow-y-auto">
          {filteredOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange?.(option.value);
                setOpen(false);
                setSearch("");
              }}
              className={clsx(
                "w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between",
                value === option.value ? "bg-gray-100" : "hover:bg-gray-50",
              )}
            >
              {option.label}
              {value === option.value && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      </div>
    </Popover>
  );
};
