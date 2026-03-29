import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@zevaguillo/ui-components";
import { FocusModal, Heading, Text, Input } from "@zevaguillo/ui-components";

const meta: Meta<typeof FocusModal> = {
  title: "Modals/FocusModal",
  component: FocusModal,
};

export default meta;
type Story = StoryObj<typeof FocusModal>;

export const Default: Story = {
  render: (args) => {
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
  render: (args) => {
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
  render: (args) => {
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
  render: (args) => {
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
