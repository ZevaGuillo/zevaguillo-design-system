# @zevaguillo/ui-preset

Tailwind CSS preset for the Zevaguillo design system. Provides theme configuration, CSS custom properties, and utility extensions.

## Installation

```bash
npm install @zevaguillo/ui-preset
```

## Peer Dependencies

```bash
npm install tailwindcss
```

## Usage

Add to your Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  presets: [require("@zevaguillo/ui-preset")],
};
```

## Features

- CSS custom properties for colors (light/dark mode)
- Typography utilities
- Animation keyframes
- Dark mode support

## CSS Variables

The preset provides CSS variables for:

- Background colors (`--bg-base`, `--bg-component`, `--bg-field`, etc.)
- Foreground colors (`--fg-base`, `--fg-subtle`, `--fg-interactive`, etc.)
- Border colors (`--border-base`, `--border-strong`, etc.)
- Button variants (`--button-neutral`, `--button-danger`, etc.)
