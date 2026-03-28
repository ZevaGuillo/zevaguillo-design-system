import React from "react";
import clsx from "clsx";
import type { HeaderProps } from "./Header.types";

export const Header = ({
  title,
  subtitle,
  left,
  right,
  breadcrumbs,
  className = "",
}: HeaderProps) => {
  return (
    <header className={clsx("bg-white border-b border-gray-200", className)}>
      <div className="px-6 py-4">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex text-sm text-gray-500 mb-2">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-gray-700">
                    {crumb.label}
                  </a>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            {left && <div className="mr-4">{left}</div>}

            <div>
              {title && (
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              )}
              {subtitle && (
                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
              )}
            </div>
          </div>

          {right && <div className="flex items-center gap-3">{right}</div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
