import type { Meta, StoryObj } from "@storybook/react";
import { Shell } from "./shell";

const meta: Meta<typeof Shell> = {
  title: "Layout/Shell",
  component: Shell,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Shell>;

export const Default: Story = {
  args: {
    children: <div className="p-4">Shell Content</div>,
  },
};
