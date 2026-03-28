import React, { useState } from "react";
import clsx from "clsx";
import type { CodeBlockProps } from "./CodeBlock.types";

export const CodeBlock = ({
  code,
  language = "text",
  showLineNumbers = false,
  copyable = true,
  className = "",
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div
      className={clsx("relative rounded-lg border border-gray-200", className)}
    >
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-2">
        <span className="text-xs font-medium text-gray-500 uppercase">
          {language}
        </span>
        {copyable && (
          <button
            type="button"
            onClick={handleCopy}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>
      <pre className="overflow-x-auto bg-gray-900 p-4">
        <code className="font-mono text-sm text-gray-100">
          {showLineNumbers
            ? lines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 select-none text-gray-500">
                    {String(i + 1).padStart(3, " ")}
                  </span>
                  {line}
                </div>
              ))
            : code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
