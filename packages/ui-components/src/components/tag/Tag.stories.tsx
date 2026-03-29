import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error", "info"],
      description: "Tag variant",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "Tag size",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Tag Component

A small label for categorizing or highlighting.

### When to use:
- Status labels
- Categories
- Filters
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: "Tag",
  },
};

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Error",
    variant: "error",
  },
};

export const Info: Story = {
  args: {
    label: "Info",
    variant: "info",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
};

export const Removable: Story = {
  args: {
    label: "Removable",
    onRemove: () => {},
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Tag label="Default" />
      <Tag label="Primary" variant="primary" />
      <Tag label="Success" variant="success" />
      <Tag label="Warning" variant="warning" />
      <Tag label="Error" variant="error" />
      <Tag label="Info" variant="info" />
    </div>
  ),
};
