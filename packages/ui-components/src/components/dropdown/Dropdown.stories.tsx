import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../button/Button";
import { useState } from "react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Dropdown Component

A collapsible menu that appears when triggered.

### When to use:
- Action menus
- Context menus
- Navigation dropdowns
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const items = [
  { label: "Profile", value: "profile" },
  { label: "Settings", value: "settings" },
  { divider: true },
  { label: "Logout", value: "logout" },
];

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Dropdown
        trigger={<Button>Open Menu</Button>}
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Dropdown
        trigger={<Button>Actions</Button>}
        items={[
          { label: "Edit", value: "edit", icon: <span>✏️</span> },
          { label: "Duplicate", value: "duplicate", icon: <span>📋</span> },
          { label: "Archive", value: "archive", icon: <span>📦</span> },
          { divider: true },
          { label: "Delete", value: "delete", icon: <span>🗑️</span> },
        ]}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    );
  },
};

export const DisabledItems: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Dropdown
        trigger={<Button>Disabled Items</Button>}
        items={[
          { label: "Available", value: "available" },
          { label: "Disabled", value: "disabled", disabled: true },
        ]}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    );
  },
};
