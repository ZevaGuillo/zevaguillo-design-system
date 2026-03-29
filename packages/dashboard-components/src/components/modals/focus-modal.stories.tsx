import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Button,
  Heading,
  Text,
  Input,
  Select,
  Checkbox,
} from "@zevaguillo/ui-components";
import { FocusModal } from "@zevaguillo/ui-components";

const meta: Meta<typeof FocusModal> = {
  title: "Modals/FocusModal",
  component: FocusModal,
};

export default meta;
type Story = StoryObj<typeof FocusModal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <FocusModal open={open} onOpenChange={setOpen} title="Example Modal">
          <FocusModal.Header>
            <FocusModal.Title>Modal Title</FocusModal.Title>
            <FocusModal.Description>
              This is a description of the modal
            </FocusModal.Description>
          </FocusModal.Header>
          <FocusModal.Body>
            <p className="text-gray-600">Modal content goes here...</p>
          </FocusModal.Body>
          <FocusModal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </FocusModal.Footer>
        </FocusModal>
      </div>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Small Modal</Button>
        <FocusModal
          open={open}
          onOpenChange={setOpen}
          title="Small Modal"
          size="small"
        >
          <FocusModal.Body>
            <p className="text-gray-600">Small modal content</p>
          </FocusModal.Body>
          <FocusModal.Footer>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </FocusModal.Footer>
        </FocusModal>
      </div>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Large Modal</Button>
        <FocusModal
          open={open}
          onOpenChange={setOpen}
          title="Large Modal"
          size="large"
        >
          <FocusModal.Header>
            <FocusModal.Title>Large Modal</FocusModal.Title>
          </FocusModal.Header>
          <FocusModal.Body>
            <p className="text-gray-600">Large modal with more content</p>
          </FocusModal.Body>
          <FocusModal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </FocusModal.Footer>
        </FocusModal>
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <FocusModal open={open} onOpenChange={setOpen} title="Create Customer">
          <FocusModal.Header>
            <FocusModal.Title>Create New Customer</FocusModal.Title>
            <FocusModal.Description>
              Fill in the information to create a new customer
            </FocusModal.Description>
          </FocusModal.Header>
          <FocusModal.Body>
            <div className="space-y-4">
              <Input label="First Name" placeholder="John" />
              <Input label="Last Name" placeholder="Doe" />
              <Input
                label="Email"
                placeholder="john@example.com"
                type="email"
              />
              <Input label="Phone" placeholder="+1 234 567 8900" type="tel" />
            </div>
          </FocusModal.Body>
          <FocusModal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Create Customer</Button>
          </FocusModal.Footer>
        </FocusModal>
      </div>
    );
  },
};

export const WithLongForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Complex Form</Button>
        <FocusModal
          open={open}
          onOpenChange={setOpen}
          title="Edit Product"
          size="large"
        >
          <FocusModal.Header>
            <FocusModal.Title>Edit Product</FocusModal.Title>
            <FocusModal.Description>
              Update product details and inventory
            </FocusModal.Description>
          </FocusModal.Header>
          <FocusModal.Body>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Basic Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Product Name"
                    placeholder="Enter product name"
                  />
                  <Input label="SKU" placeholder="SKU-001" />
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Pricing</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Price" placeholder="0.00" type="number" />
                  <Input
                    label="Compare at Price"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Inventory</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Quantity" placeholder="0" type="number" />
                  <Input label="SKU" placeholder="SKU-001" />
                </div>
              </div>
              <div>
                <Checkbox label="This product requires shipping" />
              </div>
            </div>
          </FocusModal.Body>
          <FocusModal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </FocusModal.Footer>
        </FocusModal>
      </div>
    );
  },
};

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <FocusModal
          open={open}
          onOpenChange={setOpen}
          title="Confirm Deletion"
          size="small"
        >
          <FocusModal.Header>
            <FocusModal.Title>Delete Item</FocusModal.Title>
            <FocusModal.Description>
              Are you sure you want to delete this item? This action cannot be
              undone.
            </FocusModal.Description>
          </FocusModal.Header>
          <FocusModal.Body>
            <div className="py-4">
              <p className="text-gray-600">
                This will permanently remove the item from your store. All
                associated data will be lost.
              </p>
            </div>
          </FocusModal.Body>
          <FocusModal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </FocusModal.Footer>
        </FocusModal>
      </div>
    );
  },
};

export const WithTabs: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("details");
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal with Tabs</Button>
        <FocusModal open={open} onOpenChange={setOpen} title="Manage Settings">
          <FocusModal.Header>
            <FocusModal.Title>Settings</FocusModal.Title>
          </FocusModal.Header>
          <FocusModal.Body>
            <div className="border-b mb-4">
              <nav className="-mb-px flex space-x-4">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "details"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab("advanced")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "advanced"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Advanced
                </button>
              </nav>
            </div>
            {activeTab === "details" && (
              <div className="space-y-4">
                <Input label="Name" placeholder="Enter name" />
                <Input label="Description" placeholder="Enter description" />
              </div>
            )}
            {activeTab === "advanced" && (
              <div className="space-y-4">
                <Input label="API Key" placeholder="Enter API key" />
                <Checkbox label="Enable debug mode" />
              </div>
            )}
          </FocusModal.Body>
          <FocusModal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </FocusModal.Footer>
        </FocusModal>
      </div>
    );
  },
};
