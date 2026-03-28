import React, { useState } from "react";
import clsx from "clsx";
import type { CopyProps } from "./Copy.types";

export const Copy = ({
  text,
  label = "Copy",
  successMessage = "Copied!",
  className = "",
}: CopyProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={clsx(
        "inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700",
        className,
      )}
    >
      <span>{copied ? successMessage : label}</span>
    </button>
  );
};

export default Copy;
