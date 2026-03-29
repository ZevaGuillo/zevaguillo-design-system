import type { Meta, StoryObj } from "@storybook/react";
import { StatusBadge } from "./StatusBadge";

const meta: Meta<typeof StatusBadge> = {
  title: "Components/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger", "info"],
      description: "Badge variant",
    },
    dotColor: {
      control: "select",
      options: ["default", "green", "yellow", "red", "blue"],
      description: "Dot color",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## StatusBadge Component

A badge with a status indicator dot.

### When to use:
- User status
- Order status
- Item states
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Default: Story = {
  args: {
    children: "Pending",
  },
};

export const Success: Story = {
  args: {
    children: "Active",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Pending",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Inactive",
    variant: "danger",
  },
};

export const Info: Story = {
  args: {
    children: "Info",
    variant: "info",
  },
};

export const DotColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <StatusBadge dotColor="default">Default</StatusBadge>
      <StatusBadge dotColor="green">Success</StatusBadge>
      <StatusBadge dotColor="yellow">Warning</StatusBadge>
      <StatusBadge dotColor="red">Error</StatusBadge>
      <StatusBadge dotColor="blue">Info</StatusBadge>
    </div>
  ),
};
