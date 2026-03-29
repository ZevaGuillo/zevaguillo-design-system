import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";
import { useState } from "react";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the radio group is disabled",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Radio Component

Radio group for selecting one option from multiple choices.

### When to use:
- Single selection from options
- Mutually exclusive choices
- Survey or form inputs
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default: Story = {
  args: {
    name: "radio-group",
    options: options,
    label: "Select an option",
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: "radio-group",
    options: options,
    label: "Select an option",
    defaultValue: "option2",
  },
};

export const Disabled: Story = {
  args: {
    name: "radio-group",
    options: options,
    label: "Disabled radio group",
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    name: "radio-group",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2 (disabled)", disabled: true },
      { value: "option3", label: "Option 3" },
    ],
    label: "With disabled option",
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("option1");
    return (
      <Radio
        name="radio-interactive"
        options={options}
        label="Interactive radio"
        value={value}
        onChange={setValue}
      />
    );
  },
};
