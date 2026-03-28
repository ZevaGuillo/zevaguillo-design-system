import colorTokens from "../tokens/color.json";
import typographyTokens from "../tokens/typography.json";
import spacingTokens from "../tokens/spacing.json";
import radiusTokens from "../tokens/radius.json";
import shadowTokens from "../tokens/shadow.json";
import zIndexTokens from "../tokens/z-index.json";
import animationTokens from "../tokens/animation.json";

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
