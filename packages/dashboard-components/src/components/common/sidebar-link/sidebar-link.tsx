import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import clsx from "clsx";

export interface SidebarLinkProps {
  to: string;
  children: ReactNode;
  active?: boolean;
}

export const SidebarLink = ({ to, children, active }: SidebarLinkProps) => {
  const location = useLocation();
  const isActive = active ?? location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={clsx(
        "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
        isActive
          ? "bg-gray-100 text-gray-900 font-medium"
          : "text-gray-600 hover:bg-gray-50",
      )}
    >
      {children}
    </Link>
  );
};
