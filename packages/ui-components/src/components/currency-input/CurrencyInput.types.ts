export interface CurrencyInputProps {
  /** Input value */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Currency code */
  currency?: string;
  /** Placeholder */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: number | undefined) => void;
  /** Additional CSS class */
  className?: string;
}
