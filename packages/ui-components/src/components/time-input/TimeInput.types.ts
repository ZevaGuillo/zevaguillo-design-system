export interface TimeInputProps {
  /** Selected time value (HH:mm format) */
  value?: string;
  /** Default time (uncontrolled) */
  defaultValue?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Additional CSS class */
  className?: string;
}
