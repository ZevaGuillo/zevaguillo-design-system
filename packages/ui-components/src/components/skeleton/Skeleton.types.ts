export interface SkeletonProps {
  /** Skeleton width */
  width?: string | number;
  /** Skeleton height */
  height?: string | number;
  /** Skeleton variant */
  variant?: "text" | "circular" | "rectangular";
  /** Number of skeleton lines (for text variant) */
  lines?: number;
  /** Additional CSS class */
  className?: string;
}
