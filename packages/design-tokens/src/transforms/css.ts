import type { DesignTokens } from "../transforms/index";

/**
 * Converts token set to CSS variables string
 */
export const toCssVariables = (tokens: DesignTokens): string => {
  const rootEntries: string[] = [];

  // Process each category of tokens
  Object.entries(tokens).forEach(([category, values]) => {
    if (typeof values === "object" && values !== null) {
      Object.entries(values).forEach(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          // Check if it's a nested object like color.palette.primary
          if (
            "palette" in values ||
            "semantic" in values ||
            "fontSizes" in values
          ) {
            // For nested structures like palette or semantic
            Object.entries(value).forEach(([subKey, subValue]) => {
              if (typeof subValue === "object" && subValue !== null) {
                // Third level (e.g., semantic.success.500)
                Object.entries(subValue).forEach(([subSubKey, subSubValue]) => {
                  rootEntries.push(
                    `  --${category}-${key}-${subKey}-${subSubKey}: ${subSubValue};`,
                  );
                });
              } else {
                rootEntries.push(
                  `  --${category}-${key}-${subKey}: ${subValue};`,
                );
              }
            });
          } else {
            // Second level (e.g., spacing.4, radius.md)
            rootEntries.push(`  --${category}-${key}: ${value};`);
          }
        }
      });
    }
  });

  return `:root {\n${rootEntries.sort().join("\n")}\n}`;
};

/**
 * Creates a dark mode variant of tokens
 */
export const createDarkVariant = (tokens: DesignTokens): DesignTokens => {
  // In a real implementation, you would transform colors for dark mode
  // This is a placeholder that returns the same tokens
  return tokens;
};
