import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger", "info"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Active",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Pending",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Error",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "New",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};
