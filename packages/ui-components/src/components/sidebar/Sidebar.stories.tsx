import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {
    collapsed: {
      control: "boolean",
      description: "Sidebar collapsed state",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Sidebar Component

A navigation sidebar for applications.

### When to use:
- Main navigation
- App navigation
- Menu sidebar
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const items = [
  { id: "1", label: "Dashboard", icon: "📊" },
  { id: "2", label: "Analytics", icon: "📈" },
  { id: "3", label: "Settings", icon: "⚙️" },
];

export const Default: Story = {
  args: {
    items: items,
    logo: <div>Logo</div>,
  },
};

export const WithActiveItem: Story = {
  args: {
    items: items,
    activeItem: "2",
    logo: <div>Logo</div>,
  },
};

export const Collapsed: Story = {
  args: {
    items: items,
    collapsed: true,
    logo: <div>Logo</div>,
  },
};

export const WithSubmenu: Story = {
  args: {
    items: [
      { id: "1", label: "Dashboard", icon: "📊" },
      {
        id: "2",
        label: "Settings",
        icon: "⚙️",
        items: [
          { id: "2a", label: "Profile" },
          { id: "2b", label: "Preferences" },
        ],
      },
    ],
    logo: <div>Logo</div>,
  },
};
