export interface DateSegmentProps {
  /** Segment type */
  type: "year" | "month" | "day";
  /** Current value */
  value: string;
  /** Placeholder */
  placeholder?: string;
  /** Whether the segment is editable */
  editable?: boolean;
  /** Maximum value */
  max?: number;
  /** Minimum value */
  min?: number;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Additional CSS class */
  className?: string;
}
