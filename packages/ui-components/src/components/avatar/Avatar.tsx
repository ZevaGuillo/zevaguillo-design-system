import React, { useState } from "react";
import clsx from "clsx";
import type { AvatarProps } from "./Avatar.types";

export const Avatar = ({
  src,
  alt = "",
  fallback,
  size = "medium",
  className = "",
}: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const sizeClasses = {
    small: "h-8 w-8 text-xs",
    medium: "h-10 w-10 text-sm",
    large: "h-12 w-12 text-base",
  };

  return (
    <div
      className={clsx(
        "relative inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden",
        sizeClasses[size],
        className,
      )}
    >
      {!imageError && src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="font-medium text-gray-600">
          {fallback ? getInitials(fallback) : "?"}
        </span>
      )}
    </div>
  );
};

export default Avatar;
