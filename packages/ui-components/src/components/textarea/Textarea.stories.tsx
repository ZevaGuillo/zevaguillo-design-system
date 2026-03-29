import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
    },
    error: {
      control: "text",
      description: "Error message",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Textarea Component

Multi-line text input component.

### When to use:
- Long text input
- Comments or descriptions
- Any multi-line user input
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Description",
    placeholder: "Enter description...",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Comments",
    placeholder: "Add your comments...",
    helperText: "Max 500 characters",
  },
};

export const WithError: Story = {
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
    error: "Bio is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Cannot edit",
    disabled: true,
    value: "This field is disabled",
  },
};

export const MultipleRows: Story = {
  args: {
    label: "Message",
    placeholder: "Write your message...",
    rows: 6,
  },
};
