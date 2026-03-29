import type { Meta, StoryObj } from "@storybook/react";
import { InlineTip } from "./InlineTip";

const meta: Meta<typeof InlineTip> = {
  title: "Components/InlineTip",
  component: InlineTip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "tip", "important", "warning"],
      description: "Tip variant",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## InlineTip Component

An inline informational tip.

### When to use:
- Helpful tips
- Important notices
- Warnings
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InlineTip>;

export const Default: Story = {
  args: {
    children: "This is a helpful tip",
  },
};

export const Tip: Story = {
  args: {
    children: "Pro tip: Use keyboard shortcuts",
    variant: "tip",
  },
};

export const Important: Story = {
  args: {
    children: "Important: Save your work frequently",
    variant: "important",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning: This action cannot be undone",
    variant: "warning",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <InlineTip>Default tip</InlineTip>
      <InlineTip variant="tip">Pro tip</InlineTip>
      <InlineTip variant="important">Important notice</InlineTip>
      <InlineTip variant="warning">Warning message</InlineTip>
    </div>
  ),
};
