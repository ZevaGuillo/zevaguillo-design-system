import type { Meta, StoryObj } from "@storybook/react";
import { IconBadge } from "./IconBadge";

const meta: Meta<typeof IconBadge> = {
  title: "Components/IconBadge",
  component: IconBadge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger", "info"],
      description: "Badge variant",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Badge size",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## IconBadge Component

An icon with a colored background.

### When to use:
- Status indicators
- Icon highlights
- Feature badges
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconBadge>;

export const Default: Story = {
  args: {
    children: "📦",
  },
};

export const Success: Story = {
  args: {
    children: "✅",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "⚠️",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "❌",
    variant: "danger",
  },
};

export const Info: Story = {
  args: {
    children: "ℹ️",
    variant: "info",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <IconBadge size="small">📦</IconBadge>
      <IconBadge size="medium">📦</IconBadge>
      <IconBadge size="large">📦</IconBadge>
    </div>
  ),
};
