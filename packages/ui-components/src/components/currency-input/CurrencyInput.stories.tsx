import type { Meta, StoryObj } from "@storybook/react";
import { CurrencyInput } from "./CurrencyInput";
import { useState } from "react";

const meta: Meta<typeof CurrencyInput> = {
  title: "Components/CurrencyInput",
  component: CurrencyInput,
  tags: ["autodocs"],
  argTypes: {
    currency: {
      control: "text",
      description: "Currency code (e.g., USD, EUR)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## CurrencyInput Component

An input for currency values.

### When to use:
- Price input
- Money amounts
- Financial forms
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CurrencyInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>();
    return <CurrencyInput value={value} onChange={setValue} />;
  },
};

export const WithCurrency: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(100);
    return <CurrencyInput value={value} onChange={setValue} currency="USD" />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 500,
    currency: "EUR",
  },
};
