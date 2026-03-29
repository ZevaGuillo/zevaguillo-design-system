import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xsmall", "small", "base", "large", "xlarge"],
      description: "Text size",
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
      description: "Font weight",
    },
    family: {
      control: "select",
      options: ["sans", "mono"],
      description: "Font family",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Text Component

A versatile text element.

### When to use:
- Body text
- Descriptions
- Any text content
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is default text",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text size="xsmall">Extra small text</Text>
      <Text size="small">Small text</Text>
      <Text size="base">Base text</Text>
      <Text size="large">Large text</Text>
      <Text size="xlarge">Extra large text</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text weight="regular">Regular weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
};

export const Monospace: Story = {
  args: {
    family: "mono",
    children: "const x = 42;",
  },
};
