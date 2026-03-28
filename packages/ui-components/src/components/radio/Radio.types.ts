export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioProps {
  /** Radio options */
  options: RadioOption[];
  /** Selected value */
  value?: string;
  /** Default value for uncontrolled */
  defaultValue?: string;
  /** Radio group name */
  name: string;
  /** Label */
  label?: string;
  /** Disabled state */
  disabled?: boolean;
  /** ID */
  id?: string;
  /** Additional CSS class */
  className?: string;
  /** Change handler */
  onChange?: (value: string) => void;
}
