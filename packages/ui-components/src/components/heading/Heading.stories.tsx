import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Heading level",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Heading Component

A semantic heading element.

### When to use:
- Page titles
- Section headers
- Content hierarchy
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    level: "h1",
    children: "Heading 1",
  },
};

export const H2: Story = {
  args: {
    level: "h2",
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    level: "h3",
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    level: "h4",
    children: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    level: "h5",
    children: "Heading 5",
  },
};

export const H6: Story = {
  args: {
    level: "h6",
    children: "Heading 6",
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading level="h1">Heading Level 1</Heading>
      <Heading level="h2">Heading Level 2</Heading>
      <Heading level="h3">Heading Level 3</Heading>
      <Heading level="h4">Heading Level 4</Heading>
      <Heading level="h5">Heading Level 5</Heading>
      <Heading level="h6">Heading Level 6</Heading>
    </div>
  ),
};
