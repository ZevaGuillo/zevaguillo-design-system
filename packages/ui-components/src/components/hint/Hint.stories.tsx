import type { Meta, StoryObj } from "@storybook/react";
import { Hint } from "./Hint";

const meta: Meta<typeof Hint> = {
  title: "Components/Hint",
  component: Hint,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error", "success", "warning"],
      description: "Hint variant",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Hint Component

A helper text component for forms.

### When to use:
- Form helper text
- Additional instructions
- Validation hints
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hint>;

export const Default: Story = {
  args: {
    children: "Enter your email address",
  },
};

export const Error: Story = {
  args: {
    children: "This field is required",
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    children: "Password is strong",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Password expires in 30 days",
    variant: "warning",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Hint>Default hint</Hint>
      <Hint variant="error">Error hint</Hint>
      <Hint variant="success">Success hint</Hint>
      <Hint variant="warning">Warning hint</Hint>
    </div>
  ),
};
