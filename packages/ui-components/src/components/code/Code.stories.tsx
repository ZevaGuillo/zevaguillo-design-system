import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";

const meta: Meta<typeof Code> = {
  title: "Components/Code",
  component: Code,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "ghost"],
      description: "Code variant",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Code Component

A component for displaying inline code.

### When to use:
- Inline code snippets
- Technical terms
- Variable names
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    children: "const x = 42;",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "function hello()",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "return true",
  },
};

export const InText: Story = {
  render: () => (
    <p>
      Use the <Code>console.log()</Code> function to debug.
    </p>
  ),
};
