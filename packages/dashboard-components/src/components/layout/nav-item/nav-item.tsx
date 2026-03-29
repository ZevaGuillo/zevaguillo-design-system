import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export interface NavItemProps {
  label: string;
  href: string;
  icon?: ReactNode;
  active?: boolean;
  badge?: ReactNode;
}

export const NavItem = ({ label, href, icon, active, badge }: NavItemProps) => {
  const location = useLocation();
  const isActive = active ?? location.pathname.startsWith(href);

  return (
    <Link
      to={href}
      className={clsx(
        "flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
        isActive
          ? "bg-gray-100 text-gray-900 font-medium"
          : "text-gray-600 hover:bg-gray-50",
      )}
    >
      <span className="flex items-center gap-2">
        {icon && <span className="w-5">{icon}</span>}
        {label}
      </span>
      {badge}
    </Link>
  );
};
