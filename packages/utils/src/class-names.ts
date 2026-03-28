type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | Record<string, unknown>;

/**
 * A utility for constructing className strings conditionally
 * Similar to clsx but lightweight
 */
export const cn = (...inputs: ClassValue[]): string => {
  let result = "";

  inputs.forEach((input) => {
    if (!input) return;

    if (typeof input === "string" || typeof input === "number") {
      result += (result ? " " : "") + String(input);
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) {
        result += (result ? " " : "") + nested;
      }
    } else if (typeof input === "object") {
      Object.entries(input).forEach(([key, value]) => {
        if (value) {
          result += (result ? " " : "") + key;
        }
      });
    }
  });

  return result;
};

export default cn;
