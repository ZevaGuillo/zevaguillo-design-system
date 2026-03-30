# @zevaguillo/design-tokens

Design tokens for the Zevaguillo design system. Contains color, typography, spacing, and other fundamental design values.

## Installation

```bash
npm install @zevaguillo/design-tokens
```

## Usage

```typescript
import {
  tokens,
  colorTokens,
  typographyTokens,
} from "@zevaguillo/design-tokens";

// Access color values
const primaryColor = colorTokens.palette.primary[500];

// Access typography values
const fontSize = typographyTokens.fontSizes.base;
```

## Available Tokens

- `color` - Color palette (primary, neutral, semantic)
- `typography` - Font sizes, weights, line heights
- `spacing` - Spacing scale
- `radius` - Border radius values
- `shadow` - Shadow definitions
- `z-index` - Layer values
- `animation` - Animation durations
- `breakpoints` - Responsive breakpoints
- `transition` - Transition timings
