/**
 * Formats a number as currency
 */
export const formatCurrency = (
  amount: number,
  currency: string = "USD",
  locale: string = "en-US",
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};

/**
 * Formats a number with thousand separators
 */
export const formatNumber = (num: number, locale: string = "en-US"): string => {
  return new Intl.NumberFormat(locale).format(num);
};

/**
 * Formats a date
 */
export const formatDate = (
  date: Date | string,
  options?: Intl.DateTimeFormatOptions,
  locale: string = "en-US",
): string => {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(d);
};

/**
 * Formats a relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (
  date: Date | string,
  locale: string = "en-US",
): string => {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }

  return formatDate(
    d,
    { year: "numeric", month: "short", day: "numeric" },
    locale,
  );
};

export default { formatCurrency, formatNumber, formatDate, formatRelativeTime };
