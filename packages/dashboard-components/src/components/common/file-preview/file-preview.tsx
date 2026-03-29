import { ReactNode } from "react";

export interface FilePreviewProps {
  src?: string;
  name?: string;
  size?: string;
  type?: string;
}

export const FilePreview = ({ src, name, size }: FilePreviewProps) => {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg">
      {src ? (
        <img src={src} alt={name} className="w-12 h-12 object-cover rounded" />
      ) : (
        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
          📄
        </div>
      )}
      <div className="flex-1">
        <p className="font-medium text-sm">{name || "File"}</p>
        {size && <p className="text-xs text-gray-500">{size}</p>}
      </div>
    </div>
  );
};
