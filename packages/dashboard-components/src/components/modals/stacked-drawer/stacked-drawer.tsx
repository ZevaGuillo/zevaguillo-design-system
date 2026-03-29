import { Drawer, Button, Heading, Text } from "@zevaguillo/ui-components";
import { PropsWithChildren, useState, createContext, useContext } from "react";

interface StackedDrawerContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const StackedDrawerContext = createContext<StackedDrawerContextValue | null>(
  null,
);

const useStackedDrawer = () => {
  const context = useContext(StackedDrawerContext);
  if (!context) {
    throw new Error(
      "useStackedDrawer must be used within StackedDrawerProvider",
    );
  }
  return context;
};

export interface StackedDrawerProps extends PropsWithChildren {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Root = ({ open, onOpenChange, children }: StackedDrawerProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  return (
    <StackedDrawerContext.Provider
      value={{
        open: isOpen,
        setOpen: isControlled ? onOpenChange! : setInternalOpen,
      }}
    >
      {children}
    </StackedDrawerContext.Provider>
  );
};

const Content = ({ children }: PropsWithChildren) => {
  const { open, setOpen } = useStackedDrawer();

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
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

export const StackedDrawer = {
  Root,
  Content,
  Header,
  Footer,
};
