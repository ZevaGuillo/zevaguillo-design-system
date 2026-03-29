import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Kbd Component

A keyboard key element for displaying shortcuts.

### When to use:
- Keyboard shortcuts
- Hotkey hints
- Input methods
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: "Ctrl",
  },
};

export const SingleKeys: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Kbd>Ctrl</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Alt</Kbd>
      <Kbd>Del</Kbd>
    </div>
  ),
};

export const Shortcut: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      <Kbd>Ctrl</Kbd>
      <Kbd>+</Kbd>
      <Kbd>C</Kbd>
    </div>
  ),
};

export const CommonShortcuts: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div>
        Copy: <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
      </div>
      <div>
        Paste: <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>
      </div>
      <div>
        Save: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
      </div>
    </div>
  ),
};
