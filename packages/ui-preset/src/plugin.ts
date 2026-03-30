import plugin from "tailwindcss/plugin";

const colors = {
  light: {
    "--bg-base": "rgba(255, 255, 255, 1)",
    "--bg-base-hover": "rgba(243, 244, 246, 1)",
    "--bg-base-pressed": "rgba(229, 231, 235, 1)",
    "--bg-component": "rgba(250, 250, 250, 1)",
    "--bg-component-hover": "rgba(243, 244, 246, 1)",
    "--bg-component-pressed": "rgba(229, 231, 235, 1)",
    "--bg-field": "rgba(250, 250, 250, 1)",
    "--bg-field-hover": "rgba(243, 244, 246, 1)",
    "--bg-subtle": "rgba(250, 250, 250, 1)",
    "--bg-subtle-hover": "rgba(243, 244, 245, 1)",
    "--bg-subtle-pressed": "rgba(229, 231, 235, 1)",
    "--bg-disabled": "rgba(243, 244, 246, 1)",
    "--bg-highlight": "rgba(239, 246, 255, 1)",
    "--bg-highlight-hover": "rgba(219, 234, 254, 1)",
    "--bg-overlay": "rgba(24, 24, 27, 0.4)",
    "--bg-interactive": "rgba(59, 130, 246, 1)",
    "--fg-base": "rgba(24, 24, 27, 1)",
    "--fg-subtle": "rgba(82, 82, 91, 1)",
    "--fg-muted": "rgba(113, 113, 122, 1)",
    "--fg-disabled": "rgba(161, 161, 170, 1)",
    "--fg-interactive": "rgba(59, 130, 246, 1)",
    "--fg-interactive-hover": "rgba(37, 99, 235, 1)",
    "--fg-error": "rgba(220, 38, 38, 1)",
    "--fg-on-color": "rgba(255, 255, 255, 1)",
    "--fg-on-inverted": "rgba(255, 255, 255, 1)",
    "--border-base": "rgba(228, 228, 231, 1)",
    "--border-strong": "rgba(212, 212, 216, 1)",
    "--border-interactive": "rgba(59, 130, 246, 1)",
    "--border-error": "rgba(220, 38, 38, 1)",
    "--button-neutral": "rgba(255, 255, 255, 1)",
    "--button-neutral-hover": "rgba(243, 244, 245, 1)",
    "--button-neutral-pressed": "rgba(229, 231, 235, 1)",
    "--button-danger": "rgba(220, 38, 38, 1)",
    "--button-danger-hover": "rgba(185, 28, 28, 1)",
    "--button-danger-pressed": "rgba(153, 27, 27, 1)",
    "--button-transparent": "rgba(255, 255, 255, 0)",
    "--button-transparent-hover": "rgba(243, 244, 245, 1)",
    "--button-transparent-pressed": "rgba(229, 231, 235, 1)",
    "--button-inverted": "rgba(39, 39, 42, 1)",
    "--button-inverted-hover": "rgba(63, 63, 70, 1)",
    "--button-inverted-pressed": "rgba(82, 82, 91, 1)",
  },
  dark: {
    "--bg-base": "rgba(33, 33, 36, 1)",
    "--bg-base-hover": "rgba(39, 39, 42, 1)",
    "--bg-base-pressed": "rgba(63, 63, 70, 1)",
    "--bg-component": "rgba(39, 39, 42, 1)",
    "--bg-component-hover": "rgba(255, 255, 255, 0.1)",
    "--bg-component-pressed": "rgba(255, 255, 255, 0.16)",
    "--bg-field": "rgba(255, 255, 255, 0.04)",
    "--bg-field-hover": "rgba(255, 255, 255, 0.08)",
    "--bg-subtle": "rgba(24, 24, 27, 1)",
    "--bg-subtle-hover": "rgba(33, 33, 36, 1)",
    "--bg-subtle-pressed": "rgba(39, 39, 42, 1)",
    "--bg-disabled": "rgba(39, 39, 42, 1)",
    "--bg-highlight": "rgba(23, 37, 84, 1)",
    "--bg-highlight-hover": "rgba(30, 58, 138, 1)",
    "--bg-overlay": "rgba(24, 24, 27, 0.72)",
    "--bg-interactive": "rgba(96, 165, 250, 1)",
    "--fg-base": "rgba(244, 244, 245, 1)",
    "--fg-subtle": "rgba(161, 161, 170, 1)",
    "--fg-muted": "rgba(113, 113, 122, 1)",
    "--fg-disabled": "rgba(82, 82, 91, 1)",
    "--fg-interactive": "rgba(96, 165, 250, 1)",
    "--fg-interactive-hover": "rgba(147, 197, 253, 1)",
    "--fg-error": "rgba(251, 113, 133, 1)",
    "--fg-on-color": "rgba(255, 255, 255, 1)",
    "--fg-on-inverted": "rgba(24, 24, 27, 1)",
    "--border-base": "rgba(255, 255, 255, 0.08)",
    "--border-strong": "rgba(255, 255, 255, 0.16)",
    "--border-interactive": "rgba(96, 165, 250, 1)",
    "--border-error": "rgba(251, 113, 133, 1)",
    "--button-neutral": "rgba(255, 255, 255, 0.04)",
    "--button-neutral-hover": "rgba(255, 255, 255, 0.08)",
    "--button-neutral-pressed": "rgba(255, 255, 255, 0.12)",
    "--button-danger": "rgba(159, 18, 57, 1)",
    "--button-danger-hover": "rgba(190, 18, 60, 1)",
    "--button-danger-pressed": "rgba(225, 29, 72, 1)",
    "--button-transparent": "rgba(255, 255, 255, 0)",
    "--button-transparent-hover": "rgba(255, 255, 255, 0.08)",
    "--button-transparent-pressed": "rgba(255, 255, 255, 0.12)",
    "--button-inverted": "rgba(82, 82, 91, 1)",
    "--button-inverted-hover": "rgba(113, 113, 122, 1)",
    "--button-inverted-pressed": "rgba(161, 161, 170, 1)",
  },
};

const typography = {
  ".text-base": {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  ".text-sm": {
    fontSize: "0.875rem",
    lineHeight: "1.5",
  },
  ".text-xs": {
    fontSize: "0.75rem",
    lineHeight: "1.5",
  },
};

export default plugin(
  function ({ addBase, addComponents, config }) {
    const [darkMode, className = ".dark"] = ([] as string[]).concat(
      config("darkMode", "media"),
    );

    addBase({
      "*": {
        borderColor: "var(--border-base)",
      },
    });

    addComponents(typography);

    addBase({
      ":root": { ...colors.light },
    });

    if (darkMode === "class") {
      addBase({
        [className]: { ...colors.dark },
      });
    } else {
      addBase({
        "@media (prefers-color-scheme: dark)": {
          ":root": { ...colors.dark },
        },
      });
    }
  },
  {
    theme: {
      extend: {
        fontFamily: {
          sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        },
        transitionProperty: {
          fg: "color, background-color, border-color, box-shadow, opacity",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0px" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0px" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
);
