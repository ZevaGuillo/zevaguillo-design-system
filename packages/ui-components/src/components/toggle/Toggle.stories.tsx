import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the toggle is disabled",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Toggle Component

A switch control for binary on/off states.

### When to use:
- Enable/disable features
- Settings that require boolean input
- Quick on/off actions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Enable notifications",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled toggle",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked",
    disabled: true,
    defaultChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        label="Interactive toggle"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};
