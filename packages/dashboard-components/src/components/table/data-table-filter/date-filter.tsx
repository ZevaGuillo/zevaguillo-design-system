import { DatePicker } from "@zevaguillo/ui-components";

export interface DateFilterProps {
  value?: Date;
  onChange?: (value: Date | undefined) => void;
}

export const DateFilter = ({ value, onChange }: DateFilterProps) => {
  return <DatePicker value={value} onChange={onChange} />;
};
