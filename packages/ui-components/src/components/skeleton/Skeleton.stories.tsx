import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular"],
      description: "Skeleton variant",
    },
    width: {
      control: "text",
      description: "Skeleton width",
    },
    height: {
      control: "text",
      description: "Skeleton height",
    },
    lines: {
      control: "number",
      description: "Number of text lines",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Skeleton Component

A placeholder for loading content.

### When to use:
- Loading states
- Content placeholders
- Async data waiting
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: {
    variant: "text",
    width: "100%",
    height: "1rem",
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: "50px",
    height: "50px",
  },
};

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    width: "100%",
    height: "100px",
  },
};

export const MultipleLines: Story = {
  args: {
    variant: "text",
    lines: 3,
    width: "100%",
  },
};

export const LoadingCard: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", width: "300px" }}>
      <Skeleton variant="circular" width="50px" height="50px" />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" width="80%" height="1rem" />
        <Skeleton variant="text" width="60%" height="1rem" />
      </div>
    </div>
  ),
};
