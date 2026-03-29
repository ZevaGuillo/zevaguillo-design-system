import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Switch Component

A toggle switch control.

### When to use:
- Binary settings
- On/off toggles
- Boolean preferences
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Enable feature",
  },
};

export const Checked: Story = {
  args: {
    label: "Enable feature",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled switch",
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

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label="Interactive switch"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};
