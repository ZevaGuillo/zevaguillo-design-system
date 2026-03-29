import type { Meta, StoryObj } from "@storybook/react";
import { ProgressAccordion } from "./ProgressAccordion";

const meta: Meta<typeof ProgressAccordion> = {
  title: "Components/ProgressAccordion",
  component: ProgressAccordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## ProgressAccordion Component

An accordion with progress indicators.

### When to use:
- Multi-step forms
- Progress tracking
- Task lists
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressAccordion>;

const items = [
  {
    id: "1",
    title: "Step 1",
    content: "Content for step 1",
    progress: 100,
    completed: true,
  },
  { id: "2", title: "Step 2", content: "Content for step 2", progress: 50 },
  { id: "3", title: "Step 3", content: "Content for step 3", progress: 0 },
];

export const Default: Story = {
  args: {
    items: items,
  },
};

export const WithExpanded: Story = {
  args: {
    items: items,
    expandedId: "2",
  },
};

export const AllCompleted: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "Step 1",
        content: "Content",
        progress: 100,
        completed: true,
      },
      {
        id: "2",
        title: "Step 2",
        content: "Content",
        progress: 100,
        completed: true,
      },
      {
        id: "3",
        title: "Step 3",
        content: "Content",
        progress: 100,
        completed: true,
      },
    ],
  },
};
