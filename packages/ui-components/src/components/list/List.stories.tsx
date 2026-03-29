import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "actions"],
      description: "List variant",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## List Component

A vertical list of items.

### When to use:
- Navigation lists
- Settings lists
- Item collections
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

const items = [
  { id: "1", label: "First item", description: "Description here" },
  { id: "2", label: "Second item", description: "Another description" },
  { id: "3", label: "Third item", description: "More info" },
];

export const Default: Story = {
  args: {
    items: items,
  },
};

export const Bordered: Story = {
  args: {
    items: items,
    variant: "bordered",
  },
};

export const Actions: Story = {
  args: {
    items: items,
    variant: "actions",
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { id: "1", label: "Dashboard", icon: <span>📊</span> },
      { id: "2", label: "Analytics", icon: <span>📈</span> },
      { id: "3", label: "Settings", icon: <span>⚙️</span> },
    ],
    variant: "actions",
  },
};

export const WithRightContent: Story = {
  args: {
    items: [
      { id: "1", label: "Notifications", right: <span>3</span> },
      { id: "2", label: "Messages", right: <span>12</span> },
      { id: "3", label: "Tasks", right: <span>5</span> },
    ],
    variant: "bordered",
  },
};
