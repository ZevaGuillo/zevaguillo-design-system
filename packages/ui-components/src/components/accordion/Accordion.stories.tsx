import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    allowMultiple: {
      control: "boolean",
      description: "Allow multiple items to be open",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Accordion Component

A vertically stacked set of collapsible sections.

### When to use:
- FAQ pages
- Settings panels
- Grouping related content
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  {
    id: "1",
    title: "What is this?",
    content: "This is an accordion component.",
  },
  {
    id: "2",
    title: "How does it work?",
    content: "Click to expand or collapse.",
  },
  {
    id: "3",
    title: "Can I use multiple?",
    content: "Yes, you can allow multiple open.",
  },
];

export const Default: Story = {
  args: {
    items: items,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: items,
    allowMultiple: true,
  },
};
