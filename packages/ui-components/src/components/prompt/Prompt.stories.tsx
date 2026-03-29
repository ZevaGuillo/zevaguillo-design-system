import type { Meta, StoryObj } from "@storybook/react";
import { Prompt } from "./Prompt";
import { Button } from "../button/Button";
import { useState } from "react";

const meta: Meta<typeof Prompt> = {
  title: "Components/Prompt",
  component: Prompt,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "danger"],
      description: "Confirm button variant",
    },
    showCancel: {
      control: "boolean",
      description: "Show cancel button",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Prompt Component

A confirmation dialog.

### When to use:
- Confirmations
- Destructive action warnings
- User decisions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Prompt>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Prompt</Button>
        <Prompt
          open={open}
          title="Confirm Action"
          onConfirm={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        >
          Are you sure you want to proceed?
        </Prompt>
      </>
    );
  },
};

export const Danger: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Prompt
          open={open}
          title="Delete Item"
          variant="danger"
          onConfirm={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        >
          Are you sure you want to delete this item? This action cannot be
          undone.
        </Prompt>
      </>
    );
  },
};

export const WithoutCancel: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Prompt
          open={open}
          title="Notice"
          showCancel={false}
          onConfirm={() => setOpen(false)}
        >
          This is an informational message.
        </Prompt>
      </>
    );
  },
};
