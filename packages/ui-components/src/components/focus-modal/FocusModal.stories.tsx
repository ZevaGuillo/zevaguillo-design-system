import type { Meta, StoryObj } from "@storybook/react";
import { FocusModal } from "./FocusModal";
import { Button } from "../button/Button";
import { useState } from "react";

const meta: Meta<typeof FocusModal> = {
  title: "Components/FocusModal",
  component: FocusModal,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Modal size",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## FocusModal Component

A full-focus modal for concentrated tasks.

### When to use:
- Form editing
- Detail views
- Focused workflows
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FocusModal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Focus Modal</Button>
        <FocusModal open={open} onClose={() => setOpen(false)}>
          <h2>Focus Modal Content</h2>
          <p>This is a focused modal for concentrated tasks.</p>
        </FocusModal>
      </>
    );
  },
};

export const WithTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>With Title</Button>
        <FocusModal
          open={open}
          title="Edit Profile"
          onClose={() => setOpen(false)}
        >
          <p>Modal content goes here.</p>
        </FocusModal>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Small Modal</Button>
        <FocusModal open={open} size="small" onClose={() => setOpen(false)}>
          <p>Small focused modal.</p>
        </FocusModal>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Large Modal</Button>
        <FocusModal open={open} size="large" onClose={() => setOpen(false)}>
          <p>Large focused modal.</p>
        </FocusModal>
      </>
    );
  },
};
