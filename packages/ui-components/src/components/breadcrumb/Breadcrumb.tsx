import React from "react";
import clsx from "clsx";
import type { BreadcrumbProps } from "./Breadcrumb.types";

export const Breadcrumb = ({
  items,
  separator = "/",
  className = "",
}: BreadcrumbProps) => {
  return (
    <nav className={clsx("flex", className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">{separator}</span>
              )}

              {item.isCurrent || isLast ? (
                <span
                  className="text-sm font-medium text-gray-500"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-sky-600 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-sm text-gray-700">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
