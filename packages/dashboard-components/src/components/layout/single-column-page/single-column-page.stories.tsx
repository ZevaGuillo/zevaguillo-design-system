import type { Meta, StoryObj } from "@storybook/react";
import { SingleColumnPage } from "./single-column-page";
import { Badge } from "@zevaguillo/ui-components";

const meta: Meta<typeof SingleColumnPage> = {
  title: "Layout/SingleColumnPage",
  component: SingleColumnPage,
};

export default meta;
type Story = StoryObj<typeof SingleColumnPage>;

export const Default: Story = {
  args: {
    title: "Orders",
    subtitle: "Manage your orders here",
    children: (
      <div className="p-4 border rounded-lg">
        <p>Page content goes here...</p>
      </div>
    ),
  },
};

export const WithAction: Story = {
  args: {
    title: "Products",
    subtitle: "Manage your product catalog",
    action: {
      label: "Add Product",
      onClick: () => console.log("Add product"),
    },
    children: (
      <div className="p-4 border rounded-lg">
        <p>Page content goes here...</p>
      </div>
    ),
  },
};

export const HiddenTitle: Story = {
  args: {
    title: "Orders",
    hideTitle: true,
    children: (
      <div className="p-4 border rounded-lg">
        <p>Page content without title...</p>
      </div>
    ),
  },
};
