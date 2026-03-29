import { Chip, Button } from "@zevaguillo/ui-components";
import { X } from "lucide-react";

export interface ChipGroupProps {
  items: {
    id: string;
    label: string;
  }[];
  onRemove?: (id: string) => void;
  onClick?: (id: string) => void;
}

export const ChipGroup = ({ items, onRemove, onClick }: ChipGroupProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Chip
          key={item.id}
          label={item.label}
          onClick={() => onClick?.(item.id)}
        />
      ))}
    </div>
  );
};
