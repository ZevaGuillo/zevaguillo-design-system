import colorTokens from "./color.json";
import typographyTokens from "./typography.json";
import spacingTokens from "./spacing.json";
import radiusTokens from "./radius.json";
import shadowTokens from "./shadow.json";
import zIndexTokens from "./z-index.json";
import animationTokens from "./animation.json";

export const tokens = {
  color: colorTokens,
  typography: typographyTokens,
  spacing: spacingTokens,
  radius: radiusTokens,
  shadow: shadowTokens,
  zIndex: zIndexTokens,
  animation: animationTokens,
};

export type DesignTokens = typeof tokens;

export {
  colorTokens,
  typographyTokens,
  spacingTokens,
  radiusTokens,
  shadowTokens,
  zIndexTokens,
  animationTokens,
};
