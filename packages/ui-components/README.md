# @zevaguillo/ui-components

Core UI components for the Zevaguillo design system. Provides accessible, customizable base components built with Radix UI and styled with Tailwind CSS.

## Installation

```bash
npm install @zevaguillo/ui-components @zevaguillo/design-tokens @zevaguillo/hooks
```

## Peer Dependencies

```bash
npm install react react-dom clsx
```

## Usage

```typescript
import { Button, Input, Modal } from "@zevaguillo/ui-components";
```

## Available Components

- **Actions** - Button, IconButton, LinkButton
- **Feedback** - Alert, Toast, Progress, Spinner
- **Form** - Input, Select, Checkbox, Radio, Textarea, Label
- **Layout** - Box, Flex, Grid, Stack
- **Modals** - Dialog, Drawer, Popover, Tooltip, FocusModal
- **Navigation** - Tabs, Breadcrumb
- **Overlays** - Badge, Chip
- **Table** - Table

## Storybook

Run Storybook to view and interact with components:

```bash
npm run storybook
```

## Styling

Components use Tailwind CSS with CSS custom properties. Import the CSS in your app:

```typescript
import "@zevaguillo/ui-components/dist/index.css";
```

Or configure Tailwind with the preset:

```javascript
// tailwind.config.js
module.exports = {
  presets: [require("@zevaguillo/ui-preset")],
};
```
