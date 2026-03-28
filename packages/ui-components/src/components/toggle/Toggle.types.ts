export interface ToggleProps {
  /** Toggle label */
  label?: string;
  /** Toggle checked state */
  checked?: boolean;
  /** Default checked for uncontrolled */
  defaultChecked?: boolean;
  /** Toggle is disabled */
  disabled?: boolean;
  /** Toggle name */
  name?: string;
  /** Toggle ID */
  id?: string;
  /** Additional CSS class */
  className?: string;
  /** Change handler */
  onChange?: (checked: boolean) => void;
}
