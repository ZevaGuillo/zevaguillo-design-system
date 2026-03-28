export interface PaginationProps {
  /** Total number of items */
  total: number;
  /** Items per page */
  pageSize: number;
  /** Current page (1-indexed) */
  currentPage: number;
  /** Page change handler */
  onPageChange: (page: number) => void;
  /** Show first/last buttons */
  showFirstLast?: boolean;
  /** Show previous/next buttons */
  showPrevNext?: boolean;
  /** Additional CSS class */
  className?: string;
}
