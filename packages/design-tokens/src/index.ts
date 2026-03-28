import colorTokens from "./tokens/color.json";
import typographyTokens from "./tokens/typography.json";
import spacingTokens from "./tokens/spacing.json";
import radiusTokens from "./tokens/radius.json";
import shadowTokens from "./tokens/shadow.json";
import zIndexTokens from "./tokens/z-index.json";
import animationTokens from "./tokens/animation.json";
import breakpointsTokens from "./tokens/breakpoints.json";
import transitionTokens from "./tokens/transition.json";

export const tokens = {
  color: colorTokens,
  typography: typographyTokens,
  spacing: spacingTokens,
  radius: radiusTokens,
  shadow: shadowTokens,
  zIndex: zIndexTokens,
  animation: animationTokens,
  breakpoints: breakpointsTokens,
  transition: transitionTokens,
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
  breakpointsTokens,
  transitionTokens,
};
