import { FocusModal, Button, Heading, Text } from "@zevaguillo/ui-components";
import { PropsWithChildren, useState, createContext, useContext } from "react";

interface StackedFocusModalContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const StackedFocusModalContext =
  createContext<StackedFocusModalContextValue | null>(null);

const useStackedFocusModal = () => {
  const context = useContext(StackedFocusModalContext);
  if (!context) {
    throw new Error(
      "useStackedFocusModal must be used within StackedFocusModalProvider",
    );
  }
  return context;
};

export interface StackedFocusModalProps extends PropsWithChildren {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Root = ({ open, onOpenChange, children }: StackedFocusModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  return (
    <StackedFocusModalContext.Provider
      value={{
        open: isOpen,
        setOpen: isControlled ? onOpenChange! : setInternalOpen,
      }}
    >
      {children}
    </StackedFocusModalContext.Provider>
  );
};

const Content = ({ children }: PropsWithChildren) => {
  const { open, setOpen } = useStackedFocusModal();

  return (
    <FocusModal open={open} onOpenChange={setOpen}>
      {children}
    </FocusModal>
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
    <FocusModal.Header>
      {title && <FocusModal.Title>{title}</FocusModal.Title>}
      {description && (
        <FocusModal.Description>{description}</FocusModal.Description>
      )}
    </FocusModal.Header>
  );
};

const Footer = ({ children }: PropsWithChildren) => {
  return (
    <FocusModal.Footer className="flex justify-end gap-2 p-4 border-t">
      {children}
    </FocusModal.Footer>
  );
};

export const StackedFocusModal = {
  Root,
  Content,
  Header,
  Footer,
};
