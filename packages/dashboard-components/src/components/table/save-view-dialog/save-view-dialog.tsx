import { useState } from "react";
import { Button, Popover, Input } from "@zevaguillo/ui-components";

export interface SaveViewDropdownProps {
  onSave?: (name: string) => void;
}

export const SaveViewDropdown = ({ onSave }: SaveViewDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSave = () => {
    if (name.trim()) {
      onSave?.(name.trim());
      setName("");
      setOpen(false);
    }
  };

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant="ghost" size="small">
          Save view
        </Button>
      }
    >
      <div className="p-4 w-64">
        <Input
          value={name}
          onChange={(value) => setName(value)}
          placeholder="View name"
          className="mb-3"
        />
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="small" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button size="small" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </Popover>
  );
};
