import { Text } from "@zevaguillo/ui-components";
import { ReactNode } from "react";

export interface LogoBoxProps {
  logo?: ReactNode;
  text?: string;
}

export const LogoBox = ({ logo, text }: LogoBoxProps) => {
  return (
    <div className="flex items-center gap-2">
      {logo && <div className="w-8 h-8">{logo}</div>}
      {text && (
        <Text size="small" className="font-medium">
          {text}
        </Text>
      )}
    </div>
  );
};

export interface AvatarBoxProps {
  src?: string;
  fallback?: string;
}

export const AvatarBox = ({ src, fallback }: AvatarBoxProps) => {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
      {src ? (
        <img
          src={src}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span>{fallback || "?"}</span>
      )}
    </div>
  );
};
