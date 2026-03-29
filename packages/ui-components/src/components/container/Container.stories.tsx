import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "full"],
      description: "Container size",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Container Component

A wrapper that constrains content width.

### When to use:
- Page layout
- Section wrappers
- Content centering
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "Container content",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small container (max-width: 640px)",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium container (max-width: 768px)",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large container (max-width: 1024px)",
  },
};

export const Full: Story = {
  args: {
    size: "full",
    children: "Full width container",
  },
};
