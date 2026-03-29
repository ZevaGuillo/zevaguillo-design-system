import { useState } from "react";
import { IconButton, Popover } from "@zevaguillo/ui-components";

export interface NotificationsProps {
  notifications?: {
    id: string;
    title: string;
    message: string;
    time: string;
    read?: boolean;
  }[];
}

export const Notifications = ({ notifications = [] }: NotificationsProps) => {
  const [open, setOpen] = useState(false);
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <IconButton variant="ghost">
          🔔
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </IconButton>
      }
    >
      <div className="w-80 max-h-96 overflow-y-auto">
        <div className="p-3 border-b">
          <h3 className="font-medium">Notifications</h3>
        </div>
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500 text-sm">
            No notifications
          </div>
        ) : (
          <div>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 border-b hover:bg-gray-50 cursor-pointer"
              >
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-xs text-gray-500">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {notification.time}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Popover>
  );
};
