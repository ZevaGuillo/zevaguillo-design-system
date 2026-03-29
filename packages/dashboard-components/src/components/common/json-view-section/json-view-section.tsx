import { useState } from "react";
import { Button } from "@zevaguillo/ui-components";
import { Code } from "@zevaguillo/ui-components";

export interface JsonViewSectionProps {
  data: Record<string, any>;
  title?: string;
}

export const JsonViewSection = ({ data, title }: JsonViewSectionProps) => {
  const [expanded, setExpanded] = useState(false);

  const jsonString = JSON.stringify(data, null, 2);

  return (
    <div className="space-y-2">
      {title && <h4 className="text-sm font-medium">{title}</h4>}
      <div className="relative">
        <pre className="p-3 bg-gray-50 rounded-md text-xs overflow-auto max-h-48">
          <Code variant="ghost">{jsonString}</Code>
        </pre>
      </div>
      <Button
        variant="ghost"
        size="small"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};
