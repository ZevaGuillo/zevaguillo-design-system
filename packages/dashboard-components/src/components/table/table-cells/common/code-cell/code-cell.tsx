import { Code } from "@zevaguillo/ui-components";

export interface CodeCellProps {
  value?: string;
}

export const CodeCell = ({ value }: CodeCellProps) => {
  if (!value) return <Code variant="ghost">-</Code>;

  return <Code variant="ghost">{value}</Code>;
};
