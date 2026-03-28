import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: "info",
    children: "This is an informational message",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Operation completed successfully",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Please review before proceeding",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "An error occurred",
  },
};

export const WithTitle: Story = {
  args: {
    variant: "info",
    title: "Notice",
    children: "This is an important notice for users",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Alert variant="info">Informational message</Alert>
      <Alert variant="success">Success message</Alert>
      <Alert variant="warning">Warning message</Alert>
      <Alert variant="error">Error message</Alert>
    </div>
  ),
};
