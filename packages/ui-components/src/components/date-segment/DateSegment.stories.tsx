import type { Meta, StoryObj } from "@storybook/react";
import { DateSegment } from "./DateSegment";

const meta: Meta<Meta> = {
  title: "Components/DateSegment",
  component: DateSegment,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["year", "month", "day"],
      description: "Segment type",
    },
    editable: {
      control: "boolean",
      description: "Whether the segment is editable",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## DateSegment Component

A date picker segment for editing date parts.

### When to use:
- Date input
- Date picker customization
- Form date fields
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateSegment>;

export const Month: Story = {
  args: {
    type: "month",
    value: "12",
    placeholder: "MM",
    max: 12,
    min: 1,
  },
};

export const Day: Story = {
  args: {
    type: "day",
    value: "25",
    placeholder: "DD",
    max: 31,
    min: 1,
  },
};

export const Year: Story = {
  args: {
    type: "year",
    value: "2024",
    placeholder: "YYYY",
  },
};

export const NonEditable: Story = {
  args: {
    type: "day",
    value: "15",
    editable: false,
  },
};
