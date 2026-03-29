import { createContext, useContext, useState, ReactNode } from "react";

interface RouteModalContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const RouteModalContext = createContext<RouteModalContextValue | null>(null);

export const useRouteModal = () => {
  const context = useContext(RouteModalContext);
  if (!context) {
    throw new Error("useRouteModal must be used within RouteModalProvider");
  }
  return context;
};

export interface RouteModalProviderProps {
  children: ReactNode;
}

export const RouteModalProvider = ({ children }: RouteModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <RouteModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </RouteModalContext.Provider>
  );
};
