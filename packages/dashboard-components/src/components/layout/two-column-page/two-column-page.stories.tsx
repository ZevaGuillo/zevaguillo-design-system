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
        <p className="font-medium mb-2">Order Items</p>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Product A x 2</span>
            <span>$100.00</span>
          </div>
          <div className="flex justify-between">
            <span>Product B x 1</span>
            <span>$50.00</span>
          </div>
        </div>
      </Card>
    ),
    right: (
      <Card>
        <p className="font-medium mb-2">Order Summary</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span>$150.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between font-medium border-t pt-2">
            <span>Total</span>
            <span>$160.00</span>
          </div>
        </div>
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
        <p className="font-medium mb-2">Product Information</p>
        <div className="space-y-2 text-sm text-gray-600">
          <div>
            <span className="font-medium">Name:</span> Sample Product
          </div>
          <div>
            <span className="font-medium">SKU:</span> SKU-12345
          </div>
          <div>
            <span className="font-medium">Price:</span> $99.99
          </div>
        </div>
      </Card>
    ),
    right: (
      <Card>
        <p className="font-medium mb-2">Quick Actions</p>
        <div className="space-y-2 text-sm text-gray-600">
          <div>• View Analytics</div>
          <div>• Manage Inventory</div>
          <div>• Duplicate Product</div>
        </div>
      </Card>
    ),
  },
};

export const LeftAndRight: Story = {
  args: {
    title: "Customer Details",
    subtitle: "Customer #CUST-001",
    children: (
      <Card>
        <p className="font-medium mb-2">Customer Profile</p>
        <div className="space-y-2 text-sm text-gray-600">
          <div>
            <span className="font-medium">Name:</span> John Doe
          </div>
          <div>
            <span className="font-medium">Email:</span> john@example.com
          </div>
          <div>
            <span className="font-medium">Phone:</span> +1 234 567 8900
          </div>
        </div>
      </Card>
    ),
    left: (
      <Card>
        <p className="font-medium mb-2">Address</p>
        <div className="text-sm text-gray-600">
          <p>123 Main Street</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
      </Card>
    ),
    right: (
      <Card>
        <p className="font-medium mb-2">Recent Orders</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>#ORD-001</span>
            <span className="text-green-600">Completed</span>
          </div>
          <div className="flex justify-between">
            <span>#ORD-002</span>
            <span className="text-yellow-600">Pending</span>
          </div>
        </div>
      </Card>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    title: "Full Width Page",
    children: (
      <Card>
        <p className="font-medium mb-2">Main Content</p>
        <p className="text-sm text-gray-600">
          This page takes the full width of the container. Use this layout when
          you don't need a sidebar.
        </p>
      </Card>
    ),
  },
};

export const OnlyLeft: Story = {
  args: {
    title: "Left Column Only",
    children: undefined,
    left: (
      <Card>
        <p className="font-medium mb-2">Left Content</p>
        <p className="text-sm text-gray-600">
          This layout shows only the left column (2/3 width).
        </p>
      </Card>
    ),
  },
};

export const OnlyRight: Story = {
  args: {
    title: "Right Column Only",
    children: undefined,
    right: (
      <Card>
        <p className="font-medium mb-2">Right Content</p>
        <p className="text-sm text-gray-600">
          This layout shows only the right column (1/3 width).
        </p>
      </Card>
    ),
  },
};
