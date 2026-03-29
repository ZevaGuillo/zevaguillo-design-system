import { Switch } from "@zevaguillo/ui-components";

export interface SwitchBoxProps {
  label: string;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const SwitchBox = ({
  label,
  description,
  checked,
  onChange,
  disabled,
}: SwitchBoxProps) => {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <Switch checked={checked} onChange={onChange} disabled={disabled} />
      <div>
        <span className="font-medium text-sm">{label}</span>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
    </label>
  );
};
