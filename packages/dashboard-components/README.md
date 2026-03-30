# @zevaguillo/dashboard-components

Specialized UI components for building admin dashboards. Built on top of `@zevaguillo/ui-components` with additional patterns for data-heavy applications.

## Installation

```bash
npm install @zevaguillo/dashboard-components @zevaguillo/ui-components
```

## Peer Dependencies

```bash
npm install react react-dom react-router-dom
```

## Usage

```typescript
import {
  Shell,
  DataTable,
  RouteFocusModal,
} from "@zevaguillo/dashboard-components";
```

## Available Components

### Layout

- `Shell` - Main application shell with sidebar
- `MainLayout` - Two-column layout wrapper
- `TwoColumnPage` - Page with sidebar and main content
- `SingleColumnPage` - Single column page layout

### Modals

- `RouteFocusModal` - Modal for route-based forms
- `RouteDrawer` - Drawer for route-based forms

### Table

- `DataTable` - Full-featured data table with sorting, filtering, pagination
- Table cells, headers, and filters
- `DataTableFilter` - Filter components

### Filtering

- Filter bar components
- Date range filters
- Multi-select filters

### Common

- `BadgeListSummary` - Summary badges
- `EmptyState` - Empty state display
- And more...

## Storybook

Run Storybook to view and interact with components:

```bash
npm run storybook
```

## Styling

Import the CSS:

```typescript
import "@zevaguillo/dashboard-components/dist/index.css";
```

Or ensure Tailwind is configured with the preset.
