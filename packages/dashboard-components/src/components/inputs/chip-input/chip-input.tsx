import { useState, KeyboardEvent } from "react";
import { Chip, Input } from "@zevaguillo/ui-components";

export interface ChipInputProps {
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const ChipInput = ({
  value = [],
  onChange,
  placeholder = "Add tag...",
  disabled,
}: ChipInputProps) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!value.includes(input.trim())) {
        onChange?.([...value, input.trim()]);
      }
      setInput("");
    } else if (e.key === "Backspace" && !input && value.length > 0) {
      onChange?.(value.slice(0, -1));
    }
  };

  const handleRemove = (chip: string) => {
    onChange?.(value.filter((v) => v !== chip));
  };

  return (
    <div className="flex flex-wrap gap-1 p-2 border rounded-md">
      {value.map((chip) => (
        <Chip key={chip} label={chip} onRemove={() => handleRemove(chip)} />
      ))}
      {!disabled && (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[100px] outline-none text-sm"
        />
      )}
    </div>
  );
};
