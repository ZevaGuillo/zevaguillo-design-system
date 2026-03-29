import { Code, Copy } from "@zevaguillo/ui-components";
import { useState } from "react";

export interface DisplayIdCellProps {
  id: string;
  prefix?: string;
}

export const DisplayIdCell = ({ id, prefix }: DisplayIdCellProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayId = prefix ? `${prefix}_${id}` : id;

  return (
    <div className="flex items-center gap-2">
      <Code variant="ghost">{displayId}</Code>
      <button
        onClick={handleCopy}
        className="text-gray-400 hover:text-gray-600"
      >
        {copied ? "✓" : "📋"}
      </button>
    </div>
  );
};
