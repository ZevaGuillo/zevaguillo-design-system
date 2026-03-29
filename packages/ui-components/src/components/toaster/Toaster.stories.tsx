import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./Toaster";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
      description: "Toaster position",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Toaster Component

A container for toast notifications.

### When to use:
- Notification system
- Status messages
- User feedback
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  args: {
    toasts: [
      { id: "1", message: "Item saved successfully" },
      { id: "2", message: "Changes applied" },
    ],
  },
};

export const WithVariants: Story = {
  args: {
    toasts: [
      { id: "1", message: "Success message", variant: "success" },
      { id: "2", message: "Warning message", variant: "warning" },
      { id: "3", message: "Error message", variant: "error" },
    ],
  },
};

export const TopRight: Story = {
  args: {
    position: "top-right",
    toasts: [{ id: "1", message: "Top right toaster" }],
  },
};

export const BottomLeft: Story = {
  args: {
    position: "bottom-left",
    toasts: [{ id: "1", message: "Bottom left toaster" }],
  },
};
