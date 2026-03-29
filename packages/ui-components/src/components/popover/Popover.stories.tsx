import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../button/Button";
import { useState } from "react";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Popover position",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Popover Component

A floating panel that appears on interaction.

### When to use:
- Tooltips with rich content
- Dropdown menus
- Contextual information
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover
        trigger={<Button>Open Popover</Button>}
        content={<div style={{ padding: "1rem" }}>Popover content here</div>}
        open={open}
        onOpenChange={setOpen}
      />
    );
  },
};

export const Top: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover
        trigger={<Button>Top</Button>}
        content={<div style={{ padding: "1rem" }}>Popover content</div>}
        open={open}
        onOpenChange={setOpen}
        position="top"
      />
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover
        trigger={<Button>Bottom</Button>}
        content={<div style={{ padding: "1rem" }}>Popover content</div>}
        open={open}
        onOpenChange={setOpen}
        position="bottom"
      />
    );
  },
};

export const RichContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover
        trigger={<Button>Rich Content</Button>}
        content={
          <div style={{ padding: "1rem" }}>
            <h4>Title</h4>
            <p>Some description here.</p>
          </div>
        }
        open={open}
        onOpenChange={setOpen}
      />
    );
  },
};
