import React from "react";
import clsx from "clsx";
import type { PaginationProps } from "./Pagination.types";

export const Pagination = ({
  total,
  pageSize,
  currentPage,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  className = "",
}: PaginationProps) => {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showPages = 5;

    if (totalPages <= showPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const PageButton = ({
    page,
    isActive = false,
    disabled = false,
    children,
  }: {
    page?: number;
    isActive?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      disabled={disabled}
      onClick={() => page && onPageChange(page)}
      className={clsx(
        "min-w-[40px] h-10 px-3 flex items-center justify-center text-sm font-medium",
        "rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500",
        isActive ? "bg-sky-500 text-white" : "text-gray-700 hover:bg-gray-100",
        disabled && "opacity-50 cursor-not-allowed",
      )}
    >
      {children}
    </button>
  );

  return (
    <div className={clsx("flex items-center justify-center gap-1", className)}>
      {showFirstLast && (
        <PageButton page={1} disabled={currentPage === 1}>
          <span className="sr-only">First</span>
          ««
        </PageButton>
      )}

      {showPrevNext && (
        <PageButton page={currentPage - 1} disabled={currentPage === 1}>
          <span className="sr-only">Previous</span>«
        </PageButton>
      )}

      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <PageButton key={index} page={page} isActive={page === currentPage}>
            {page}
          </PageButton>
        ) : (
          <span key={index} className="px-2 text-gray-400">
            ...
          </span>
        ),
      )}

      {showPrevNext && (
        <PageButton
          page={currentPage + 1}
          disabled={currentPage === totalPages}
        >
          <span className="sr-only">Next</span>»
        </PageButton>
      )}

      {showFirstLast && (
        <PageButton page={totalPages} disabled={currentPage === totalPages}>
          <span className="sr-only">Last</span>
          »»
        </PageButton>
      )}
    </div>
  );
};

export default Pagination;
