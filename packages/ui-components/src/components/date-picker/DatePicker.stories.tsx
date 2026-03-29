import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the date picker is disabled",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## DatePicker Component

An input for selecting dates.

### When to use:
- Date input forms
- Scheduling
- Date range selection
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return <DatePicker value={date} onChange={setDate} />;
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <DatePicker value={date} onChange={setDate} />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <DatePicker value={date} onChange={setDate} placeholder="Select a date" />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: new Date(),
  },
};
