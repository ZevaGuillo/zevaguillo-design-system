export interface CalendarProps {
  /** Selected date */
  selected?: Date;
  /** Callback when date is selected */
  onSelect?: (date: Date) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Whether to show month navigation */
  withMonthNavigation?: boolean;
  /** Additional CSS class */
  className?: string;
}
