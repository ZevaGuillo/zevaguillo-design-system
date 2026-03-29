import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Heading, Text, Input } from "@zevaguillo/ui-components";

const meta: Meta<typeof Drawer> = {
  title: "Modals/Drawer",
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const Drawer = ({ open, onClose, children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      {open !== undefined ? (
        <DrawerComponent
          open={isOpen}
          onClose={() => setIsOpen(false)}
          {...props}
        >
          {children}
        </DrawerComponent>
      ) : (
        <DrawerComponent
          open={isOpen}
          onClose={() => setIsOpen(false)}
          {...props}
        >
          {children}
        </DrawerComponent>
      )}
    </div>
  );
};

const DrawerComponent = ({ open, onClose, children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  if (open === undefined) {
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        <DrawerContent
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          {...props}
        >
          {children}
        </DrawerContent>
      </div>
    );
  }

  return (
    <DrawerContent isOpen={open} onClose={onClose} {...props}>
      {children}
    </DrawerContent>
  );
};

const DrawerContent = ({
  isOpen,
  onClose,
  children,
  position = "right",
  size = "medium",
}: any) => {
  if (!isOpen) return null;

  const sizeClasses: Record<string, string> = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg",
  };

  const positionClasses: Record<string, string> = {
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`relative ${positionClasses[position]} ${sizeClasses[size]} bg-white shadow-xl`}
        style={{
          position: "fixed",
          [position]: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <DrawerContent
          isOpen={open}
          onClose={() => setOpen(false)}
          position="right"
          size="medium"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Heading level="h2">Drawer Title</Heading>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                ✕
              </Button>
            </div>
            <Text size="small" className="text-gray-500 mb-4">
              This is a drawer from the right side
            </Text>
            <p className="text-gray-600">Drawer content goes here...</p>
          </div>
        </DrawerContent>
      </div>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <DrawerContent
          isOpen={open}
          onClose={() => setOpen(false)}
          position="left"
          size="medium"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Heading level="h2">Sidebar</Heading>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                ✕
              </Button>
            </div>
            <p className="text-gray-600">Drawer content from left...</p>
          </div>
        </DrawerContent>
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Form Drawer</Button>
        <DrawerContent
          isOpen={open}
          onClose={() => setOpen(false)}
          position="right"
          size="medium"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Heading level="h2">Edit Customer</Heading>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                ✕
              </Button>
            </div>
            <div className="space-y-4">
              <Input label="First Name" placeholder="John" />
              <Input label="Last Name" placeholder="Doe" />
              <Input label="Email" placeholder="john@example.com" />
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </div>
          </div>
        </DrawerContent>
      </div>
    );
  },
};
