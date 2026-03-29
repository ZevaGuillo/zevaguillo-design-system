import type { Meta, StoryObj } from "@storybook/react";
import { SingleColumnPage } from "./single-column-page";
import { Card } from "@zevaguillo/ui-components";

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
      <Card>
        <p className="text-gray-600">Page content goes here...</p>
      </Card>
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
      <Card>
        <p className="text-gray-600">Page content goes here...</p>
      </Card>
    ),
  },
};

export const HiddenTitle: Story = {
  args: {
    title: "Orders",
    hideTitle: true,
    children: (
      <Card>
        <p className="text-gray-600">Page content without title...</p>
      </Card>
    ),
  },
};

export const FullPage: Story = {
  args: {
    title: "Dashboard",
    subtitle: "Overview of your store",
    action: {
      label: "Refresh",
      onClick: () => console.log("Refresh"),
    },
    children: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card>
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-2xl font-bold">$45,678</p>
        </Card>
        <Card>
          <p className="text-sm text-gray-500">Total Customers</p>
          <p className="text-2xl font-bold">567</p>
        </Card>
      </div>
    ),
  },
};

export const TablePage: Story = {
  args: {
    title: "Customers",
    subtitle: "Manage your customer base",
    action: {
      label: "Add Customer",
      onClick: () => console.log("Add customer"),
    },
    children: (
      <Card className="p-0">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                Email
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">john@example.com</td>
              <td className="px-4 py-2">Active</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">jane@example.com</td>
              <td className="px-4 py-2">Active</td>
            </tr>
          </tbody>
        </table>
      </Card>
    ),
  },
};
