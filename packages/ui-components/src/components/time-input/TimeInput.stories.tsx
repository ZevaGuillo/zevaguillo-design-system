import type { Meta, StoryObj } from "@storybook/react";
import { TimeInput } from "./TimeInput";
import { useState } from "react";

const meta: Meta<typeof TimeInput> = {
  title: "Components/TimeInput",
  component: TimeInput,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## TimeInput Component

An input for selecting time.

### When to use:
- Time input forms
- Scheduling
- Event timing
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimeInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <TimeInput value={value} onChange={setValue} />;
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    const [value, setValue] = useState("14:30");
    return <TimeInput value={value} onChange={setValue} />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <TimeInput value={value} onChange={setValue} placeholder="Select time" />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "10:00",
  },
};
