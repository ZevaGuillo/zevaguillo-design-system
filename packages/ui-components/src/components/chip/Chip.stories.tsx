import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined"],
      description: "Chip variant",
    },
    color: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error", "info"],
      description: "Chip color",
    },
    selected: {
      control: "boolean",
      description: "Whether chip is selected",
    },
    disabled: {
      control: "boolean",
      description: "Whether chip is disabled",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Chip Component

A compact, interactive element for selection or filtering.

### When to use:
- Filters
- Tags selection
- Multi-select options
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: "Chip",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled",
    variant: "filled",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined",
    variant: "outlined",
  },
};

export const Selected: Story = {
  args: {
    label: "Selected",
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
      <Chip label="Error" color="error" />
      <Chip label="Info" color="info" />
    </div>
  ),
};

export const Selection: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Chip label="React" selected />
      <Chip label="Vue" />
      <Chip label="Angular" />
      <Chip label="Svelte" />
    </div>
  ),
};
