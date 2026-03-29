import { ReactNode } from "react";

export interface ThumbnailProps {
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  size?: "small" | "medium" | "large";
}

export const Thumbnail = ({
  src,
  alt,
  fallback,
  size = "medium",
}: ThumbnailProps) => {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-24 h-24",
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${sizeClasses[size]} object-cover rounded-md`}
      />
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} bg-gray-100 rounded-md flex items-center justify-center text-gray-400`}
    >
      {fallback || "📷"}
    </div>
  );
};
