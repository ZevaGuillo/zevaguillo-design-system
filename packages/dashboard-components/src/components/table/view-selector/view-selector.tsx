import { useState, ReactNode } from "react";
import { Button, Popover, Input } from "@zevaguillo/ui-components";

export interface View {
  id: string;
  name: string;
  columns?: string[];
  filters?: Record<string, any>;
}

interface ViewSelectorProps {
  views?: View[];
  currentView?: string;
  onViewChange?: (viewId: string) => void;
  onSaveView?: (name: string, config: any) => void;
}

export const ViewSelector = ({
  views = [],
  currentView,
  onViewChange,
  onSaveView,
}: ViewSelectorProps) => {
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [newViewName, setNewViewName] = useState("");

  const current = views.find((v) => v.id === currentView);

  return (
    <div className="flex items-center gap-2">
      <Popover
        trigger={
          <Button variant="outline" size="small">
            {current?.name || "Default view"}
          </Button>
        }
      >
        <div className="w-56 p-2">
          <div className="space-y-1">
            <button
              onClick={() => onViewChange?.("default")}
              className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                !currentView || currentView === "default"
                  ? "bg-gray-100"
                  : "hover:bg-gray-50"
              }`}
            >
              Default
            </button>
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => onViewChange?.(view.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                  currentView === view.id ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                {view.name}
              </button>
            ))}
          </div>
          <div className="border-t mt-2 pt-2">
            <Button
              variant="ghost"
              size="small"
              className="w-full"
              onClick={() => setShowSaveDialog(true)}
            >
              Save current view
            </Button>
          </div>
        </div>
      </Popover>

      {showSaveDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-80">
            <h3 className="font-medium mb-3">Save View</h3>
            <Input
              value={newViewName}
              onChange={(value) => setNewViewName(value)}
              placeholder="View name"
              className="mb-3"
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="small"
                onClick={() => setShowSaveDialog(false)}
              >
                Cancel
              </Button>
              <Button
                size="small"
                onClick={() => {
                  onSaveView?.(newViewName, {});
                  setShowSaveDialog(false);
                  setNewViewName("");
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ViewPills = ({ views = [] }: { views?: View[] }) => {
  if (views.length === 0) return null;

  return (
    <div className="flex gap-1">
      {views.map((view) => (
        <span
          key={view.id}
          className="px-2 py-1 bg-gray-100 rounded-full text-xs"
        >
          {view.name}
        </span>
      ))}
    </div>
  );
};
