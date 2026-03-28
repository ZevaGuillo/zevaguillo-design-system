export type ThemeMode = "light" | "dark";

export interface Theme {
  mode: ThemeMode;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
    info: string;
  };
}

export const lightTheme: Theme = {
  mode: "light",
  colors: {
    primary: "#0ea5e9",
    secondary: "#6b7280",
    background: "#ffffff",
    surface: "#f9fafb",
    text: "#111827",
    textSecondary: "#6b7280",
    border: "#e5e7eb",
    error: "#ef4444",
    success: "#10b981",
    warning: "#f59e0b",
    info: "#3b82f6",
  },
};

export const darkTheme: Theme = {
  mode: "dark",
  colors: {
    primary: "#38bdf8",
    secondary: "#9ca3af",
    background: "#111827",
    surface: "#1f2937",
    text: "#f9fafb",
    textSecondary: "#9ca3af",
    border: "#374151",
    error: "#f87171",
    success: "#34d399",
    warning: "#fbbf24",
    info: "#60a5fa",
  },
};
