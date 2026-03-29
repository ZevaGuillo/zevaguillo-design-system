import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xsmall", "small", "base", "large"],
      description: "Label size",
    },
    weight: {
      control: "select",
      options: ["regular", "medium"],
      description: "Font weight",
    },
    disabled: {
      control: "boolean",
      description: "Whether the label is disabled",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Label Component

A text label for form elements.

### When to use:
- Form field labels
- Section labels
- Descriptions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Label text",
  },
};

export const Small: Story = {
  args: {
    children: "Small label",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Large label",
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium weight",
    weight: "medium",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled label",
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Label size="xsmall">Extra small</Label>
      <Label size="small">Small</Label>
      <Label size="base">Base</Label>
      <Label size="large">Large</Label>
    </div>
  ),
};
