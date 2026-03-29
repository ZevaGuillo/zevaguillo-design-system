import { PropsWithChildren, ReactNode } from "react";
import { Outlet } from "react-router-dom";

export interface MainLayoutProps extends PropsWithChildren {
  sidebar?: ReactNode;
}

export const MainLayout = ({ sidebar, children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen">
      {sidebar && <aside className="w-56 border-e bg-gray-50">{sidebar}</aside>}
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children || <Outlet />}</div>
      </main>
    </div>
  );
};
