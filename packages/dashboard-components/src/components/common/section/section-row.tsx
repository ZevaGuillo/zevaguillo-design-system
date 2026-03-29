import { ReactNode } from "react";

export interface SectionRowProps {
  title: string;
  action?: ReactNode;
}

export const SectionRow = ({ title, action }: SectionRowProps) => {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <span className="text-sm font-medium">{title}</span>
      {action}
    </div>
  );
};
