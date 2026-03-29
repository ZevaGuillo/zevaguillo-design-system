import type { Meta, StoryObj } from "@storybook/react";
import { CommandBar } from "./CommandBar";
import { Button } from "../button/Button";
import { useState } from "react";

const meta: Meta<typeof CommandBar> = {
  title: "Components/CommandBar",
  component: CommandBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## CommandBar Component

A fixed command bar for quick actions.

### When to use:
- Global actions
- Quick navigation
- Toolbar
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommandBar>;

const items = [
  {
    id: "1",
    label: "New",
    icon: "➕",
    action: () => {},
  },
  {
    id: "2",
    label: "Save",
    icon: "💾",
    shortcut: "Ctrl+S",
    action: () => {},
  },
  {
    id: "3",
    label: "Delete",
    icon: "🗑️",
    action: () => {},
  },
];

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Command Bar</Button>
        <CommandBar open={open} items={items} onOpenChange={setOpen} />
      </>
    );
  },
};

export const Open: Story = {
  args: {
    open: true,
    items: items,
  },
};
