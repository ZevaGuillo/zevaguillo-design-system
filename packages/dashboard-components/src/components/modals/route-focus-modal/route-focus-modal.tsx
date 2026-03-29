import { FocusModal, Button, Heading, Text } from "@zevaguillo/ui-components";
import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface RouteFocusModalProps extends PropsWithChildren {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  size?: "small" | "medium" | "large";
}

const Root = ({ open, onOpenChange, children }: RouteFocusModalProps) => {
  const navigate = useNavigate();
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  useEffect(() => {
    if (!isControlled) {
      setInternalOpen(true);
    }
  }, []);

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      if (isControlled) {
        onOpenChange?.(false);
      } else {
        setInternalOpen(false);
        navigate(-1);
      }
    }
  };

  return (
    <FocusModal open={isOpen} onOpenChange={handleOpenChange}>
      {children}
    </FocusModal>
  );
};

const Content = ({ children }: PropsWithChildren) => {
  return <FocusModal.Content>{children}</FocusModal.Content>;
};

const Header = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <FocusModal.Header>
      {title && <FocusModal.Title>{title}</FocusModal.Title>}
      {description && (
        <FocusModal.Description>{description}</FocusModal.Description>
      )}
    </FocusModal.Header>
  );
};

const Body = ({ children }: PropsWithChildren) => {
  return (
    <FocusModal.Body className="flex-1 overflow-y-auto p-6">
      {children}
    </FocusModal.Body>
  );
};

const Footer = ({ children }: PropsWithChildren) => {
  return (
    <FocusModal.Footer className="flex justify-end gap-2 p-4 border-t">
      {children}
    </FocusModal.Footer>
  );
};

const Close = ({ children }: PropsWithChildren) => {
  return (
    <FocusModal.Close asChild>
      {children || <Button variant="secondary">Cancel</Button>}
    </FocusModal.Close>
  );
};

export const RouteFocusModal = {
  Root,
  Content,
  Header,
  Body,
  Footer,
  Close,
  Title: FocusModal.Title,
  Description: FocusModal.Description,
};
