import { useState } from "react";
import { Avatar, Popover } from "@zevaguillo/ui-components";

export interface UserMenuProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  menuItems?: {
    label: string;
    onClick: () => void;
    icon?: string;
  }[];
}

export const UserMenu = ({
  user,
  menuItems = [
    { label: "Profile", onClick: () => {}, icon: "👤" },
    { label: "Settings", onClick: () => {}, icon: "⚙️" },
    { label: "Logout", onClick: () => {}, icon: "🚪" },
  ],
}: UserMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <button className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100">
          <Avatar
            src={user?.avatar}
            fallback={user?.name?.charAt(0) || "U"}
            size="small"
          />
        </button>
      }
    >
      <div className="w-48">
        {user && (
          <div className="p-3 border-b">
            <p className="font-medium text-sm">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        )}
        <div className="p-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-gray-100 rounded-md"
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </Popover>
  );
};
