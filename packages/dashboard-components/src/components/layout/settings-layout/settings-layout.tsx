import { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export interface SettingsLayoutProps extends PropsWithChildren {
  groups?: {
    title: string;
    items: {
      label: string;
      href: string;
      icon?: ReactNode;
    }[];
  }[];
  activeItem?: string;
}

export const SettingsLayout = ({
  children,
  groups = [],
  activeItem,
}: SettingsLayoutProps) => {
  return (
    <div className="flex gap-6">
      <aside className="w-64 shrink-0">
        <nav className="space-y-6">
          {groups.map((group, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                {group.title}
              </h3>
              <ul className="space-y-1">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.href}
                      className={clsx(
                        "block px-3 py-2 text-sm rounded-md transition-colors",
                        activeItem === item.href
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
};
