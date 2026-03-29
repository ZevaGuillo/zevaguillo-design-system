import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
      description: "Button variant",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## IconButton Component

A button that contains only an icon.

### When to use:
- Toolbar actions
- Icon-only buttons
- Quick actions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: "🔔",
    title: "Notifications",
  },
};

export const Primary: Story = {
  args: {
    children: "➕",
    variant: "primary",
    title: "Add",
  },
};

export const Secondary: Story = {
  args: {
    children: "⚙️",
    variant: "secondary",
    title: "Settings",
  },
};

export const Ghost: Story = {
  args: {
    children: "👁️",
    variant: "ghost",
    title: "View",
  },
};

export const Danger: Story = {
  args: {
    children: "🗑️",
    variant: "danger",
    title: "Delete",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <IconButton size="small" title="Small">
        🔔
      </IconButton>
      <IconButton size="medium" title="Medium">
        🔔
      </IconButton>
      <IconButton size="large" title="Large">
        🔔
      </IconButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "🔔",
    disabled: true,
    title: "Disabled",
  },
};
