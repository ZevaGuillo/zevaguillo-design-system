import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "../button/Button";
import { useState } from "react";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "Drawer position",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Drawer size",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Drawer Component

A slide-in panel for additional content.

### When to use:
- Side panels
- Detail views
- Quick actions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <h2>Drawer Content</h2>
          <p>This is the drawer content.</p>
        </Drawer>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} position="left" onClose={() => setOpen(false)}>
          <h2>Left Drawer</h2>
          <p>Drawer from the left side.</p>
        </Drawer>
      </>
    );
  },
};

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <Drawer open={open} position="right" onClose={() => setOpen(false)}>
          <h2>Right Drawer</h2>
          <p>Drawer from the right side.</p>
        </Drawer>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Small Drawer</Button>
        <Drawer open={open} size="small" onClose={() => setOpen(false)}>
          <h2>Small Drawer</h2>
        </Drawer>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Large Drawer</Button>
        <Drawer open={open} size="large" onClose={() => setOpen(false)}>
          <h2>Large Drawer</h2>
        </Drawer>
      </>
    );
  },
};
