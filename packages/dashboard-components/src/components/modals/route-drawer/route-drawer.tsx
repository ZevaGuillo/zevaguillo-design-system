import { Drawer, Button, Heading, Text } from "@zevaguillo/ui-components";
import { PropsWithChildren, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface RouteDrawerProps extends PropsWithChildren {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  size?: "small" | "medium" | "large";
}

const Root = ({ open, onOpenChange, children }: RouteDrawerProps) => {
  const navigate = useNavigate();
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (isControlled) {
      onOpenChange?.(newOpen);
    } else {
      setInternalOpen(newOpen);
      if (!newOpen) {
        navigate(-1);
      }
    }
  };

  return (
    <Drawer open={isOpen} onClose={() => handleOpenChange(false)}>
      {children}
    </Drawer>
  );
};

const Header = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className="p-4 border-b">
      {title && <Heading level="h2">{title}</Heading>}
      {description && (
        <Text size="small" className="text-gray-500 mt-1">
          {description}
        </Text>
      )}
    </div>
  );
};

const Footer = ({ children }: PropsWithChildren) => {
  return <div className="p-4 border-t flex justify-end gap-2">{children}</div>;
};

export const RouteDrawer = {
  Root,
  Header,
  Footer,
};
