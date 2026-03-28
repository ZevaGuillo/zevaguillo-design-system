export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** Select options */
  options: SelectOption[];
  /** Selected value */
  value?: string;
  /** Default value for uncontrolled */
  defaultValue?: string;
  /** Placeholder */
  placeholder?: string;
  /** Label */
  label?: string;
  /** Error message */
  error?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Name attribute */
  name?: string;
  /** ID */
  id?: string;
  /** Additional CSS class */
  className?: string;
  /** Change handler */
  onChange?: (value: string) => void;
}
