import type { Meta, StoryObj } from "@storybook/react";
import { ProgressTabs } from "./ProgressTabs";

const meta: Meta<typeof ProgressTabs> = {
  title: "Components/ProgressTabs",
  component: ProgressTabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## ProgressTabs Component

Tabs with progress indicators.

### When to use:
- Step wizards
- Progress tracking
- Multi-step forms
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressTabs>;

const items = [
  {
    id: "1",
    label: "Step 1",
    content: "Content for step 1",
    progress: 100,
    completed: true,
  },
  { id: "2", label: "Step 2", content: "Content for step 2", progress: 50 },
  { id: "3", label: "Step 3", content: "Content for step 3", progress: 0 },
];

export const Default: Story = {
  args: {
    items: items,
  },
};

export const WithActiveTab: Story = {
  args: {
    items: items,
    activeId: "2",
  },
};

export const AllCompleted: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "Step 1",
        content: "Content",
        progress: 100,
        completed: true,
      },
      {
        id: "2",
        label: "Step 2",
        content: "Content",
        progress: 100,
        completed: true,
      },
      {
        id: "3",
        label: "Step 3",
        content: "Content",
        progress: 100,
        completed: true,
      },
    ],
  },
};
