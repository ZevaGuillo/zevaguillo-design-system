export interface SwitchProps {
  /** Whether the switch is checked */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Switch label */
  label?: string;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Additional CSS class */
  className?: string;
}
