import type { Meta, StoryObj } from "@storybook/react";
import { Command } from "./Command";
import { useState } from "react";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Command Component

A command palette for quick actions.

### When to use:
- Command palettes
- Quick search
- Action menus
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Command>;

const items = [
  { id: "1", label: "Dashboard", value: "dashboard" },
  { id: "2", label: "Settings", value: "settings" },
  { id: "3", label: "Profile", value: "profile" },
  { id: "4", label: "Logout", value: "logout" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Command
        items={items}
        value={value}
        onValueChange={setValue}
        placeholder="Search commands..."
      />
    );
  },
};

export const WithSelection: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [selected, setSelected] = useState<string | null>(null);
    return (
      <Command
        items={items}
        value={value}
        onValueChange={setValue}
        onSelect={(item) => setSelected(item.label)}
        placeholder="Search..."
      />
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Command
        items={[
          { id: "1", label: "Dashboard", value: "dashboard", icon: "📊" },
          { id: "2", label: "Analytics", value: "analytics", icon: "📈" },
          { id: "3", label: "Settings", value: "settings", icon: "⚙️" },
        ]}
        value={value}
        onValueChange={setValue}
        placeholder="Search..."
      />
    );
  },
};
