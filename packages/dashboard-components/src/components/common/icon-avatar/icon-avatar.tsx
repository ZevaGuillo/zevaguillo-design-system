import { Avatar } from "@zevaguillo/ui-components";
import { ReactNode } from "react";

export interface IconAvatarProps {
  icon?: ReactNode;
  fallback?: string;
}

export const IconAvatar = ({ icon, fallback }: IconAvatarProps) => {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
      {icon || (fallback ? <span className="text-sm">{fallback}</span> : null)}
    </div>
  );
};
