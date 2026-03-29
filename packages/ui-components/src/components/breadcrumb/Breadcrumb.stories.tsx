import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Breadcrumb Component

A navigation element that shows the user's current location.

### When to use:
- Show navigation hierarchy
- Help users navigate deep structures
- Display current location
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Category", href: "/products/category" },
      { label: "Current Page", isCurrent: true },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Settings", isCurrent: true },
    ],
    separator: ">",
  },
};

export const ShortBreadcrumb: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "About", isCurrent: true },
    ],
  },
};
