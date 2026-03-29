import { useState, ReactNode } from "react";
import { Button, Dropdown, IconButton } from "@zevaguillo/ui-components";

export interface ActionMenuItem {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  variant?: "default" | "danger";
}

export interface ActionMenuProps {
  items: ActionMenuItem[];
  trigger?: ReactNode;
}

export const ActionMenu = ({ items, trigger }: ActionMenuProps) => {
  return (
    <Dropdown
      trigger={trigger || <IconButton variant="ghost">⋮</IconButton>}
      items={items.map((item) => ({
        ...item,
        label: item.label,
      }))}
    />
  );
};
