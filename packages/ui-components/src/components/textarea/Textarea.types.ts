export interface TextareaProps {
  /** Textarea value */
  value?: string;
  /** Default value for uncontrolled */
  defaultValue?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Number of rows */
  rows?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Textarea name */
  name?: string;
  /** Textarea ID */
  id?: string;
  /** Additional CSS class */
  className?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Blur handler */
  onBlur?: () => void;
}
