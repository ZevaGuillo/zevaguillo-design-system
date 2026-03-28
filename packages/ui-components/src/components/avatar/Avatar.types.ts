export interface AvatarProps {
  /** Avatar source URL */
  src?: string;
  /** Avatar alt text */
  alt?: string;
  /** Avatar fallback text (initials) */
  fallback?: string;
  /** Avatar size */
  size?: "small" | "medium" | "large";
  /** Additional CSS class */
  className?: string;
}
