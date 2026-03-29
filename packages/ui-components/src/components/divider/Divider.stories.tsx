import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Divider orientation",
    },
    variant: {
      control: "select",
      options: ["solid", "dashed", "dotted"],
      description: "Divider style",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Divider Component

A visual line that separates content.

### When to use:
- Section separation
- Menu dividers
- Form group separators
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: () => (
    <div style={{ height: "100px", display: "flex", alignItems: "center" }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};

export const WithText: Story = {
  args: {
    text: "or",
  },
};

export const Dashed: Story = {
  args: {
    variant: "dashed",
  },
};

export const Dotted: Story = {
  args: {
    variant: "dotted",
  },
};
