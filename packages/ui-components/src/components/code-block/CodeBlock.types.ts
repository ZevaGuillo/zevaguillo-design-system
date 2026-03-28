export interface CodeBlockProps {
  /** Code content */
  code: string;
  /** Programming language */
  language?: string;
  /** Whether to show line numbers */
  showLineNumbers?: boolean;
  /** Whether to allow copying */
  copyable?: boolean;
  /** Additional CSS class */
  className?: string;
}
