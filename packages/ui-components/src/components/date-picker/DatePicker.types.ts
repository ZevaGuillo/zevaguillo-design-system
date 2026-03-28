export interface DatePickerProps {
  /** Selected date */
  value?: Date;
  /** Default date (uncontrolled) */
  defaultValue?: Date;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the date picker is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (date: Date | undefined) => void;
  /** Additional CSS class */
  className?: string;
}
