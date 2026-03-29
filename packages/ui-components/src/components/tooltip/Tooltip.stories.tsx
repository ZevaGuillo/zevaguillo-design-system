import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../button/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Tooltip position",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Tooltip Component

A popup that displays additional information on hover.

### When to use:
- Show help text
- Display additional context
- Explain icon actions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: "This is a tooltip",
    position: "top",
    children: <Button>Hover me</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: "Tooltip on bottom",
    position: "bottom",
    children: <Button>Hover me</Button>,
  },
};

export const Left: Story = {
  args: {
    content: "Tooltip on left",
    position: "left",
    children: <Button>Hover me</Button>,
  },
};

export const Right: Story = {
  args: {
    content: "Tooltip on right",
    position: "right",
    children: <Button>Hover me</Button>,
  },
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <Tooltip content="Top tooltip" position="top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <Button variant="outline">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
    </div>
  ),
};
