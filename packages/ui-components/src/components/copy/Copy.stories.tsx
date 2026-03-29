import type { Meta, StoryObj } from "@storybook/react";
import { Copy } from "./Copy";

const meta: Meta<typeof Copy> = {
  title: "Components/Copy",
  component: Copy,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Copy Component

A component to copy text to clipboard.

### When to use:
- Copy URLs
- Copy codes
- Copy identifiers
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Copy>;

export const Default: Story = {
  args: {
    text: "https://example.com",
  },
};

export const WithLabel: Story = {
  args: {
    text: "https://example.com",
    label: "Copy link",
  },
};

export const CustomSuccessMessage: Story = {
  args: {
    text: "some-secret-value",
    successMessage: "Copied!",
  },
};
