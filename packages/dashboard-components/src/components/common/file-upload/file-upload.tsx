import { useState, useRef } from "react";
import { Button } from "@zevaguillo/ui-components";
import { Upload } from "lucide-react";

export interface FileUploadProps {
  onChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
}

export const FileUpload = ({
  onChange,
  accept,
  multiple = false,
  maxSize,
}: FileUploadProps) => {
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);

    if (maxSize) {
      const validFiles = fileArray.filter((file) => file.size <= maxSize);
      onChange?.(validFiles);
    } else {
      onChange?.(fileArray);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center ${
        dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
    >
      <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
      <p className="text-sm text-gray-600 mb-2">
        Drag and drop files here, or click to select
      </p>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <Button
        variant="outline"
        size="small"
        onClick={() => inputRef.current?.click()}
      >
        Select Files
      </Button>
    </div>
  );
};
