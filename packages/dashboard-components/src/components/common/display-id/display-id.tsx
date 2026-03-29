import { Code } from "@zevaguillo/ui-components";
import { Copy } from "@zevaguillo/ui-components";
import { useState } from "react";

export interface DisplayIdProps {
  id: string;
  prefix?: string;
}

export const DisplayId = ({ id, prefix }: DisplayIdProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <Code variant="ghost">{prefix ? `${prefix}_${id}` : id}</Code>
      <button
        onClick={handleCopy}
        className="text-gray-400 hover:text-gray-600"
      >
        {copied ? "✓" : "📋"}
      </button>
    </div>
  );
};
