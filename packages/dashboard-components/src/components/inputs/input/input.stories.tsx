import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@zevaguillo/ui-components";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email...",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email...",
    error: true,
    errorMessage: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};
