import { PropsWithChildren, ReactNode } from "react";

export interface PublicLayoutProps extends PropsWithChildren {
  logo?: ReactNode;
}

export const PublicLayout = ({ children, logo }: PublicLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {logo && (
        <header className="p-4 border-b">
          <div className="max-w-7xl mx-auto">{logo}</div>
        </header>
      )}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-6">{children}</div>
      </main>
    </div>
  );
};
