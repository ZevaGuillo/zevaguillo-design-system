import { createContext, useContext, useState, ReactNode } from "react";

interface StackedModalContextValue {
  modals: number[];
  pushModal: () => void;
  popModal: () => void;
}

const StackedModalContext = createContext<StackedModalContextValue | null>(
  null,
);

export const useStackedModal = () => {
  const context = useContext(StackedModalContext);
  if (!context) {
    throw new Error("useStackedModal must be used within StackedModalProvider");
  }
  return context;
};

export interface StackedModalProviderProps {
  children: ReactNode;
}

export const StackedModalProvider = ({
  children,
}: StackedModalProviderProps) => {
  const [modals, setModals] = useState<number[]>([]);

  const pushModal = () => {
    setModals((prev) => [...prev, Date.now()]);
  };

  const popModal = () => {
    setModals((prev) => prev.slice(0, -1));
  };

  return (
    <StackedModalContext.Provider value={{ modals, pushModal, popModal }}>
      {children}
    </StackedModalContext.Provider>
  );
};
