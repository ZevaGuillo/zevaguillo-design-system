export interface InputProps {
  /** Input type */
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  /** Input size */
  size?: "small" | "medium" | "large";
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Default value for uncontrolled input */
  defaultValue?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input has an error */
  error?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Input name */
  name?: string;
  /** ID */
  id?: string;
  /** Additional CSS class */
  className?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Blur handler */
  onBlur?: () => void;
  /** Focus handler */
  onFocus?: () => void;
}
