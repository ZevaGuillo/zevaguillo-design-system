import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";
import { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    withMonthNavigation: {
      control: "boolean",
      description: "Show month navigation",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Calendar Component

A date picker calendar.

### When to use:
- Date selection
- Date range picking
- Scheduling
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return <Calendar selected={selected} onSelect={setSelected} />;
  },
};

export const WithoutNavigation: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        selected={selected}
        onSelect={setSelected}
        withMonthNavigation={false}
      />
    );
  },
};

export const WithMinMax: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        selected={selected}
        onSelect={setSelected}
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2024, 11, 31)}
        withMonthNavigation
      />
    );
  },
};
