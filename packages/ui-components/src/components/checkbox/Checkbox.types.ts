export interface CheckboxProps {
  /** Checkbox label */
  label?: string;
  /** Checkbox checked state */
  checked?: boolean;
  /** Default checked for uncontrolled */
  defaultChecked?: boolean;
  /** Checkbox value */
  value?: string;
  /** Checkbox is disabled */
  disabled?: boolean;
  /** Checkbox name */
  name?: string;
  /** Checkbox ID */
  id?: string;
  /** Additional CSS class */
  className?: string;
  /** Change handler */
  onChange?: (checked: boolean) => void;
}
