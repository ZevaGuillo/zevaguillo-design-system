import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
      description: "Progress value (0-100)",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Progress bar size",
    },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error"],
      description: "Progress bar variant",
    },
    showLabel: {
      control: "boolean",
      description: "Show percentage label",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Progress Component

A visual indicator of progress.

### When to use:
- Upload progress
- Loading states
- Completion indicators
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Success: Story = {
  args: {
    value: 75,
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    value: 50,
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    value: 25,
    variant: "error",
  },
};

export const Small: Story = {
  args: {
    value: 60,
    size: "small",
  },
};

export const Large: Story = {
  args: {
    value: 60,
    size: "large",
  },
};

export const WithLabel: Story = {
  args: {
    value: 65,
    showLabel: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "300px",
      }}
    >
      <Progress value={25} variant="default" />
      <Progress value={50} variant="success" />
      <Progress value={75} variant="warning" />
      <Progress value={100} variant="error" />
    </div>
  ),
};
