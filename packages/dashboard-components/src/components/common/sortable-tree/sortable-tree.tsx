import { useState, ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

export interface TreeItem {
  id: string;
  label: string;
  children?: TreeItem[];
}

export interface SortableTreeProps {
  items: TreeItem[];
  onItemClick?: (item: TreeItem) => void;
}

export const SortableTree = ({ items, onItemClick }: SortableTreeProps) => {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <TreeNode key={item.id} item={item} onItemClick={onItemClick} />
      ))}
    </div>
  );
};

interface TreeNodeProps {
  item: TreeItem;
  onItemClick?: (item: TreeItem) => void;
}

const TreeNode = ({ item, onItemClick }: TreeNodeProps) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-50 cursor-pointer"
        onClick={() => {
          if (hasChildren) {
            setExpanded(!expanded);
          }
          onItemClick?.(item);
        }}
      >
        {hasChildren && (
          <ChevronRight
            className={clsx(
              "w-4 h-4 text-gray-400 transition-transform",
              expanded && "rotate-90",
            )}
          />
        )}
        <span className="text-sm">{item.label}</span>
      </div>
      {hasChildren && expanded && (
        <div className="ml-4">
          {item.children!.map((child) => (
            <TreeNode key={child.id} item={child} onItemClick={onItemClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export const TreeItem = ({ label }: { label: string }) => {
  return (
    <div className="px-2 py-1 text-sm hover:bg-gray-50 rounded-md cursor-pointer">
      {label}
    </div>
  );
};
