import type { Meta, StoryObj } from "@storybook/react";
import { TwoColumnPage } from "./two-column-page";
import { Card } from "@zevaguillo/ui-components";

const meta: Meta<typeof TwoColumnPage> = {
  title: "Layout/TwoColumnPage",
  component: TwoColumnPage,
};

export default meta;
type Story = StoryObj<typeof TwoColumnPage>;

export const Default: Story = {
  args: {
    title: "Order Details",
    subtitle: "Order #12345",
    children: (
      <Card>
        <p>Main content area (2/3 width)</p>
      </Card>
    ),
    right: (
      <Card>
        <p>Sidebar content (1/3 width)</p>
      </Card>
    ),
  },
};

export const WithAction: Story = {
  args: {
    title: "Product Details",
    subtitle: "Manage product information",
    action: {
      label: "Edit Product",
      onClick: () => console.log("Edit"),
    },
    children: (
      <Card>
        <p>Main content area</p>
      </Card>
    ),
    right: (
      <Card>
        <p>Sidebar content</p>
      </Card>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    title: "Full Width Page",
    children: (
      <Card>
        <p>This page takes full width</p>
      </Card>
    ),
  },
};
