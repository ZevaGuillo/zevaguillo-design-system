import { Input } from "@zevaguillo/ui-components";

export interface HandleInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  prefix?: string;
  disabled?: boolean;
}

export const HandleInput = ({
  value,
  onChange,
  placeholder = "handle",
  prefix = "@",
  disabled,
}: HandleInputProps) => {
  return (
    <div className="flex items-center">
      <span className="text-gray-500 px-3 border border-r-0 rounded-l-md h-10 flex items-center bg-gray-50">
        {prefix}
      </span>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="rounded-l-none"
      />
    </div>
  );
};
